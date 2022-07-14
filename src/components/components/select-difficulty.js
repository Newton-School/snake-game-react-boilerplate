import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { SelectDifficultySchema } from "./validation";

const SelectDifficulty = (props) => {
  const [value, setValue] = useState(null);
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    SelectDifficultySchema.validate(value, { abortEarly: false })
      .then(() => {
        setError(false);
        switch (value) {
          case "easy":
            props.setSpeed(250);
            break;
          case "normal":
            props.setSpeed(150);
            break;
          case "hard":
            props.setSpeed(50);
            break;
        }
        props.setOpenModal(false);
      })
      .catch((err) => {
        setError(true);
      });
  };

  return (
    <form>
      <div className="select-difficulty-form">
        <FormControl help>
          <FormLabel id="demo-controlled-radio-buttons-group">
            Select Difficulty:
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel value="easy" control={<Radio />} label="Easy" />
            <FormControlLabel
              value="normal"
              control={<Radio />}
              label="Normal"
            />
            <FormControlLabel value="hard" control={<Radio />} label="Hard" />
          </RadioGroup>
          {error && (
            <FormHelperText error={error}>
              Please choose a difficulty-level.
            </FormHelperText>
          )}
        </FormControl>
        <Button
          variant="contained"
          disabled={value == null}
          type="submit"
          onClick={handleSubmit}
        >
          Start Game
        </Button>
      </div>
    </form>
  );
};

export default SelectDifficulty;
