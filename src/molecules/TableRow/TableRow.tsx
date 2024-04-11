import type { TableDataProps } from "../../atoms/TableData/TableData";
import TableData from "../../atoms/TableData/TableData";

type Props = {
  row: TableDataProps[];
};

const TableRow = ({ row }: Props) => {
  return (
    <tr className="even:bg-slate-50">
      {row.map((args) => (
        <TableData {...args} />
      ))}
    </tr>
  );
};

export default TableRow;
