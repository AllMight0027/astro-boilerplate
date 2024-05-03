import { useMemo, useRef, useState } from "react";
import { camel2title } from "../../../fakeData";
import { Input, type InputProps } from "../../atoms/Input/Input";
import { Button } from "../../atoms/Button/Button";
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  type Row,
  useReactTable,
} from "@tanstack/react-table";

import { useVirtualizer } from "@tanstack/react-virtual";

type TableFormProps = {
  list: any[];
  setList: (list: any[]) => void;
};

const TableForm = ({ list, setList }: TableFormProps) => {
  const [data, setData] = useState<any[]>(list);

  const columns = useMemo<ColumnDef<any>[]>(
    () =>
      Object.keys(list?.[0] ?? {})?.map((c) => {
        const title: string = camel2title(c);
        return {
          accessorKey: c,
          header: title,
          size: title.length * 7 > 180 ? title.length * 7 : 180,
          cell: ({ cell }) => {
            type TCellValue = {
              value: string;
              locked: boolean;
            };
            const cellData = cell.getValue() as TCellValue;
            return (
              <TableFormInput
                value={cellData.value}
                onChange={(e) => {
                  setData((data) => {
                    const newList = JSON.parse(JSON.stringify(data));
                    newList[parseInt(cell.row.id)][cell.column.id].value =
                      e.target.value;
                    return newList;
                  });
                }}
                disabled={cellData.locked}
                onUnlock={() => {
                  setData((data) => {
                    const newList = JSON.parse(JSON.stringify(data));
                    newList[parseInt(cell.row.id)][cell.column.id].locked =
                      false;
                    return newList;
                  });
                }}
              />
            );
          },
        };
      }),
    [],
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const { rows } = table.getRowModel();

  const visibleColumns = table.getVisibleLeafColumns();

  //The virtualizers need to know the scrollable container element
  const tableContainerRef = useRef<HTMLDivElement>(null);

  //we are using a slightly different virtualization strategy for columns (compared to virtual rows) in order to support dynamic row heights
  const columnVirtualizer = useVirtualizer({
    count: visibleColumns.length,
    estimateSize: (index) => visibleColumns[index].getSize(), //estimate width of each column for accurate scrollbar dragging
    getScrollElement: () => tableContainerRef.current,
    horizontal: true,
    overscan: 3, //how many columns to render on each side off screen each way (adjust this for performance)
  });

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    estimateSize: () => 48, //estimate row height for accurate scrollbar dragging
    getScrollElement: () => tableContainerRef.current,
    //measure dynamic row height, except in firefox because it measures table border height incorrectly
    measureElement:
      typeof window !== "undefined" &&
      navigator.userAgent.indexOf("Firefox") === -1
        ? (element) => element?.getBoundingClientRect().height
        : undefined,
    overscan: 5,
  });

  const virtualColumns = columnVirtualizer.getVirtualItems();
  const virtualRows = rowVirtualizer.getVirtualItems();

  let virtualPaddingLeft: number | undefined;
  let virtualPaddingRight: number | undefined;

  if (columnVirtualizer && virtualColumns?.length) {
    virtualPaddingLeft = virtualColumns[0]?.start ?? 0;
    virtualPaddingRight =
      columnVirtualizer.getTotalSize() -
      (virtualColumns[virtualColumns.length - 1]?.end ?? 0);
  }

  return (
    <>
      <div
        className="border border-slate-300"
        ref={tableContainerRef}
        style={{
          overflow: "auto", //our scrollable table container
          position: "relative", //needed for sticky header
          height: "800px", //should be a fixed height
        }}
      >
        <table className="grid w-full border-b border-slate-300">
          <thead className="sticky top-0 z-10 grid">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                key={headerGroup.id}
                className="flex w-full divide-x divide-slate-300"
              >
                {virtualPaddingLeft ? (
                  //fake empty column to the left for virtualization scroll padding
                  <th style={{ display: "flex", width: virtualPaddingLeft }} />
                ) : null}
                {virtualColumns.map((vc) => {
                  const header = headerGroup.headers[vc.index];
                  return (
                    <th
                      key={header.id}
                      className="flex border-b border-slate-300 bg-gray-100 px-2 py-2 text-xs font-black"
                      style={{
                        width: header.getSize(),
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                    </th>
                  );
                })}
                {virtualPaddingRight ? (
                  //fake empty column to the right for virtualization scroll padding
                  <th
                    className="flex border-y border-slate-300 bg-gray-100 px-2 py-2 text-xs font-black"
                    style={{ width: virtualPaddingRight }}
                  />
                ) : null}
              </tr>
            ))}
          </thead>
          <tbody
            style={{
              display: "grid",
              height: `${rowVirtualizer.getTotalSize()}px`, //tells scrollbar how big the table is
              position: "relative", //needed for absolute positioning of rows
            }}
          >
            {virtualRows.map((virtualRow) => {
              const row = rows[virtualRow.index] as Row<any[]>;
              const visibleCells = row.getVisibleCells();

              return (
                <tr
                  data-index={virtualRow.index} //needed for dynamic row height measurement
                  ref={(node) => rowVirtualizer.measureElement(node)} //measure dynamic row height
                  key={row.id}
                  className="even:bg-slate-50"
                  style={{
                    display: "flex",
                    position: "absolute",
                    transform: `translateY(${virtualRow.start}px)`,
                    width: "100%",
                  }}
                >
                  {virtualPaddingLeft ? (
                    <td
                      style={{ display: "flex", width: virtualPaddingLeft }}
                    />
                  ) : null}
                  {virtualColumns.map((vc) => {
                    const cell = visibleCells[vc.index];
                    return (
                      <td
                        className="flex px-2 py-3 text-xs"
                        key={cell.id}
                        style={{
                          width: cell.column.getSize(),
                        }}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    );
                  })}
                  {virtualPaddingRight ? (
                    <td
                      className="px-2 py-3 text-xs"
                      style={{ display: "flex", width: virtualPaddingRight }}
                    />
                  ) : null}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex gap-2">
        <Button outlined onClick={() => setData(list)}>
          Reset
        </Button>
        <Button primary onClick={() => setList(data)}>
          Save
        </Button>
      </div>
    </>
  );
};

export default TableForm;

const TableFormInput = ({
  value,
  onChange,
  disabled,
  onUnlock,
}: InputProps & { onUnlock: () => void }) => {
  return (
    <div className="relative flex w-full">
      <Input value={value} onChange={onChange} disabled={disabled} />
      {disabled && (
        <span
          className="absolute right-1 top-1 cursor-pointer bg-gray-100 pl-1"
          onClick={onUnlock}
        >
          &#128274;
        </span>
      )}
    </div>
  );
};
