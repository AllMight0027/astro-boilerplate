import { useStore } from "@nanostores/react";
import useTable from "../stores/table";
import TableForm from "../organism/Table/TableForm";
import { setTableRows } from "../stores/table/actions";

type Props = {
  rows: object[];
};

const TablePage = (props: Props) => {
  const $tableStore = useTable({
    rows: props.rows,
  });
  const { rows } = useStore($tableStore);
  return (
    <TableForm
      list={rows}
      setList={(list) => {
        setTableRows(list);
      }}
    />
  );
};

export default TablePage;
