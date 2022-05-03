import { useState } from "react";
import ResultDisplay from "./ResultDisplay";
const StarWars = () => {
  const [charLookup, setCharLookup] = useState(1);
  const [searchResult, setSearchResult] = useState(null)
  const validateInput = (input) => {
    const numInput = parseInt(input);
    return 1 <= numInput && numInput <= 83 && numInput !== 17 && numInput !== 0;
  };
  const fetchData = async (input) => {
    if (validateInput(input)){
        const response = await fetch(`https://swapi.dev/api/people/${input}`)
        const data = await response.json()
        return data
    }
    alert("invalid input")
  }
  return (
    <div>
      <form className="inputForm">
        <label>
            <span>Enter a Number</span>
          <input
            type={"number"}
            onChange={(e) => setCharLookup(e.target.value)}
            value={charLookup}
            min={1}
            max={83}
          />
        </label>
        <button
          onClick={(e) => {
            e.preventDefault();
            fetchData(charLookup)
            .then((data) => {
                setSearchResult(data)
            });
          }}
        >
          Submit
        </button>
      </form>
      {searchResult && <ResultDisplay data={searchResult} />}
    </div>
  );
};
export default StarWars;
