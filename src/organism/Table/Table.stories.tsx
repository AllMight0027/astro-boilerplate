import type { Meta, StoryObj } from "@storybook/react";
import Table from "./Table";
import { expect, within } from "@storybook/test";
import type { TableHeadProps } from "../../atoms/TableHead/TableHead";
import type { TableDataProps } from "../../atoms/TableData/TableData";

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

const headings = [
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
] as TableHeadProps[];

const rows = [
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
] as TableDataProps[][];

export const Group: Story = {
  args: {
    headings,
    rows,
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);
    headings.forEach(async (obj) => {
      await expect(canvas.getAllByText(`${obj.label}`)).toBeTruthy();
    });
    rows.forEach((row) =>
      row.forEach(async (obj) => {
        await expect(canvas.getAllByText(`${obj.label}`)).toBeTruthy();
      }),
    );
  },
};
