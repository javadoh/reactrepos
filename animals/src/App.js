import { useState } from "react";
import "./App.css";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => (
    <AnimalShow key={index} type={animal} />
  ));

  return (
    <div className="app">
      <button onClick={handleClick}>Show Animal </button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
}

export default App;
