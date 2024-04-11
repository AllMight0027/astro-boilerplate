import InfoText from "../../molecules/InfoText/InfoText";
import { Text } from "../Text/Text";

export type TableHeadProps = {
  label: string | JSX.Element;
  align?: "left" | "right" | "center";
  width?: string;
  infoText?: string;
};

const TableHead = ({
  align = "left",
  label,
  width = "auto",
  infoText,
}: TableHeadProps) => {
  return (
    <th
      className=" border-y border-slate-300 bg-gray-100 px-2 py-2 text-xs font-black"
      style={{
        textAlign: align,
        width,
      }}
    >
      <Text type="subtitle" label={label} />
    </th>
  );
};

export default TableHead;
