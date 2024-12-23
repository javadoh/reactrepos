import { useState } from "react";
import images from "./img/index";
import "./AnimalShow.css";

function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);
  const pathImg = images.hasOwnProperty(type) ? images[type].default : null;

  const handleClick = () => {
    if (clicks < 10) {
      setClicks(clicks + 1);
    } else {
      alert("¡máximo de puntos alcanzado!");
    }
  };
  console.log(pathImg);
  return (
    <div className="animal-show" onClick={handleClick}>
      <img className="animal-image" src={pathImg} alt={type} />
      <img
        className="heart-image"
        style={{ width: 10 + 10 * clicks + "px" }}
        src={images.heart.default}
        alt="heart"
      />
      <span className="heart-clicks">{clicks}</span>
    </div>
  );
}

export default AnimalShow;
