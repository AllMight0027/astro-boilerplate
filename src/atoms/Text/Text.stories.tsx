import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta = {
  title: "Atoms/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading: Story = {
  args: {
    type: "heading",
    children: "Heading",
  },
};

export const Title: Story = {
  args: {
    type: "title",
    children: "Title",
  },
};

export const Subtitle: Story = {
  args: {
    type: "subtitle",
    children: "Subtitle",
  },
};
