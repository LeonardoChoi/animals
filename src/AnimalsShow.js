import React from "react";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import dog from "./svg/dog.svg";
import cow from "./svg/cow.svg";
import horse from "./svg/horse.svg";
import heart from "./svg/heart";

const svgMap = {
  bird,
  cat,
  dog,
  cow,
  horse,
  heart,
};

function AnimalsShow({ type }) {
  return (
    <div>
      <img src={svgMap[type]} alt="animal" />
    </div>
  );
}
