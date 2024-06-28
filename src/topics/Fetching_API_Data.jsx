import React, { useEffect, useState } from "react";

function GitHubUser({ name }) {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}

function Fetching_API_Data() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/moonhighway`)
      .then((response) => response.json())
      .then(setData);
  }, []);
  if (data) return <GitHubUser name={data.name} />
  return <h1>Data</h1>;
}

export default Fetching_API_Data;
