import React, { useState } from "react";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  return { value, onchange: (e) => setValue(e.target.value) };
}

export default useInput;
