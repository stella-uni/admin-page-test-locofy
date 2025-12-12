"use client";
import type { NextPage } from "next";
import { Button } from "antd";
import "/app/antd.css";
import Image from "next/image";

export type HeroiconsOutlinehomeType = {
  className?: string;
  showOptionListFilter?: boolean;
};

const HeroiconsOutlinehome: NextPage<HeroiconsOutlinehomeType> = ({
  className = "",
  showOptionListFilter = false,
}) => {
  return (
    <div
      className={`flex items-center relative isolate gap-1.5 text-left text-global-fontsize-14 text-global-color-grey-grey700 font-global-fontfamily-inter ${className}`}
    >
      <Button
        className="h-5 w-5 relative z-[0] shrink-0 custom-heroicons-outlinehome"
        size="small"
        style={{ width: "20px" }}
        type="primary"
      />
      <Image
        className="h-3 w-3 relative z-[1] shrink-0"
        width={12}
        height={12}
        sizes="100vw"
        alt=""
        src="/ic-arrow-forward-bold-12px1.svg"
      />
      <div className="relative leading-global-lineheight-16 z-[2] shrink-0">
        Smart Test Drive
      </div>
      <Image
        className="h-3 w-3 relative z-[3] shrink-0"
        width={12}
        height={12}
        sizes="100vw"
        alt=""
        src="/ic-arrow-forward-bold-12px1.svg"
      />
      <div className="relative leading-global-lineheight-16 text-texticon-textaccent z-[4] shrink-0">
        Test Drive
      </div>
      <Image
        className="h-3 w-3 relative z-[5] shrink-0"
        width={12}
        height={12}
        sizes="100vw"
        alt=""
        src="/ic-arrow-forward-bold-12px1.svg"
      />
      <div className="relative leading-global-lineheight-16 font-global-fontweight-600 text-global-color-blue-blue950 z-[6] shrink-0">{`Reservation & visit`}</div>
      {!!showOptionListFilter && (
        <div className="w-20 !!m-[0 important] absolute top-[24px] left-[312px] shadow-[4px_4px_10px_rgba(5,_20,_31,_0.12)] flex flex-col items-end isolate z-[7] shrink-0 text-num-12 text-gray-100 font-kia-signature">
          <div className="self-stretch h-1.5 relative rounded-t-num-4 rounded-b-num-0 bg-surface-surfaceprimary border-gray-100 border-solid border-t-[1px] border-r-[1px] border-l-[1px] box-border z-[0]" />
          <div className="self-stretch h-8 bg-surface-surfaceprimary border-gray-100 border-solid border-r-[1px] border-l-[1px] box-border flex items-center !pt-2 !pb-2 !pl-num-10 !pr-num-10 z-[1]">
            <div className="relative leading-num-18">Option</div>
          </div>
          <div className="self-stretch h-8 bg-whitesmoke border-gray-100 border-solid border-r-[1px] border-l-[1px] box-border flex items-center !pt-2 !pb-2 !pl-num-10 !pr-num-10 z-[2]">
            <b className="relative leading-5 shrink-0">Option</b>
          </div>
          <div className="self-stretch h-8 bg-surface-surfaceprimary border-gray-100 border-solid border-r-[1px] border-l-[1px] box-border flex items-center !pt-2 !pb-2 !pl-num-10 !pr-num-10 z-[3]">
            <div className="relative leading-num-18">Option</div>
          </div>
          <div className="self-stretch h-8 bg-surface-surfaceprimary border-gray-100 border-solid border-r-[1px] border-l-[1px] box-border flex items-center !pt-2 !pb-2 !pl-num-10 !pr-num-10 z-[4]">
            <div className="relative leading-num-18">Option</div>
          </div>
          <div className="self-stretch h-1.5 relative rounded-t-num-0 rounded-b-num-4 bg-surface-surfaceprimary border-gray-100 border-solid border-r-[1px] border-b-[1px] border-l-[1px] box-border z-[5]" />
          <div className="w-4 h-[132px] !!m-[0 important] absolute top-[0px] right-[0px] flex items-start justify-center !p-1.5 box-border isolate z-[6]">
            <Image
              className="h-[108px] w-1 relative rounded-[50px] z-[0]"
              width={4}
              height={108}
              sizes="100vw"
              alt=""
            />
            <Image
              className="h-20 w-1 absolute !!m-[0 important] top-[6px] left-[6px] rounded-[50px] z-[1]"
              width={4}
              height={80}
              sizes="100vw"
              alt=""
              src="/scroll.svg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroiconsOutlinehome;
