import * as yup from "yup";

export const SelectDifficultySchema = yup
  .string()
  .required("Please choose a difficulty-level.");
