type Props = {
  onDelete: () => void;
};

const RatingTableActions = ({ onDelete }: Props) => {
  return (
    <div className="flex items-center justify-center gap-x-4">
      <img
        width="18"
        height="18"
        src="https://img.icons8.com/material-outlined/42/edit--v1.png"
        alt="edit--v1"
      />
      <img
        width="18"
        height="18"
        src="https://img.icons8.com/material-outlined/42/trash--v1.png"
        alt="trash--v1"
        onClick={onDelete}
        className="cursor-pointer"
      />
      <img
        width="18"
        height="18"
        src="https://img.icons8.com/material-outlined/42/copy.png"
        alt="copy"
      />
    </div>
  );
};

export default RatingTableActions;
