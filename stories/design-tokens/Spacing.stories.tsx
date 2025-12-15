import type { Meta, StoryObj } from "@storybook/react";

// 간격 토큰 데이터
const spacingTokens = {
  padding: {
    "num-20": "20px",
    "num-16": "16px",
    "num-14": "14px",
    "num-10": "10px",
    "num-9": "9px",
    "num-2": "2px",
  },
  borderRadius: {
    "num-9999": "9999px",
    "global-radius-8": "8px",
    "num-8": "8px",
    "num-6": "6px",
    "num-4": "4px",
    "num-0": "0px",
  },
  borderWidth: {
    "global-strokeweight-1": "1px",
    "global-strokeweight-0-5": "0.5px",
  },
};

// Padding 표시 컴포넌트
const PaddingExample = ({ name, value }: { name: string; value: string }) => {
  return (
    <div style={{ marginBottom: "24px" }}>
      <div style={{ fontSize: "12px", fontWeight: "600", color: "#14213d", marginBottom: "8px" }}>
        {name}: {value}
      </div>
      <div style={{ backgroundColor: "#e5e5e5", display: "inline-block" }}>
        <div
          style={{
            padding: value,
            backgroundColor: "#059669",
            color: "#fff",
            fontSize: "12px",
            fontWeight: "500",
          }}
        >
          Content
        </div>
      </div>
    </div>
  );
};

// Border Radius 표시 컴포넌트
const BorderRadiusExample = ({ name, value }: { name: string; value: string }) => {
  return (
    <div style={{ marginBottom: "24px" }}>
      <div style={{ fontSize: "12px", fontWeight: "600", color: "#14213d", marginBottom: "8px" }}>
        {name}: {value}
      </div>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "#2b5c96",
          borderRadius: value,
        }}
      />
    </div>
  );
};

// Border Width 표시 컴포넌트
const BorderWidthExample = ({ name, value }: { name: string; value: string }) => {
  return (
    <div style={{ marginBottom: "24px" }}>
      <div style={{ fontSize: "12px", fontWeight: "600", color: "#14213d", marginBottom: "8px" }}>
        {name}: {value}
      </div>
      <div
        style={{
          width: "200px",
          height: "60px",
          border: `${value} solid #14213d`,
          borderRadius: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "12px",
          color: "#737373",
        }}
      >
        Border Width: {value}
      </div>
    </div>
  );
};

const meta: Meta = {
  title: "Design Tokens/Spacing",
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const Padding: Story = {
  render: () => (
    <div style={{ maxWidth: "800px" }}>
      <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#14213d", marginBottom: "24px" }}>
        Padding Tokens
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "24px" }}>
        {Object.entries(spacingTokens.padding).map(([name, value]) => (
          <PaddingExample key={name} name={name} value={value} />
        ))}
      </div>
    </div>
  ),
};

export const BorderRadius: Story = {
  render: () => (
    <div style={{ maxWidth: "800px" }}>
      <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#14213d", marginBottom: "24px" }}>
        Border Radius Tokens
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "24px" }}>
        {Object.entries(spacingTokens.borderRadius).map(([name, value]) => (
          <BorderRadiusExample key={name} name={name} value={value} />
        ))}
      </div>
    </div>
  ),
};

export const BorderWidth: Story = {
  render: () => (
    <div style={{ maxWidth: "800px" }}>
      <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#14213d", marginBottom: "24px" }}>
        Border Width Tokens
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {Object.entries(spacingTokens.borderWidth).map(([name, value]) => (
          <BorderWidthExample key={name} name={name} value={value} />
        ))}
      </div>
    </div>
  ),
};

export const AllSpacing: Story = {
  render: () => (
    <div style={{ maxWidth: "1200px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "700", color: "#14213d", marginBottom: "32px" }}>
        Spacing Tokens
      </h1>

      <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#14213d", marginTop: "40px", marginBottom: "24px" }}>
        Padding
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "24px" }}>
        {Object.entries(spacingTokens.padding).map(([name, value]) => (
          <PaddingExample key={name} name={name} value={value} />
        ))}
      </div>

      <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#14213d", marginTop: "40px", marginBottom: "24px" }}>
        Border Radius
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "24px" }}>
        {Object.entries(spacingTokens.borderRadius).map(([name, value]) => (
          <BorderRadiusExample key={name} name={name} value={value} />
        ))}
      </div>

      <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#14213d", marginTop: "40px", marginBottom: "24px" }}>
        Border Width
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {Object.entries(spacingTokens.borderWidth).map(([name, value]) => (
          <BorderWidthExample key={name} name={name} value={value} />
        ))}
      </div>
    </div>
  ),
};

