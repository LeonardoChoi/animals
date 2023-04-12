import React from "react";
import { useState } from "react";

function App() {
  const [numAnimals, setNumAnimals] = useState(0);
  function handleClick() {
    setNumAnimals(numAnimals + 1);

    console.log(numAnimals);
  }
  return (
    <div>
      <button onClick={handleClick}>add anima</button>
      <h1>Number of animals: {numAnimals}</h1>
    </div>
  );
}

export default App;
