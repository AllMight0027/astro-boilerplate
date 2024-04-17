import type { TableDataProps } from "../atoms/TableData/TableData";
import RatingTableActions from "../molecules/RatingTableActions/RatingTableActions";
import Header from "../organism/Header/Header";
import Table from "../organism/Table/Table";
import useRatingMeters from "../stores/ratingMeters";
import { useStore } from "@nanostores/react";
import {
  addRatingMeters,
  deleteRatingMeters,
} from "../stores/ratingMeters/actions";

type Props = {
  rows: TableDataProps[][];
};

const RatingMeterListing = (props: Props) => {
  const $ratingMeterStore = useRatingMeters({
    rows: props.rows,
  });
  const { rows } = useStore($ratingMeterStore);

  return (
    <div>
      <Header
        pageName="Rating Meters"
        pageIcon="https://img.icons8.com/material-outlined/42/ffffff/link-company-parent.png"
        buttons={[
          {
            label: "Add",
            onClick: () => {
              addRatingMeters();
            },
          },
          {
            label: "New",
            primary: true,
            onClick: () => {
              const a = document.createElement("a");
              a.href = "/rating-meter/new";
              a.click();
            },
            testId: "new-meter-btn",
          },
        ]}
        text={`${rows?.length} Rating Meters • Sorted by Name • Updated few seconds ago`}
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
        rows={
          rows?.map((row, i) => [
            ...row,
            {
              label: (
                <RatingTableActions onDelete={() => deleteRatingMeters(i)} />
              ),
              align: "center",
            },
          ]) ?? []
        }
      />
    </div>
  );
};

export default RatingMeterListing;
