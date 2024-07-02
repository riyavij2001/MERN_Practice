import React from "react";
import useInput from "./useInput";

function Hooks() {
  const [titleProps, resetTitle] = useInput("");
  const [colourProps, resetColour] = useInput("#000000");
  const submit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value} sounds like ${colourProps.value}`);
    resetTitle("");
    resetColour("");
  };
  return (
    <form onSubmit= {submit}>
      <input type="text" {...titleProps} />
      <input type="text" {...colourProps} />
      {/* <button onClick={submit}>Reset</button> */}
    </form>
  );
}

export default Hooks;
