import "./input.css";

export type InputProps = {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  style?: React.CSSProperties;
  width?: string;
  disabled?: boolean;
};

export const Input = ({
  value = "",
  onChange = () => {},
  placeholder,
  style = {},
  width = "280px",
  disabled,
  ...props
}: InputProps) => {
  return (
    <input
      value={value}
      style={{
        width,
        ...style,
      }}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      {...props}
    />
  );
};
