import useRatingMeters from ".";
import { ADD_RATING_METER, DELETE_RATING_METER } from "./types";

type Action = {
  type: string;
  payload?: any;
};

export const ratingMeterModifier = (action: Action) => {
  const $ratingMeterStore = useRatingMeters();
  const state = $ratingMeterStore.get();

  const newState = (function () {
    switch (action.type) {
      case ADD_RATING_METER:
        return {
          ...state,
          rows: [...state.rows, ...action.payload],
        };
      case DELETE_RATING_METER:
        return {
          ...state,
          rows: [...state.rows.filter((_, i) => i !== action.payload)],
        };
      default:
        return state;
    }
  })();
  $ratingMeterStore.set(newState);
};
