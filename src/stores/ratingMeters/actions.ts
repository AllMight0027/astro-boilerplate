import type { TableDataProps } from "../../atoms/TableData/TableData";
import useRatingMeters, { type RMStoreProps } from ".";
import { modifyRatingMetersList } from "../../utils/ratingMeterUtil";
import { ratingMeterList } from "../../../fakeData";
import type { DeepMapStore } from "nanostores";
import { ratingMeterModifier } from "./modifier";
import { ADD_RATING_METER, DELETE_RATING_METER } from "./types";

export function setRatingMeters(
  $store: DeepMapStore<RMStoreProps>,
  rows: TableDataProps[][],
) {
  // $ratingMeterStore?.setKey("rows", rows);
}

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

  ratingMeterModifier({
    type: ADD_RATING_METER,
    payload: modifyRatingMetersList([res]),
  });
}

export function deleteRatingMeters(index: number) {
  //API_CALL
  ratingMeterModifier({
    type: DELETE_RATING_METER,
    payload: index,
  });
}
