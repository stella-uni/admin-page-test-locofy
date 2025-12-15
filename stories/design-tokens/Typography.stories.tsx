import type { Meta, StoryObj } from "@storybook/react";

// 타이포그래피 토큰 데이터
const typographyTokens = {
  fontSizes: {
    "global-fontsize-20": "20px",
    "global-fontsize-14": "14px",
    "global-fontsize-12": "12px",
    "global-fontsize-10": "10px",
  },
  fontWeights: {
    "global-fontweight-700": "700",
    "global-fontweight-600": "600",
    "global-fontweight-500": "500",
    "global-fontweight-400": "400",
  },
  lineHeights: {
    "global-lineheight-28": "28px",
    "global-fontsize-20": "20px",
    "global-lineheight-16": "16px",
    "global-fontsize-14": "14px",
    "global-fontsize-10": "10px",
  },
  letterSpacings: {
    "global-letterspacing-0-7": "0.7px",
    "global-letterspacing-0-6": "0.6px",
  },
  fontFamilies: {
    "global-fontfamily-inter": "Inter",
    "kia-signature": "Kia Signature",
  },
};

// 폰트 사이즈 표시 컴포넌트
const FontSizeExample = ({ name, value }: { name: string; value: string }) => {
  return (
    <div style={{ marginBottom: "24px", padding: "16px", backgroundColor: "#fafafa", borderRadius: "8px" }}>
      <div style={{ fontSize: value, fontWeight: "600", color: "#14213d", marginBottom: "8px" }}>
        The quick brown fox jumps over the lazy dog
      </div>
      <div style={{ fontSize: "12px", color: "#737373", marginBottom: "4px" }}>
        <strong>{name}</strong>: {value}
      </div>
    </div>
  );
};

// 폰트 웨이트 표시 컴포넌트
const FontWeightExample = ({ name, value }: { name: string; value: string }) => {
  return (
    <div style={{ marginBottom: "24px", padding: "16px", backgroundColor: "#fafafa", borderRadius: "8px" }}>
      <div style={{ fontSize: "16px", fontWeight: value, color: "#14213d", marginBottom: "8px" }}>
        The quick brown fox jumps over the lazy dog
      </div>
      <div style={{ fontSize: "12px", color: "#737373" }}>
        <strong>{name}</strong>: {value}
      </div>
    </div>
  );
};

// Line Height 표시 컴포넌트
const LineHeightExample = ({ name, value }: { name: string; value: string }) => {
  return (
    <div style={{ marginBottom: "24px", padding: "16px", backgroundColor: "#fafafa", borderRadius: "8px" }}>
      <div style={{ fontSize: "14px", lineHeight: value, color: "#14213d", marginBottom: "8px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div style={{ fontSize: "12px", color: "#737373" }}>
        <strong>{name}</strong>: {value}
      </div>
    </div>
  );
};

// Letter Spacing 표시 컴포넌트
const LetterSpacingExample = ({ name, value }: { name: string; value: string }) => {
  return (
    <div style={{ marginBottom: "24px", padding: "16px", backgroundColor: "#fafafa", borderRadius: "8px" }}>
      <div style={{ fontSize: "14px", letterSpacing: value, color: "#14213d", marginBottom: "8px" }}>
        LETTER SPACING EXAMPLE
      </div>
      <div style={{ fontSize: "12px", color: "#737373" }}>
        <strong>{name}</strong>: {value}
      </div>
    </div>
  );
};

// Font Family 표시 컴포넌트
const FontFamilyExample = ({ name, value }: { name: string; value: string }) => {
  return (
    <div style={{ marginBottom: "24px", padding: "16px", backgroundColor: "#fafafa", borderRadius: "8px" }}>
      <div style={{ fontSize: "16px", fontFamily: value, color: "#14213d", marginBottom: "8px" }}>
        The quick brown fox jumps over the lazy dog
      </div>
      <div style={{ fontSize: "12px", color: "#737373" }}>
        <strong>{name}</strong>: {value}
      </div>
    </div>
  );
};

const meta: Meta = {
  title: "Design Tokens/Typography",
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const FontSizes: Story = {
  render: () => (
    <div style={{ maxWidth: "800px" }}>
      <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#14213d", marginBottom: "24px" }}>
        Font Sizes
      </h2>
      {Object.entries(typographyTokens.fontSizes).map(([name, value]) => (
        <FontSizeExample key={name} name={name} value={value} />
      ))}
    </div>
  ),
};

export const FontWeights: Story = {
  render: () => (
    <div style={{ maxWidth: "800px" }}>
      <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#14213d", marginBottom: "24px" }}>
        Font Weights
      </h2>
      {Object.entries(typographyTokens.fontWeights).map(([name, value]) => (
        <FontWeightExample key={name} name={name} value={value} />
      ))}
    </div>
  ),
};

export const LineHeights: Story = {
  render: () => (
    <div style={{ maxWidth: "800px" }}>
      <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#14213d", marginBottom: "24px" }}>
        Line Heights
      </h2>
      {Object.entries(typographyTokens.lineHeights).map(([name, value]) => (
        <LineHeightExample key={name} name={name} value={value} />
      ))}
    </div>
  ),
};

export const LetterSpacings: Story = {
  render: () => (
    <div style={{ maxWidth: "800px" }}>
      <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#14213d", marginBottom: "24px" }}>
        Letter Spacings
      </h2>
      {Object.entries(typographyTokens.letterSpacings).map(([name, value]) => (
        <LetterSpacingExample key={name} name={name} value={value} />
      ))}
    </div>
  ),
};

export const FontFamilies: Story = {
  render: () => (
    <div style={{ maxWidth: "800px" }}>
      <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#14213d", marginBottom: "24px" }}>
        Font Families
      </h2>
      {Object.entries(typographyTokens.fontFamilies).map(([name, value]) => (
        <FontFamilyExample key={name} name={name} value={value} />
      ))}
    </div>
  ),
};

export const AllTypography: Story = {
  render: () => (
    <div style={{ maxWidth: "800px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "700", color: "#14213d", marginBottom: "32px" }}>
        Typography Tokens
      </h1>
      
      <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#14213d", marginTop: "40px", marginBottom: "24px" }}>
        Font Sizes
      </h2>
      {Object.entries(typographyTokens.fontSizes).map(([name, value]) => (
        <FontSizeExample key={name} name={name} value={value} />
      ))}

      <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#14213d", marginTop: "40px", marginBottom: "24px" }}>
        Font Weights
      </h2>
      {Object.entries(typographyTokens.fontWeights).map(([name, value]) => (
        <FontWeightExample key={name} name={name} value={value} />
      ))}

      <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#14213d", marginTop: "40px", marginBottom: "24px" }}>
        Font Families
      </h2>
      {Object.entries(typographyTokens.fontFamilies).map(([name, value]) => (
        <FontFamilyExample key={name} name={name} value={value} />
      ))}
    </div>
  ),
};

