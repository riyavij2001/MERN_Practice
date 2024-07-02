import React, { useReducer } from "react";

function Usereducers() {
    const [number, setNumber] = useReducer((number, newNumber) => number + newNumber, 0)
  return (
    <div>
      <h1 onClick={() => {setNumber(1)}}>{number}</h1>
    </div>
  );
}

export default Usereducers;
