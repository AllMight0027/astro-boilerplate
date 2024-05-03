import { makeData } from "../../../fakeData";
import { SET_TABLE_ROWS } from "./types";
import { dispatch } from "../store";

export function fetchTableRows() {
  const rows: any[] = makeData(500);
  return rows;
}

export function setTableRows(list: any[]) {
  //API_CALL

  dispatch({
    type: SET_TABLE_ROWS,
    payload: list,
  });
}
