import { ratingMeter } from "./ratingMeters/modifier";
import { table } from "./table/modifier";

export type Action = {
  type: string;
  payload?: any;
  modifier?: string;
};

type Modifier = {
  [key: string]: any;
};

const modifiers: Modifier = { ratingMeter, table };

export const dispatch = ({ modifier = "all", ...action }: Action) => {
  Object.keys(modifiers)
    .filter((key) => modifier === "all" || modifier === key)
    .forEach((key) => {
      modifiers[key](action);
    });
};
