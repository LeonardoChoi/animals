import "./App.css";
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
    <div className="app">
      <button onClick={handleClick}>add animal</button>
      <h1 className="animal-list">{renderedAnimals}</h1>
    </div>
  );
}

export default App;
