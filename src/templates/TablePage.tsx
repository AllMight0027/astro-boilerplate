import { useStore } from "@nanostores/react";
import useTable from "../stores/table";
import TableForm from "../organism/Table/TableForm";
import { setTableRows } from "../stores/table/actions";
import Header from "../organism/Header/Header";
import { useEffect, useState } from "react";

type Props = {
  rows: object[];
};

const TablePage = (props: Props) => {
  const $tableStore = useTable({
    rows: props.rows,
  });
  const { rows } = useStore($tableStore);
  const [data, setData] = useState<any[]>([]);

  const onAddRow = () => {
    const obj = { ...data[0] };
    Object.keys(data[0]).forEach(
      (v: string) =>
        (obj[v] = {
          value: "",
        }),
    );
    setData([obj, ...data]);
  };

  useEffect(() => {
    setData(rows);
  }, [rows]);

  return (
    <>
      <Header
        pageName="Usage Records"
        pageIcon="https://img.icons8.com/ios-filled/100/ffffff/storage.png"
        buttons={[
          {
            label: "Add",
            onClick: onAddRow,
          },
          {
            label: "Bulk Import",
            primary: true,
            onClick: () => {},
          },
        ]}
      />{" "}
      <div className="px-4">
        <TableForm
          list={rows}
          setList={(list) => {
            setTableRows(list);
          }}
          data={data}
          setData={setData}
        />
      </div>
    </>
  );
};

export default TablePage;
