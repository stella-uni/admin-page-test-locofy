"use client";
import type { NextPage } from "next";
import Image from "next/image";

export type KPICardType = {
  className?: string;
  showIcon?: boolean;
};

const KPICard: NextPage<KPICardType> = ({
  className = "",
  showIcon = true,
}) => {
  return (
    <div
      className={`w-[360px] h-[100px] shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_1px_2px_-1px_rgba(0,_0,_0,_0.1)] rounded-num-8 bg-surface-surfaceprimary border-border-bordersubtle border-solid border-global-strokeweight-1 box-border max-w-full overflow-hidden flex flex-col items-start !pt-[17px] !pb-[17px] !pl-num-16 !pr-num-16 [transform:_rotate(0.3deg)] [transform-origin:0_0] text-left text-font-size-11 text-global-color-blue-blue500 font-[Inter] ${className}`}
    >
      <div className="self-stretch flex items-start justify-between gap-5 shrink-0">
        <div className="self-stretch flex flex-col items-start gap-2">
          <b className="self-stretch h-[16.5px] relative tracking-letter-spacing-0-55 leading-line-height-16-5 capitalize flex items-center">
            Label
          </b>
          <h3 className="!m-0 self-stretch relative text-global-fontsize-20 leading-global-fontsize-20 font-global-fontweight-700 font-[inherit] text-global-color-blue-blue950 [transform:_rotate(-0.3deg)]">
            1,000
          </h3>
          <div className="self-stretch flex items-center gap-1.5 text-global-color-green-green600">
            <div className="flex items-center gap-0.5 shrink-0">
              <Image
                className="h-3 w-3 relative [transform:_rotate(-0.3deg)]"
                loading="lazy"
                width={12}
                height={12}
                sizes="100vw"
                alt=""
                src="/SVG3.svg"
              />
              <div className="relative leading-line-height-16-5 font-global-fontweight-500">
                +00.0%
              </div>
            </div>
            <div className="hidden items-center gap-0.5 shrink-0 text-global-color-red-red600">
              <Image
                className="h-3 w-3 relative object-contain [transform:_rotate(-0.3deg)]"
                width={12}
                height={12}
                sizes="100vw"
                alt=""
                src="/SVG2.svg"
              />
              <div className="relative leading-line-height-16-5 font-global-fontweight-500 [transform:_rotate(-0.3deg)]">
                -00.0%
              </div>
            </div>
            <div className="h-[15px] w-[48.2px] relative text-global-fontsize-10 leading-line-height-15 text-icon-tertiary flex items-center shrink-0">
              vs last mo
            </div>
          </div>
        </div>
        {!!showIcon && (
          <Image
            className="h-7 w-7 relative rounded-num-6 [transform:_rotate(-0.3deg)]"
            loading="lazy"
            width={28}
            height={28}
            sizes="100vw"
            alt=""
            src="/Icon.svg"
          />
        )}
      </div>
    </div>
  );
};

export default KPICard;
