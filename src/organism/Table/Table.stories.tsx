import type { Meta, StoryObj } from "@storybook/react";
import Table from "./Table";

const meta = {
  title: "Organisms/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Group: Story = {
  args: {
    headings: [
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
    ],
    rows: [
      [
        { label: "Distance", align: "center" },
        { label: "Number" },
        { label: "No" },
        { label: "10" },
        { label: "-" },
      ],
      [
        { label: "Distance", align: "center" },
        { label: "Number" },
        { label: "No" },
        { label: "10" },
        { label: "-" },
      ],
    ],
  },
};
