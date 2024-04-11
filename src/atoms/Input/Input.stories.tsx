import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { useArgs } from "@storybook/preview-api";

const meta = {
  title: "Atoms/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InputBox: Story = {
  render: function Component(args) {
    const [, setArgs] = useArgs();
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setArgs({ value: e.target.value });
    };
    return <Input {...args} onChange={onChange} />;
  },
  args: {
    value: "",
    width: "",
    placeholder: "Enter value",
  },
};
