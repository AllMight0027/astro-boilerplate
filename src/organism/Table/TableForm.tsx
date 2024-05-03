import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
  type MRT_RowVirtualizer,
} from "material-react-table";
import { useMemo, useRef, useState } from "react";
import { camel2title } from "../../../fakeData";
import { Input } from "../../atoms/Input/Input";
import { Button } from "../../atoms/Button/Button";

type TableFormProps = {
  list: any[];
  setList: ([]) => void;
};

const TableForm = ({ list, setList }: TableFormProps) => {
  const [data, setData] = useState<any[]>(list);

  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () =>
      Object.keys(list?.[0] ?? {})?.map((c) => ({
        accessorKey: c,
        header: camel2title(c),
        Cell: ({ cell }) => {
          type TCellValue = {
            value: string;
            locked: boolean;
          };
          const cellData = cell.getValue() as TCellValue;
          return (
            <>
              <Input
                value={cellData.value}
                onChange={(e) => {
                  const newList = JSON.parse(JSON.stringify(data));
                  newList[cell.row.id][cell.column.id].value = e.target.value;
                  setData(newList);
                }}
                disabled={cellData.locked}
              />
              {cellData.locked && (
                <span
                  className="absolute right-6 ml-2 cursor-pointer bg-gray-50 pl-1"
                  onClick={() => {
                    const newList = JSON.parse(JSON.stringify(data));
                    newList[cell.row.id][cell.column.id].locked = false;
                    setData(newList);
                  }}
                >
                  &#128274;
                </span>
              )}
            </>
          );
        },
      })),
    [data],
  );

  const rowVirtualizerInstanceRef = useRef<MRT_RowVirtualizer>(null);

  const table = useMaterialReactTable({
    columns,
    data,
    enableBottomToolbar: false,
    enableTopToolbar: false,
    enableToolbarInternalActions: false,
    enableColumnFilters: false,
    enableSorting: false,
    enableColumnResizing: true,
    enableColumnVirtualization: true,
    enableGlobalFilterModes: true,
    enablePagination: false,
    enableColumnPinning: true,
    enableRowNumbers: false,
    enableRowVirtualization: true,
    enableHiding: false,
    muiTablePaperProps: {
      className: "border border-slate-300 shadow-none",
    },
    muiTableContainerProps: {
      sx: { maxHeight: "600px" },
    },
    muiTopToolbarProps: { style: { height: "0px", minHeight: "1px" } },
    rowVirtualizerInstanceRef,
    muiTableBodyRowProps: {
      hover: false,
      className: "even:!bg-slate-50",
    },
    muiTableBodyCellProps: {
      className: "border-none",
    },
    muiTableHeadCellProps: {
      className:
        "border-b border-slate-300 bg-gray-100 px-2 py-2 text-xs font-black",
    },
    muiTableHeadRowProps: {
      className: "divide-x divide-slate-300",
    },
    renderEmptyRowsFallback: () => <div></div>,
  });

  return (
    <>
      <div>
        <MaterialReactTable table={table} />
        <div className="mt-4 flex gap-2">
          <Button outlined onClick={() => setData(list)}>
            Reset
          </Button>
          <Button primary onClick={() => setList(data)}>
            Save
          </Button>
        </div>
      </div>
    </>
  );
};

export default TableForm;
