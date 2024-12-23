import { useState } from "react";
import AnimalShow from "./AnimalShow";
import "./App.css";

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
    <div>
      <button onClick={handleClick}>Show Animal </button>
      <div>{renderedAnimals}</div>
    </div>
  );
}

export default App;
