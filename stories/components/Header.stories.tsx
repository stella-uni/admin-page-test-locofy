import type { Meta, StoryObj } from "@storybook/react";
import Header from "../../components/ui/header";

const meta = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    showMobile: {
      control: "boolean",
      description: "모바일용 추가 버튼 표시 여부",
    },
    className: {
      control: "text",
      description: "추가 CSS 클래스",
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
  args: {
    showMobile: false,
  },
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
    docs: {
      description: {
        story: "데스크톱 환경에서의 헤더 - 모든 요소가 표시됩니다.",
      },
    },
  },
};

export const Tablet: Story = {
  args: {
    showMobile: false,
  },
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
    docs: {
      description: {
        story: "태블릿 환경에서의 헤더 - 일부 요소가 숨겨집니다.",
      },
    },
  },
};

export const Mobile: Story = {
  args: {
    showMobile: true,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    docs: {
      description: {
        story: "모바일 환경에서의 헤더 - 축약된 레이아웃과 모바일 전용 버튼이 표시됩니다.",
      },
    },
  },
};

export const MobileWithoutExtraButtons: Story = {
  args: {
    showMobile: false,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    docs: {
      description: {
        story: "모바일 환경에서 추가 버튼 없는 최소 헤더입니다.",
      },
    },
  },
};

