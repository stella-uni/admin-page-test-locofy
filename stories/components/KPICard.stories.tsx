import type { Meta, StoryObj } from "@storybook/react";
import KPICard from "../../components/kpi-card";

const meta: Meta<typeof KPICard> = {
  title: "Components/KPICard",
  component: KPICard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    showIcon: {
      control: "boolean",
      description: "우측 상단 아이콘 표시 여부",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KPICard>;

// 기본 (아이콘 포함)
export const Default: Story = {
  args: {
    showIcon: true,
  },
};

// 아이콘 없음
export const WithoutIcon: Story = {
  args: {
    showIcon: false,
  },
};

// 여러 카드 비교
export const MultipleCards: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", maxWidth: "1200px" }}>
      <KPICard showIcon={true} />
      <KPICard showIcon={true} />
      <KPICard showIcon={true} />
      <KPICard showIcon={false} />
    </div>
  ),
};

