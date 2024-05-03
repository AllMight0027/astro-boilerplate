import { deepMap, type DeepMapStore } from "nanostores";

export type RMStoreProps = {
  rows: any[];
};

let store: DeepMapStore<RMStoreProps> | null = null;

const useTable = (init?: RMStoreProps) => {
  if (store) return store;
  store = deepMap<RMStoreProps>(init);
  return store;
};

export default useTable;
