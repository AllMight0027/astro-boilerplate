import type { TableDataProps } from "../../atoms/TableData/TableData";
import { modifyRatingMetersList } from "../../utils/ratingMeterUtil";
import { ratingMeterList } from "../../../fakeData";
import { ADD_RATING_METER, DELETE_RATING_METER } from "./types";
import { dispatch } from "../store";

export function fetchRatingMeters() {
  const rows: TableDataProps[][] = modifyRatingMetersList(ratingMeterList);
  return rows;
}

export function addRatingMeters() {
  //API_CALL
  const res = {
    name: "GCP Usages",
    uid: "AccountId + TransactionDate",
    description: "GCP usage data definition",
    status: "Inactive",
  };

  dispatch({
    type: ADD_RATING_METER,
    payload: modifyRatingMetersList([res]),
  });
}

export function deleteRatingMeters(index: number) {
  //API_CALL
  dispatch({
    type: DELETE_RATING_METER,
    payload: index,
  });
}
