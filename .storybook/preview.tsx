import type { Preview } from "@storybook/react";
import React from "react";
import "../app/global.css";
import "../app/antd.css";

// next/image mock 설정 (Storybook에서 Next Image 컴포넌트 대체)
const NextImageMock = (props: any) => {
  const { src, alt, width, height, fill, ...rest } = props;
  
  if (fill) {
    return React.createElement("img", {
      src: typeof src === "string" ? src : src.src,
      alt,
      style: { objectFit: "cover", width: "100%", height: "100%" },
      ...rest,
    });
  }
  
  return React.createElement("img", {
    src: typeof src === "string" ? src : src.src,
    alt,
    width,
    height,
    ...rest,
  });
};

// next/image를 전역적으로 mock
if (typeof window !== 'undefined') {
  (window as any).__NEXT_IMAGE_IMPORTED = true;
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          'Design Tokens',
          'Components',
          'Components/Header',
          'Components/SearchBar',
          'Components/Chip',
          'Components/KPICard',
        ],
      },
    },
  },
};

export default preview;

