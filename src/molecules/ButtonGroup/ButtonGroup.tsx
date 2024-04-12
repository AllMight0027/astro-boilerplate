import { Button, type ButtonProps } from "../../atoms/Button/Button";

type Props = {
  buttons?: ButtonProps[];
};

const ButtonGroup = ({ buttons }: Props) => {
  return (
    <div className="flex items-center gap-x-2">
      {buttons?.map((args, i) => (
        <Button key={`${args.label}-${i}`} {...args} />
      ))}
    </div>
  );
};

export default ButtonGroup;
