import { ratingMeter } from "./ratingMeters/modifier";

export type Action = {
  type: string;
  payload?: any;
  modifier?: string;
};

type Modifier = {
  [key: string]: any;
};

const modifiers: Modifier = { ratingMeter };

export const dispatch = ({ modifier = "all", ...action }: Action) => {
  Object.keys(modifiers)
    .filter((key) => modifier === "all" || modifier === key)
    .forEach((key) => {
      modifiers[key](action);
    });
};
