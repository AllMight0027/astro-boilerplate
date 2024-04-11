import { Text } from "../../atoms/Text/Text";

type Props = {
  name: string;
  icon?: string;
};

const PageName = ({ icon, name }: Props) => {
  return (
    <div className="flex items-center gap-x-3">
      {icon ? (
        <div className="rounded w-9 h-9 flex items-center justify-center bg-purple-800">
          <img style={{ width: "24px", height: "24px" }} src={icon} />
        </div>
      ) : (
        <span className="cursor-pointer" onClick={() => history.back()}>
          &#8592;
        </span>
      )}
      <Text type={icon ? "heading" : "title"}>{name}</Text>
    </div>
  );
};

export default PageName;
