"use client";
import type { NextPage } from "next";
import { useState } from "react";
import { Select } from "antd";
import "/app/antd.css";
import Chevron from "./chevron";

const GlobeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 17.5a7.503 7.503 0 007.263-5.622M10 17.5a7.503 7.503 0 01-7.263-5.622M10 17.5c2.071 0 3.75-3.358 3.75-7.5S12.071 2.5 10 2.5m0 15c-2.071 0-3.75-3.358-3.75-7.5S7.929 2.5 10 2.5m0 0a7.498 7.498 0 016.536 3.818M10 2.5a7.498 7.498 0 00-6.536 3.818m13.072 0A9.96 9.96 0 0110 8.75c-2.498 0-4.783-.917-6.536-2.432m13.072 0A7.466 7.466 0 0117.5 10a7.466 7.466 0 01-1.544 4.441m0 0A7.55 7.55 0 0110 11.25a7.55 7.55 0 01-5.956 3.191m0 0A7.466 7.466 0 012.5 10a7.466 7.466 0 011.544-4.441m0 0A7.55 7.55 0 0110 8.75a7.55 7.55 0 015.956-3.191" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export type Dropdown1Type = {
  className?: string;
  type1?: string;
  showChevron?: boolean;
  vectorOverflow?: string;
  vectorMaxHeight?: string;
  vectorTransform?: string;

  /** Variant props */
  filled?: boolean;
  type?: string;
};

const Dropdown1: NextPage<Dropdown1Type> = ({
  className = "",
  filled = false,
  type = "Container",
  type1,
  showChevron,
  vectorOverflow,
  vectorMaxHeight,
  vectorTransform,
}) => {
  const [options] = useState<Array<{ value: string; label: string }>>([
    { value: "Option1", label: "Option1" },
    { value: "Option2", label: "Option2" },
    { value: "Option3", label: "Option3" },
  ]);
  return (
    <div
      className={`h-9 shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_1px_2px_-1px_rgba(0,_0,_0,_0.1)] rounded-num-4 overflow-hidden flex items-center justify-end !pt-1 !pb-1 !pl-num-16 !pr-0 box-border gap-2 shrink-0 ${className}`}
    >
      <Select
        className="font-[Inter] font-[500] text-num-12 text-global-color-blue-blue600 custom-dropdown-child"
        placeholder="English (USA)"
        suffixIcon={
          <span className="text-global-color-blue-blue600">
            <GlobeIcon />
          </span>
        }
        style={{ textAlign: "left" }}
        options={options}
        variant="borderless"
        filterOption={(input: any, option: any) =>
          (option?.label?.props?.children || option?.label || "")
            .toLowerCase()
            .indexOf(input.toLowerCase()) >= 0
        }
        virtual={true}
      />
      <Chevron
        type={type1}
        showChevron={showChevron}
        vectorOverflow={vectorOverflow}
        vectorMaxHeight={vectorMaxHeight}
        vectorTransform={vectorTransform}
      />
    </div>
  );
};

export default Dropdown1;
