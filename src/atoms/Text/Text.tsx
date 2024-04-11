export type TextProps = ConditionalProps & {
  type?: "heading" | "subtitle" | "title";
  color?: string;
  style?: React.CSSProperties;
};

type ConditionalProps =
  | { children?: string | JSX.Element; label?: never }
  | { label?: string | JSX.Element; children?: never };

export const Text = ({
  color = "black",
  type = "heading",
  style = {},
  ...props
}: TextProps) => {
  const value = props.label ? props.label : props.children;
  if (type === "heading")
    return (
      <h1 style={{ color, fontSize: "18px", ...style }} {...props}>
        {value}
      </h1>
    );
  else if (type === "title")
    return (
      <span style={{ color, fontSize: "15px", ...style }} {...props}>
        {value}
      </span>
    );
  return (
    <span style={{ color, fontSize: "12px", ...style }} {...props}>
      {value}
    </span>
  );
};
