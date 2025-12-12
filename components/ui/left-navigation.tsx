"use client";
import type { NextPage } from "next";
import { useState, useMemo, type CSSProperties } from "react";
import { Button } from "antd";
import "/app/antd.css";
import Image from "next/image";
import Iconagent from "../iconagent";

export type LeftNavigationType = {
  className?: string;

  /** Variant props */
  opened?: boolean;

  /** Style props */
  leftNavigationHeight?: CSSProperties["height"];
  leftNavigationPosition?: CSSProperties["position"];
  leftNavigationTop?: CSSProperties["top"];
  leftNavigationLeft?: CSSProperties["left"];
};

const LeftNavigation: NextPage<LeftNavigationType> = ({
  className = "",
  opened = true,
  leftNavigationHeight,
  leftNavigationPosition,
  leftNavigationTop,
  leftNavigationLeft,
}) => {
  const leftNavigationStyle: CSSProperties = useMemo(() => {
    return {
      height: leftNavigationHeight,
      position: leftNavigationPosition,
      top: leftNavigationTop,
      left: leftNavigationLeft,
    };
  }, [
    leftNavigationHeight,
    leftNavigationPosition,
    leftNavigationTop,
    leftNavigationLeft,
  ]);

  const [iconagentItems] = useState([{}, {}, {}, {}, {}, {}, {}, {}]);
  return (
    <div
      className={`h-[1132px] w-[72px] shadow-[4px_0px_24px_-12px_rgba(0,_0,_0,_0.05)] bg-global-color-blue-blue800 border-global-color-grey-grey25 border-solid border-r-global-strokeweight-0-5 box-border overflow-hidden shrink-0 flex flex-col items-start ${className}`}
      style={leftNavigationStyle}
    >
      <div className="self-stretch flex-1 overflow-auto flex flex-col items-center !pt-num-20 !pb-num-20 !pl-num-16 !pr-num-16 gap-2.5">
        <Button
          className="!p-num-10 custom-nav-itemclose"
          size="large"
          shape="round"
          icon={<img width="20px" height="20px" src="/icon-car.svg" />}
          iconPosition="start"
          type="primary"
        />
        {iconagentItems.map((item, index) => (
          <Iconagent key={index} />
        ))}
      </div>
      <Image
        className="self-stretch h-[60px] max-w-full overflow-hidden shrink-0"
        width={72}
        height={60}
        sizes="100vw"
        alt=""
        src="/HorizontalBorder.svg"
      />
    </div>
  );
};

export default LeftNavigation;
