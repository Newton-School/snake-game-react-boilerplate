import { Typography } from "@mui/material";
import React from "react";

const GameStats = (props) => {
  const speed = props.speed;

  const showDiff = () => {
    switch (speed) {
      case 50:
        return "H";
      case 150:
        return "N";
      case 250:
        return "E";
    }
  };

  return (
    <div className="game-stats-container" style={{ width: props.dim }}>
      <div className="game-stats">
        <Typography style={{ color: "#EAEAEA" }}>FIRST SNAKE SCORE</Typography>
        <Typography style={{ color: "#EAEAEA" }} variant="h2">
          {props.snakeOne.length}
        </Typography>
      </div>
      <div className="game-stats">
        <Typography style={{ color: "#EAEAEA" }}>SECOND SNAKE SCORE</Typography>
        <Typography style={{ color: "#EAEAEA" }} variant="h2">
          {props.snakeTwo.length}
        </Typography>
      </div>
      <div className="game-stats">
        <Typography style={{ color: "#EAEAEA" }}>DIFFICULTY</Typography>
        <Typography style={{ color: "#EAEAEA" }} variant="h2">
          {props.speed == null ? "-" : showDiff()}
        </Typography>
      </div>
    </div>
  );
};

export default GameStats;
