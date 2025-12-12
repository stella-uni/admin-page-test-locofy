"use client";
import type { NextPage } from "next";
import { useState } from "react";
import { Select } from "antd";
import "/app/antd.css";
import Chevron from "./chevron";

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
          <img
            width="20px"
            height="20px"
            src="/heroicons-outline-globe-europe-africa.svg"
          />
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
