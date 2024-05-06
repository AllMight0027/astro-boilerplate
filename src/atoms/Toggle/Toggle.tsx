import "./toggle.css";

const Toggle = ({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}) => {
  return (
    <div className="flex w-fit items-center gap-x-1 whitespace-nowrap text-sm">
      <label className="switch">
        <input type="checkbox" checked={checked} onChange={onChange} />
        <div className="slider"></div>
      </label>
      {label}
    </div>
  );
};

export default Toggle;
