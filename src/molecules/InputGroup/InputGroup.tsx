import { Input, type InputProps } from "../../atoms/Input/Input";
import InfoText, { type InfoTextProps } from "../InfoText/InfoText";

type Props = InputProps & InfoTextProps;

const InputGroup = ({ infoText, type, style, label, ...inputProps }: Props) => {
  return (
    <div>
      <InfoText {...{ infoText, style, type, label }} />
      <Input
        style={{
          marginTop: "8px",
        }}
        placeholder={`Enter ${label}`}
        {...inputProps}
      />
    </div>
  );
};

export default InputGroup;
