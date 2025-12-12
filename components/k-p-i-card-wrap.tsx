"use client";
import type { NextPage } from "next";

export type KPICardWrapType = {
  className?: string;
};

const KPICardWrap: NextPage<KPICardWrapType> = ({ className = "" }) => {
  return (
    <div
      className={`h-num-102_5 flex-1 shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_1px_2px_-1px_rgba(0,_0,_0,_0.1)] rounded-num-8 bg-global-color-grey-white border-global-color-grey-grey200 border-solid border-global-strokeweight-1 box-border overflow-hidden flex flex-col !pt-[17px] !pb-[17px] !pl-num-16 !pr-num-16 ${className}`}
    />
  );
};

export default KPICardWrap;
