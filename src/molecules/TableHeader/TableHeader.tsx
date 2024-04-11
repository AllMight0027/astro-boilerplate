import type { TableHeadProps } from "../../atoms/TableHead/TableHead";
import TableHead from "../../atoms/TableHead/TableHead";

export type TableHeaderProps = {
  headings: TableHeadProps[];
};

const TableHeader = ({ headings }: TableHeaderProps) => {
  return (
    <tr className="divide-x divide-slate-300">
      {headings.map((args) => (
        <TableHead {...args} />
      ))}
    </tr>
  );
};

export default TableHeader;
