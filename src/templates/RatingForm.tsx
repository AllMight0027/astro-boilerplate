import { useState } from "react";
import ButtonGroup from "../molecules/ButtonGroup/ButtonGroup";
import InfoText from "../molecules/InfoText/InfoText";
import InputGroup from "../molecules/InputGroup/InputGroup";
import Header from "../organism/Header/Header";
import Table from "../organism/Table/Table";
import type { TableDataProps } from "../atoms/TableData/TableData";

const RatingForm = () => {
  const [rows, setRows] = useState([] as TableDataProps[][]);
  return (
    <div>
      <Header
        pageName="Rating Meters"
        buttons={[
          {
            label: "Cancel",
            onClick: () => {
              history.back();
            },
          },
          { label: "Save & Activate" },
          {
            label: "Save",
            primary: true,
          },
        ]}
        text="Editing Rating Meter"
        textType="heading"
      />
      <div className="px-4">
        <div className="border-t border-t-gray-200 p-4">
          <InputGroup type="subtitle" label="Name" infoText="This is info" />
          <br />
          <InputGroup
            type="subtitle"
            label="Description"
            infoText="This is info"
            width="100%"
          />
          <br />
          <div className="rounded-t-md border border-b-0 border-slate-300">
            <div className="flex items-center justify-between p-3">
              <InfoText type="title" infoText="This is info">
                Usage Field Definitions
              </InfoText>
              <ButtonGroup
                buttons={[
                  {
                    label: "Delete",
                    outlined: true,
                  },
                  { label: "Clone", outlined: true },
                  {
                    label: "Add",
                    outlined: true,
                    onClick: () => {
                      setRows([
                        ...rows,
                        [
                          { label: "Distance", align: "center" },
                          { label: "Number" },
                          { label: "No" },
                          { label: "10" },
                          { label: "-" },
                        ],
                      ]);
                    },
                  },
                ]}
              />
            </div>
            <Table
              headings={[
                {
                  label: "Field Name",
                  align: "center",
                  width: "20%",
                },
                {
                  label: "Data Type",
                  infoText: "info",
                  width: "17%",
                },
                {
                  label: "Optional",
                  infoText: "info",
                  width: "20%",
                },
                {
                  label: "Default Value",
                  infoText: "info",
                  width: "17%",
                },
                {
                  label: "Allowed Values",
                  infoText: "info",
                },
              ]}
              rows={rows}
            />
          </div>
          <br />
          <InputGroup type="title" label="Usage Identifier Definition" />
        </div>
      </div>
    </div>
  );
};

export default RatingForm;
