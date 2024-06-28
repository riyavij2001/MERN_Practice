import React, { useEffect, useState } from "react";


function Props_first(props) {

  const [name, setName] = useState("Riya")

  useEffect(() => {
    console.log(`My name is ${name} now`);
  }, [name]);
  

  return (
    <div style={{ alignItems:'center', justifyContent:'center'}}>
     Hello my name is {name}
     <button onClick={() => setName("Muskan")}>Change Name</button>
     <button onClick={() => setName("Adi")}>Change Name again</button>
    </div>
  );
}

export default Props_first;
