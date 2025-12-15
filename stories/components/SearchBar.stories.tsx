import type { Meta, StoryObj } from "@storybook/react";
import SearchBar from "../../components/search-bar";

const meta: Meta<typeof SearchBar> = {
  title: "Components/SearchBar",
  component: SearchBar,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light-gray",
      values: [
        { name: "light-gray", value: "#f5f5f5" },
        { name: "white", value: "#ffffff" },
      ],
    },
  },
  tags: ["autodocs"],
  argTypes: {
    onSearch: {
      description: "검색어 변경 시 호출되는 콜백 함수",
      action: "searched",
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

// 기본 (Playground)
export const Default: Story = {
  render: (args) => (
    <div style={{ minHeight: "500px", padding: "20px" }}>
      <SearchBar {...args} />
    </div>
  ),
  args: {},
};

