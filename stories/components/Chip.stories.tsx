import type { Meta, StoryObj } from "@storybook/react";
import Chip from "../../components/chip";

const meta: Meta<typeof Chip> = {
  title: "Components/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    property1: {
      control: "select",
      options: ["Success", "Error", "InProgress", "Done"],
      description: "Chip variant (상태별 스타일)",
    },
    confirmed: {
      control: "text",
      description: "Chip 내부 텍스트",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

// 기본 (Playground)
export const Playground: Story = {
  args: {
    property1: "Success",
    confirmed: "확인됨",
  },
};

// Success
export const Success: Story = {
  args: {
    property1: "Success",
    confirmed: "성공",
  },
};

// Error
export const Error: Story = {
  args: {
    property1: "Error",
    confirmed: "오류",
  },
};

// InProgress
export const InProgress: Story = {
  args: {
    property1: "InProgress",
    confirmed: "진행중",
  },
};

// Done
export const Done: Story = {
  args: {
    property1: "Done",
    confirmed: "완료",
  },
};

// 모든 variants 비교
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <Chip property1="Success" confirmed="성공" />
      <Chip property1="Error" confirmed="오류" />
      <Chip property1="InProgress" confirmed="진행중" />
      <Chip property1="Done" confirmed="완료" />
    </div>
  ),
};

