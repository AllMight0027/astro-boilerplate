import { deepMap, type DeepMapStore } from "nanostores";
import type { TableDataProps } from "../../atoms/TableData/TableData";

export type RMStoreProps = {
  rows: TableDataProps[][];
};

let store: DeepMapStore<RMStoreProps> | null = null;

const useRatingMeters = (init?: RMStoreProps) => {
  if (store) return store;
  store = deepMap<RMStoreProps>(init);
  return store;
};

export default useRatingMeters;
