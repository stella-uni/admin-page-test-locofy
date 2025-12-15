import type { Meta, StoryObj } from "@storybook/react";

// 색상 토큰 데이터
const colorTokens = {
  "Blue Shades": {
    "global-color-blue-blue950": "#0a111f",
    "global-color-blue-blue800": "#14213d",
    "global-color-blue-blue600": "#1e4275",
    "global-color-blue-blue500": "#2b5c96",
  },
  "Green Shades": {
    "global-color-green-green600": "#059669",
    "global-color-green-green200": "#a7f3d0",
    "global-color-green-green50": "#f0fdf4",
    "global-sucess-primary": "#047857",
  },
  "Red Shades": {
    "global-color-red-red600": "#e11d48",
    "global-color-red-red200": "#fecdd3",
  },
  "Orange Shades": {
    "global-color-orange-orange900": "#db8605",
    "global-color-orange-orange500": "#fca311",
    "global-color-orange-orange50": "#ffe4a3",
  },
  "Lime Shades": {
    "global-color-lime-lime600": "#65a30d",
    "global-color-lime-lime200": "#d9f99d",
  },
  "Grey Shades": {
    "global-color-grey-black": "#000",
    "global-color-grey-grey700": "#525252",
    "global-color-grey-grey600": "#737373",
    "global-color-grey-grey300": "#d4d4d4",
    "global-color-grey-grey200": "#e5e5e5",
    "global-color-grey-grey100": "#ebebeb",
    "global-color-grey-grey75": "#ededed",
    "global-color-grey-grey50": "#f5f5f5",
    "global-color-grey-grey25": "#fafafa",
    "global-color-grey-white": "#fff",
  },
  "Border Colors": {
    "border-borderdefault": "#c2c4c3",
    "border-bordersubtle": "#e5e5e5",
  },
  "Surface Colors": {
    "surface-surfaceprimary": "#fff",
    "surface-surfacesecondary": "#fafafa",
    "active-navitemactive": "#32405e",
  },
};

// 색상 스와치 컴포넌트
const ColorSwatch = ({ name, value }: { name: string; value: string }) => {
  const isDark = value === "#000" || value.startsWith("#0") || value.startsWith("#1") || value.startsWith("#2");
  
  return (
    <div style={{ marginBottom: "16px" }}>
      <div
        style={{
          width: "100%",
          height: "80px",
          backgroundColor: value,
          borderRadius: "8px",
          border: "1px solid #e5e5e5",
          marginBottom: "8px",
        }}
      />
      <div style={{ fontSize: "12px", fontWeight: "600", color: "#14213d", marginBottom: "4px" }}>
        {name}
      </div>
      <div style={{ fontSize: "11px", color: "#737373", fontFamily: "monospace" }}>
        {value}
      </div>
    </div>
  );
};

// 색상 그룹 컴포넌트
const ColorGroup = ({ title, colors }: { title: string; colors: Record<string, string> }) => {
  return (
    <div style={{ marginBottom: "40px" }}>
      <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#14213d", marginBottom: "16px" }}>
        {title}
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "16px",
        }}
      >
        {Object.entries(colors).map(([name, value]) => (
          <ColorSwatch key={name} name={name} value={value} />
        ))}
      </div>
    </div>
  );
};

// 모든 색상 표시
const AllColors = () => {
  return (
    <div style={{ padding: "24px", maxWidth: "1400px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "700", color: "#14213d", marginBottom: "8px" }}>
        Color Tokens
      </h1>
      <p style={{ fontSize: "14px", color: "#737373", marginBottom: "32px" }}>
        프로젝트에서 사용되는 모든 디자인 토큰 색상입니다.
      </p>
      {Object.entries(colorTokens).map(([groupName, colors]) => (
        <ColorGroup key={groupName} title={groupName} colors={colors} />
      ))}
    </div>
  );
};

const meta: Meta = {
  title: "Design Tokens/Colors",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const AllColorTokens: Story = {
  render: () => <AllColors />,
};

export const BlueShades: Story = {
  render: () => (
    <div style={{ padding: "24px" }}>
      <ColorGroup title="Blue Shades" colors={colorTokens["Blue Shades"]} />
    </div>
  ),
};

export const GreenShades: Story = {
  render: () => (
    <div style={{ padding: "24px" }}>
      <ColorGroup title="Green Shades" colors={colorTokens["Green Shades"]} />
    </div>
  ),
};

export const GreyShades: Story = {
  render: () => (
    <div style={{ padding: "24px" }}>
      <ColorGroup title="Grey Shades" colors={colorTokens["Grey Shades"]} />
    </div>
  ),
};

