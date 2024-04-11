import type { Meta, StoryObj } from "@storybook/react";
import ButtonGroup from "./ButtonGroup";

const meta = {
  title: "Molecules/Button Group",
  component: ButtonGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Group: Story = {
  args: {
    buttons: [
      { label: "Primary", primary: true },
      { label: "Secondary" },
      { label: "Outlined", outlined: true },
    ],
  },
};
