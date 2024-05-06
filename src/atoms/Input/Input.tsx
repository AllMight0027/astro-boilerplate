import "./input.css";

export type InputProps = {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  style?: React.CSSProperties;
  width?: string;
  disabled?: boolean;
  className?: string;
};

export const Input = ({
  value = "",
  onChange = () => {},
  placeholder,
  style = {},
  width = "280px",
  disabled,
  className = "",
}: InputProps) => {
  return (
    <input
      value={value}
      style={{
        width,
        ...style,
      }}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
    />
  );
};
