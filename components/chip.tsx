"use client";
import type { NextPage } from "next";

export type ChipType = {
  className?: string;
  confirmed?: string;

  /** Variant props */
  property1?: "Success" | "Error" | "InProgress" | "Done";
};

const getChipContainerStyle = (styleKey: string) => {
  switch (styleKey) {
    case "Error":
      return "[&]:shadow-[0px_0px_0px_1px_rgba(225,_29,_72,_0.1)] [&]:bg-global-color-red-red200 [&]:border-global-color-red-red600 [&]:border-solid [&]:border-global-strokeweight-1";
    case "InProgress":
      return "[&]:shadow-[0px_0px_0px_1px_rgba(217,_119,_6,_0.1)] [&]:bg-global-color-orange-orange50 [&]:border-global-color-orange-orange900 [&]:border-solid [&]:border-global-strokeweight-1";
    case "Done":
      return "[&]:shadow-[0px_0px_0px_1px_rgba(30,_58,_138,_0.1)] [&]:bg-global-color-lime-lime200 [&]:border-global-color-lime-lime600 [&]:border-solid [&]:border-global-strokeweight-1";
  }
};
const getBackgroundStyle = (styleKey: string) => {
  switch (styleKey) {
    case "Error":
      return "[&]:bg-global-color-red-red600";
    case "InProgress":
      return "[&]:bg-global-color-orange-orange900";
    case "Done":
      return "[&]:bg-global-color-lime-lime600";
  }
};
const getConfirmedTextStyle = (styleKey: string) => {
  switch (styleKey) {
    case "Error":
      return "[&]:text-global-color-red-red600";
    case "InProgress":
      return "[&]:text-global-color-orange-orange900";
    case "Done":
      return "[&]:text-global-color-lime-lime600";
  }
};

const Chip: NextPage<ChipType> = ({
  className = "",
  property1 = "Success",
  confirmed,
}) => {
  const variantKey = `${property1}`;

  return (
    <div
      className={`shadow-[0px_0px_0px_1px_rgba(5,_150,_105,_0.1)] rounded-num-9999 bg-global-color-green-green200 border-global-color-green-green600 border-solid border-global-strokeweight-1 overflow-hidden flex items-center !pt-num-2 !pb-num-2 !pl-2 !pr-2 gap-1.5 shrink-0 text-left text-font-size-11 text-global-sucess-primary font-global-fontfamily-inter ${getChipContainerStyle(variantKey)} ${className}`}
    >
      <div
        className={`h-1.5 w-1.5 relative rounded-num-9999 bg-global-sucess-primary ${getBackgroundStyle(variantKey)}`}
      />
      <div
        className={`relative leading-global-fontsize-20 font-global-fontweight-500 ${getConfirmedTextStyle(variantKey)}`}
      >
        {confirmed}
      </div>
    </div>
  );
};

export default Chip;
