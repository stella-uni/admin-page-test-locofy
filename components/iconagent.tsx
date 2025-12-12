"use client";
import type { NextPage } from "next";
import { Button } from "antd";
import "/app/antd.css";

export type IconagentType = {
  className?: string;
};

const getIconagentStyle = (styleKey: string) => {
  switch (styleKey) {
    case "":
      return "active:bg-active-navitemactive active:overflow-hidden active:justify-center";
  }
};

const Iconagent: NextPage<IconagentType> = ({ className = "" }) => {
  const variantKey = "";

  return (
    <div
      className={`rounded-num-8 flex items-center !p-num-10 group ${getIconagentStyle(variantKey)} ${className}`}
    >
      <Button
        className="h-5 w-5 relative custom-iconagent"
        size="small"
        style={{ width: "20px" }}
        type="primary"
      />
    </div>
  );
};

export default Iconagent;
