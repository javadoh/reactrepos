import { useState } from "react";
import images from "./img/index";

function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);
  const pathImg = images.hasOwnProperty(type) ? images[type].default : null;

  const handleClick = () => {
    setClicks(clicks + 1);
  };
  console.log(pathImg);
  return (
    <div onClick={handleClick}>
      <img
        style={{ width: 100 + "px", height: 100 + "px" }}
        src={pathImg}
        alt={type}
      />
      <img
        style={{ width: 10 + 10 * clicks + "px" }}
        src={images.heart.default}
        alt="heart"
      />
    </div>
  );
}

export default AnimalShow;
