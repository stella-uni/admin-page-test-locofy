"use client";
import type { NextPage } from "next";
import { Button } from "antd";
import "/app/antd.css";
import Image from "next/image";

export type PaginationType = {
  className?: string;
};

const Pagination: NextPage<PaginationType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex items-center justify-between gap-5 text-left text-num-12 text-global-color-grey-grey700 font-[Inter] ${className}`}
    >
      <div className="h-3.5 w-[177.4px] relative leading-global-lineheight-16 flex items-center">
        <span className="w-full">
          <span>{`Showing `}</span>
          <span className="font-[600] text-global-color-blue-blue950">1-7</span>
          <span>{` of `}</span>
          <span className="font-[600] text-global-color-blue-blue950">42</span>
          <span> reservations</span>
        </span>
      </div>
      <div className="flex items-center gap-5">
        <Image
          className="w-4 relative max-h-full object-contain"
          loading="lazy"
          width={16}
          height={16}
          sizes="100vw"
          alt=""
          src="/Icon-Chevron1@2x.png"
        />
        <div className="flex items-center gap-2">
          <Button
            className="!pt-1 !pb-1 !pl-num-9 !pr-num-9 custom-pagination-button"
            size="small"
            type="primary"
          >
            1
          </Button>
          <Button
            className="h-6 w-6 !pt-1 !pb-1 !pl-num-9 !pr-num-9 box-border custom-pagination-button1"
            size="small"
            style={{ width: "24px" }}
            type="primary"
          >
            2
          </Button>
          <Button
            className="h-6 w-6 !pt-1 !pb-1 !pl-num-9 !pr-num-9 box-border custom-pagination-button2"
            size="small"
            style={{ width: "24px" }}
            type="primary"
          >
            3
          </Button>
          <Button
            className="h-6 w-6 !pt-1 !pb-1 !pl-num-9 !pr-num-9 box-border custom-pagination-button3"
            size="small"
            icon={<img width="8.5px" height="1.7px" src="/.svg" />}
            iconPosition="start"
            style={{ width: "24px" }}
            type="primary"
          />
          <Button
            className="h-6 w-6 !pt-1 !pb-1 !pl-num-9 !pr-num-9 box-border custom-pagination-button4"
            size="small"
            style={{ width: "24px" }}
            type="primary"
          >
            8
          </Button>
        </div>
        <Image
          className="w-4 relative max-h-full object-contain"
          loading="lazy"
          width={16}
          height={16}
          sizes="100vw"
          alt=""
          src="/Icon-Chevron1@2x.png"
        />
      </div>
    </div>
  );
};

export default Pagination;
