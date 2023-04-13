import React from "react";
import { useState } from "react";
import AnimalsShow from "./AnimalsShow";

function getRandAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalsShow type={animal} key={index} />;
  });

  return (
    <div>
      <button onClick={handleClick}>add animal</button>
      <h1>{renderedAnimals}</h1>
    </div>
  );
}

export default App;
