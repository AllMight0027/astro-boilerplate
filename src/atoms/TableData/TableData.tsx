export type TableDataProps = {
  label: string | JSX.Element;
  align?: "left" | "right" | "center";
  link?: string;
  style?: React.CSSProperties;
};

const TableData = ({ align = "left", label, style = {} }: TableDataProps) => {
  return (
    <td
      className="px-2 py-3 text-xs"
      style={{
        textAlign: align,
        ...style,
      }}
    >
      {label}
    </td>
  );
};

export default TableData;
