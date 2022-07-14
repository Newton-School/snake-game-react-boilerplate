import React from "react";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";

const GameOver = (props) => {
  const handleClick = () => {
    window.location.href = "/";
  };

  const lengthOne = props.firstSnakeState.length;
  const lengthTwo = props.secondSnakeState.length;
  const checkIfHit = props.whichSnakeHits;

  return (
    <div>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {checkIfHit != null
            ? checkIfHit == 1
              ? "Second Snake Wins!"
              : "First Snake Wins!"
            : lengthOne != lengthTwo
            ? lengthOne > lengthTwo
              ? "First Snake Wins!"
              : "Second Snake Wins!"
            : "It's a Draw!"}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClick}>PLAY AGAIN</Button>
      </DialogActions>
    </div>
  );
};

export default GameOver;
