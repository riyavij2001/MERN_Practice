import React, { useEffect, useState } from "react";

function UseEfect() {

    const[name, setName] = useState('Riya');
    const[admin, setAdmin] = useState(false);

    useEffect(() => {
        console.log(`Celebrate ${name}`);
    }, [name]);

    useEffect(() => {
        console.log(`The user is: ${admin ? "admin" : "not admin"}`)
    }, [admin])

  return (
    <div>
      <h1>UseEfect</h1>
      <br />
      <h2>Congratulations {name}</h2>
      <button onClick={() => setName('Muskan')}>Change Name</button>
      <h2>Congratulations {admin ? "Logged In" : "Not Logged In"}</h2>
      <button onClick={() => setAdmin(true)}>Change Name</button>


    </div>
  );
}

export default UseEfect;
