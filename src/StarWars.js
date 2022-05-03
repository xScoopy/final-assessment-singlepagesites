import { useState } from "react";
import ResultDisplay from "./ResultDisplay";
import SavedList from "./SavedList";
const StarWars = () => {
  const [charLookup, setCharLookup] = useState(1);
  const [searchResult, setSearchResult] = useState(null);
  const [savedList, setSavedList] = useState([]);
  const validateInput = (input) => {
    const numInput = parseInt(input);
    return 1 <= numInput && numInput <= 83 && numInput !== 17 && numInput !== 0;
  };
  const fetchData = async (input) => {
    if (validateInput(input)) {
      const response = await fetch(`https://swapi.dev/api/people/${input}`);
      const data = await response.json();
      return data;
    }
    alert("invalid input");
  };
  const fetchHomeWorld = async (characterData) => {
    const response = await fetch(characterData.homeworld)
    const data = await response.json();
    return data
  }
  const fetchFilmTitles = async (characterData) => {
      const responses = await Promise.all(characterData.films.map(film => fetch(film)))
      const films = await Promise.all(responses.map(res => res.json()))
      return films
  }
  const saveResult = () => {
    setSavedList([...savedList, searchResult]);
  };
  console.log(savedList);
  return (
    <div className="infoHolder">
      <div className="searchHolder">
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
            onClick={async (e) => {
              e.preventDefault();
              fetchData(charLookup).then((data) => {
                fetchHomeWorld(data).then((homeworld) => {
                    data.homeworld = homeworld.name
                })
                fetchFilmTitles(data).then((films) => {
                    data.films = films.map(data => data.title)
                })
                setSearchResult(data);
              });
            }}
          >
            Submit
          </button>
        </form>
        {searchResult && <ResultDisplay data={searchResult} />}
        {searchResult && (
          <button
            onClick={(e) => {
              e.preventDefault();
              saveResult();
            }}
          >
            Save
          </button>
        )}
      </div>
      <div className="listHolder">{savedList.length > 0 && <SavedList list={savedList} />}</div>
    </div>
  );
};
export default StarWars;
