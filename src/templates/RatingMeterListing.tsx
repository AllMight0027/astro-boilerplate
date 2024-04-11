import type { TableDataProps } from "../atoms/TableData/TableData";
import RatingTableActions from "../molecules/RatingTableActions/RatingTableActions";
import Header from "../organism/Header/Header";
import Table from "../organism/Table/Table";

type Props = {
  rows: TableDataProps[][];
};

const RatingMeterListing = (props: Props) => {
  return (
    <div>
      <Header
        pageName="Rating Meters"
        pageIcon="https://img.icons8.com/material-outlined/42/ffffff/link-company-parent.png"
        buttons={[
          {
            label: "Import",
          },
          {
            label: "New",
            primary: true,
            onClick: () => {
              const a = document.createElement("a");
              a.href = "/rating-meter/new";
              a.click();
            },
          },
        ]}
        text={`${props.rows.length} Rating Meters • Sorted by Name • Updated few seconds ago`}
        textType="subtitle"
      />
      <Table
        headings={[
          {
            label: "Name",
            align: "center",
            width: "17%",
          },
          {
            label: "Usage Identifier Definiton",
            width: "20%",
          },
          {
            label: "Description",
            width: "20%",
          },
          {
            label: "Status",
            width: "17%",
          },
          {
            label: "",
          },
        ]}
        rows={props.rows.map((row) => [
          ...row,
          {
            label: <RatingTableActions />,
            align: "center",
          },
        ])}
      />
    </div>
  );
};

export default RatingMeterListing;
