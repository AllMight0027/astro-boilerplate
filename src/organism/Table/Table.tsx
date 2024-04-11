import type { TableDataProps } from "../../atoms/TableData/TableData";
import TableHead, {
  type TableHeaderProps,
} from "../../molecules/TableHeader/TableHeader";
import TableRow from "../../molecules/TableRow/TableRow";

type Props = TableHeaderProps & {
  rows: TableDataProps[][];
};

const Table = (props: Props) => {
  return (
    <table className="w-full border-b border-slate-300">
      <thead>
        <TableHead headings={props.headings} />
      </thead>
      <tbody>
        {props.rows.length > 0 ? (
          props.rows.map((row) => <TableRow row={row} />)
        ) : (
          <TableRow
            row={[
              {
                label: "",
                style: {
                  height: "50px",
                },
              },
            ]}
          />
        )}
      </tbody>
    </table>
  );
};

export default Table;
