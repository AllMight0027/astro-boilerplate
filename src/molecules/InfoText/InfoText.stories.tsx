import type { Meta, StoryObj } from "@storybook/react";
import InfoText from "./InfoText";

const meta = {
  title: "Molecules/Info Text",
  component: InfoText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
  },
} satisfies Meta<typeof InfoText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading: Story = {
  args: {
    type: "heading",
    children: "Hello",
    infoText: "This is info",
  },
};

export const Subtitle: Story = {
  args: {
    type: "subtitle",
    children: "Hello",
    infoText: "This is info",
  },
};
