import React from "react";

const Food = (props) => {
  const coordinates = {
    left: `${props.foodState[0]}%`,
    top: `${props.foodState[1]}%`,
  };

  return <div className="food" style={coordinates}></div>;
};

export default Food;
