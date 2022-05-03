import { useState } from "react";
const StarWars = () => {
  const [charLookup, setCharLookup] = useState(1);
  const validateInput = (input) => {
    const numInput = parseInt(input)

     return ((1 <= numInput) && (numInput <= 83) && (numInput !== 17) && (numInput !== 0));
   
  };
  return (
    <div>
      <form>
        <label>
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
            console.log(validateInput(charLookup));
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default StarWars;
