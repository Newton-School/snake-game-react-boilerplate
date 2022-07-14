import React from "react";

const Snake = (props) => {
  return (
    <div className={`snake-body${props.snake}`}>
      {props.snakeState.map((state, i) => {
        const coordinates = {
          left: `${state[0]}%`,
          top: `${state[1]}%`,
        };
        return (
          <div
            className="snake"
            key={i}
            id={i}
            tabIndex={i}
            style={{
              ...coordinates,
              backgroundColor: props.backgroundColor || "#1e3cc8",
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default Snake;
