"use client";
import type { NextPage } from "next";
import { Button } from "antd";
import "/app/antd.css";

export type OpenType = {
  className?: string;
  showChevron?: boolean;
  iconCar: string;
  smartTestDrive?: string;
  type?: string;
  showChevron1?: boolean;
  vectorOverflow?: string;
  vectorMaxHeight?: string;
  vectorTransform?: string;

  /** Variant props */
  depth?: 1;
};

const getOpenStyle = (styleKey: string) => {
  switch (styleKey) {
    case "1":
      return "[&]:[border:none] [&]:bg-[transparent] [&]:rounded-num-6 [&]:flex [&]:items-center [&]:gap-2.5";
  }
};

const Open: NextPage<OpenType> = ({
  className = "",
  depth = 1,
  showChevron = true,
  iconCar,
  smartTestDrive,
  type,
  showChevron1,
  vectorOverflow,
  vectorMaxHeight,
  vectorTransform,
}) => {
  const variantKey = `${depth}`;

  return (
    <Button
      className={`w-num-230 !p-num-10 box-border custom-nav-itemopen ${getOpenStyle(variantKey)} ${className}`}
      icon={<img width="20px" height="20px" src="/icon-car-1.svg" />}
      iconPosition="start"
      style={{ width: "230px" }}
      type="primary"
      href="#"
    >
      Smart Test Drive
    </Button>
  );
};

export default Open;
