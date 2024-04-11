import type { ButtonProps } from "../../atoms/Button/Button";
import { Text } from "../../atoms/Text/Text";
import ButtonGroup from "../../molecules/ButtonGroup/ButtonGroup";
import PageName from "../../molecules/PageName/PageName";

type Props = {
  pageName: string;
  pageIcon?: string;
  buttons?: ButtonProps[];
  text?: string;
  textType?: "heading" | "subtitle";
};

const Header = (props: Props) => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <PageName name={props.pageName} icon={props.pageIcon} />
        {!!props.buttons?.length && <ButtonGroup buttons={props.buttons} />}
      </div>
      {props.text && (
        <div className="mt-4">
          <Text type={props.textType}>{props.text}</Text>
        </div>
      )}
    </div>
  );
};

export default Header;
