import { useState } from "react";
import React from "react";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import dog from "./svg/dog.svg";
import cow from "./svg/cow.svg";
import horse from "./svg/horse.svg";
import heart from "./svg/heart.svg";

const svgMap = {
  bird,
  cat,
  dog,
  cow,
  horse,
};

function AnimalsShow({ type }) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div onClick={handleClick}>
      <img src={svgMap[type]} alt="animal" />
      <img src={heart} alt="heart" style={{ width: 10 + 10 * clicks }} />
    </div>
  );
}

export default AnimalsShow;
