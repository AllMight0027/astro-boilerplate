import { Text, type TextProps } from "../../atoms/Text/Text";

export type InfoTextProps = TextProps & {
  infoText?: string;
};

const InfoText = (props: InfoTextProps) => {
  return (
    <div className="flex items-center gap-x-1 w-fit">
      <Text {...props} />
      {props.infoText && (
        <img
          width="16"
          height="16"
          src="https://img.icons8.com/ios/42/444444/info--v1.png"
          alt="info--v1"
        />
      )}
    </div>
  );
};

export default InfoText;
