import useTable from ".";
import type { Action } from "../store";
import { SET_TABLE_ROWS } from "./types";

export const table = (action: Action) => {
  const $tableStore = useTable();
  const state = $tableStore.get();

  const newState = (function () {
    switch (action.type) {
      case SET_TABLE_ROWS:
        return {
          ...state,
          rows: [...action.payload],
        };

      default:
        return null;
    }
  })();
  if (newState) $tableStore.set(newState);
};
