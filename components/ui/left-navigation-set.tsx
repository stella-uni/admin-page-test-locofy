"use client";
import type { NextPage } from "next";
import { useState } from "react";
import Image from "next/image";
import LeftNavigation from "./left-navigation";
import Open from "../open1";
import Chevron from "../chevron";

export type LeftNavigationSetType = {
  className?: string;
};

const LeftNavigationSet: NextPage<LeftNavigationSetType> = ({
  className = "",
}) => {
  const [openItems] = useState([
    {
      depth: 1,
      showChevron: true,
      iconCar: "/Icon-agent.svg",
      smartTestDrive: "Smart Test Drive",
      type: "Close",
      showChevron1: true,
      vectorOverflow: "hidden",
      vectorMaxHeight: "100%",
      vectorTransform: " rotate(-180deg)",
    },
    {
      depth: 1,
      showChevron: false,
      iconCar: "/heroicons-outline-building-office.svg",
      smartTestDrive: "Dealers",
      type: "Close",
      showChevron1: false,
      vectorOverflow: "hidden",
      vectorMaxHeight: "100%",
      vectorTransform: " rotate(-180deg)",
    },
    {
      depth: 1,
      showChevron: false,
      iconCar: "/heroicons-outline-building-office-2.svg",
      smartTestDrive: "Dealers for distributor",
      type: "Close",
      showChevron1: false,
      vectorOverflow: "hidden",
      vectorMaxHeight: "100%",
      vectorTransform: " rotate(-180deg)",
    },
    {
      depth: 1,
      showChevron: false,
      iconCar: "/heroicons-outline-user-group.svg",
      smartTestDrive: "Dealers for dealer groups",
      type: "Close",
      showChevron1: false,
      vectorOverflow: "hidden",
      vectorMaxHeight: "100%",
      vectorTransform: " rotate(-180deg)",
    },
    {
      depth: 1,
      showChevron: false,
      iconCar: "/heroicons-outline-square-3-stack-3d.svg",
      smartTestDrive: "Editions",
      type: "Close",
      showChevron1: false,
      vectorOverflow: "hidden",
      vectorMaxHeight: "100%",
      vectorTransform: " rotate(-180deg)",
    },
    {
      depth: 1,
      showChevron: false,
      iconCar: "/heroicons-outline-rectangle-group.svg",
      smartTestDrive: "Organization groups",
      type: "Close",
      showChevron1: false,
      vectorOverflow: "hidden",
      vectorMaxHeight: "100%",
      vectorTransform: " rotate(-180deg)",
    },
    {
      depth: 1,
      showChevron: false,
      iconCar: "/heroicons-outline-cloud-arrow-down.svg",
      smartTestDrive: "App download",
      type: "Close",
      showChevron1: false,
      vectorOverflow: "hidden",
      vectorMaxHeight: "100%",
      vectorTransform: " rotate(-180deg)",
    },
    {
      depth: 1,
      showChevron: false,
      iconCar: "/heroicons-outline-wrench.svg",
      smartTestDrive: "Administration",
      type: "Close",
      showChevron1: false,
      vectorOverflow: "hidden",
      vectorMaxHeight: "100%",
      vectorTransform: " rotate(-180deg)",
    },
  ]);
  return (
    <div
      className={`w-full h-[1056px] rounded-[5px] border-blueviolet border-dashed border-[1px] box-border overflow-hidden ${className}`}
    >
      <LeftNavigation
        opened={false}
        leftNavigationHeight="1016px"
        leftNavigationPosition="absolute"
        leftNavigationTop="20px"
        leftNavigationLeft="310px"
      />
      <section className="absolute top-[20px] left-[11px] shadow-[4px_0px_24px_-12px_rgba(0,_0,_0,_0.05)] bg-global-color-blue-blue800 border-global-color-grey-grey25 border-solid border-r-global-strokeweight-0-5 box-border h-[1016px] overflow-hidden flex flex-col items-start text-left text-font-size-13 text-surface-surfaceprimary font-global-fontfamily-inter">
        <div className="self-stretch flex-1 overflow-auto flex flex-col items-center !pt-num-20 !pb-num-20 !pl-num-16 !pr-num-16 gap-[13px]">
          <Open depth={1} />
          <div className="w-num-230 rounded-num-6 flex items-center justify-between !pt-2 !pb-2 !pl-num-10 !pr-num-10 box-border gap-0">
            <div className="h-5 w-5 relative overflow-hidden flex items-center justify-center">
              <Image
                className="h-full w-full object-cover absolute left-[0px] top-[0px] [transform:scale(1)]"
                width={20}
                height={20}
                sizes="100vw"
                alt=""
                src="/Line1.svg"
              />
            </div>
            <div className="flex-1 relative leading-line-height-19-5 font-global-fontweight-500">
              Dashboard
            </div>
            <Chevron
              type="Close"
              showChevron={false}
              vectorOverflow="hidden"
              vectorMaxHeight="100%"
              vectorTransform=" rotate(-180deg)"
            />
          </div>
          <div className="w-num-230 rounded-num-6 flex items-center justify-between !pt-2 !pb-2 !pl-num-10 !pr-num-10 box-border gap-0">
            <div className="h-5 w-5 relative overflow-hidden flex items-center justify-center">
              <Image
                className="h-full w-full object-cover absolute left-[0px] top-[0px] [transform:scale(1)]"
                width={20}
                height={20}
                sizes="100vw"
                alt=""
                src="/Line1.svg"
              />
            </div>
            <div className="flex-1 relative leading-line-height-19-5 font-global-fontweight-500">
              Test Drive
            </div>
            <Chevron
              type="Close"
              showChevron
              vectorOverflow="hidden"
              vectorMaxHeight="100%"
              vectorTransform=" rotate(-180deg)"
            />
          </div>
          <div className="w-num-230 rounded-num-6 flex items-center !pt-1 !pb-1 !pl-num-10 !pr-num-10 box-border gap-2.5 text-global-color-orange-orange500">
            <div className="h-5 w-5 relative overflow-hidden flex items-center justify-center">
              <Image
                className="h-full w-full object-cover absolute left-[0px] top-[0px] [transform:scale(1)]"
                width={20}
                height={20}
                sizes="100vw"
                alt=""
                src="/Line1.svg"
              />
            </div>
            <div className="self-stretch w-4 overflow-hidden shrink-0 flex flex-col items-start !p-num-10 box-border" />
            <div className="h-[16.7px] flex-1 relative leading-line-height-19-5 flex items-center">{`Reservation & visit`}</div>
            <Image
              className="h-3.5 w-3.5 relative object-contain"
              width={14}
              height={14}
              sizes="100vw"
              alt=""
              src="/on@2x.png"
            />
          </div>
          <div className="w-num-230 rounded-num-6 flex items-center !pt-1 !pb-1 !pl-num-10 !pr-num-10 box-border gap-2.5 text-texticon-textinversesecondary">
            <div className="h-5 w-5 relative overflow-hidden flex items-center justify-center">
              <Image
                className="h-full w-full object-cover absolute left-[0px] top-[0px] [transform:scale(1)]"
                width={20}
                height={20}
                sizes="100vw"
                alt=""
                src="/Line1.svg"
              />
            </div>
            <div className="self-stretch w-4 overflow-hidden shrink-0 flex flex-col items-start !p-num-10 box-border" />
            <div className="h-[16.7px] flex-1 relative leading-line-height-19-5 flex items-center">
              Test drive documents
            </div>
          </div>
          <div className="w-num-230 rounded-num-6 flex items-center !pt-1 !pb-1 !pl-num-10 !pr-num-10 box-border gap-2.5 text-texticon-textinversesecondary">
            <div className="h-5 w-5 relative overflow-hidden flex items-center justify-center">
              <Image
                className="h-full w-full object-cover absolute left-[0px] top-[0px] [transform:scale(1)]"
                width={20}
                height={20}
                sizes="100vw"
                alt=""
                src="/Line1.svg"
              />
            </div>
            <div className="self-stretch w-4 overflow-hidden shrink-0 flex flex-col items-start !p-num-10 box-border" />
            <div className="h-[16.7px] flex-1 relative leading-line-height-19-5 flex items-center">
              Test drive records
            </div>
          </div>
          <div className="w-num-230 rounded-num-6 flex items-center justify-between !pt-2 !pb-2 !pl-num-10 !pr-num-10 box-border gap-0">
            <div className="h-5 w-5 relative overflow-hidden flex items-center justify-center">
              <Image
                className="h-full w-full object-cover absolute left-[0px] top-[0px] [transform:scale(1)]"
                width={20}
                height={20}
                sizes="100vw"
                alt=""
                src="/Line1.svg"
              />
            </div>
            <div className="flex-1 relative leading-line-height-19-5 font-global-fontweight-500">
              Real-time monitoring
            </div>
            <Chevron
              type="Close"
              showChevron={false}
              vectorOverflow="hidden"
              vectorMaxHeight="100%"
              vectorTransform=" rotate(-180deg)"
            />
          </div>
          <div className="w-num-230 rounded-num-6 flex items-center justify-between !pt-2 !pb-2 !pl-num-10 !pr-num-10 box-border gap-0 text-texticon-textinversesecondary">
            <div className="h-5 w-5 relative overflow-hidden flex items-center justify-center">
              <Image
                className="h-full w-full object-cover absolute left-[0px] top-[0px] [transform:scale(1)]"
                width={20}
                height={20}
                sizes="100vw"
                alt=""
                src="/Line1.svg"
              />
            </div>
            <div className="flex-1 relative leading-line-height-19-5 font-global-fontweight-500">
              KPI reports
            </div>
            <Chevron
              type="Close"
              showChevron
              vectorOverflow="hidden"
              vectorMaxHeight="100%"
              vectorTransform=" rotate(-180deg)"
            />
          </div>
          <div className="w-num-230 rounded-num-6 flex items-center justify-between !pt-2 !pb-2 !pl-num-10 !pr-num-10 box-border gap-0">
            <div className="h-5 w-5 relative overflow-hidden flex items-center justify-center">
              <Image
                className="h-full w-full object-cover absolute left-[0px] top-[0px] [transform:scale(1)]"
                width={20}
                height={20}
                sizes="100vw"
                alt=""
                src="/Line1.svg"
              />
            </div>
            <div className="flex-1 relative leading-line-height-19-5 font-global-fontweight-500">
              Vehicle code management
            </div>
            <Chevron
              type="Close"
              showChevron={false}
              vectorOverflow="hidden"
              vectorMaxHeight="100%"
              vectorTransform=" rotate(-180deg)"
            />
          </div>
          <div className="w-num-230 rounded-num-6 flex items-center justify-between !pt-2 !pb-2 !pl-num-10 !pr-num-10 box-border gap-0">
            <div className="h-5 w-5 relative overflow-hidden flex items-center justify-center">
              <Image
                className="h-full w-full object-cover absolute left-[0px] top-[0px] [transform:scale(1)]"
                width={20}
                height={20}
                sizes="100vw"
                alt=""
                src="/Line1.svg"
              />
            </div>
            <div className="flex-1 relative leading-line-height-19-5 font-global-fontweight-500">
              Survey form
            </div>
            <Chevron
              type="Close"
              showChevron={false}
              vectorOverflow="hidden"
              vectorMaxHeight="100%"
              vectorTransform=" rotate(-180deg)"
            />
          </div>
          {openItems.map((item, index) => (
            <Open
              key={index}
              depth={item.depth}
              showChevron={item.showChevron}
              iconCar={item.iconCar}
              smartTestDrive={item.smartTestDrive}
              type={item.type}
              showChevron1={item.showChevron1}
              vectorOverflow={item.vectorOverflow}
              vectorMaxHeight={item.vectorMaxHeight}
              vectorTransform={item.vectorTransform}
            />
          ))}
        </div>
        <div className="w-[259.3px] h-[60px] relative border-border-bordersubtle border-solid border-t-global-strokeweight-0-5 box-border text-num-12">
          <Image
            className="absolute top-[calc(50%_-_18px)] right-[16px] rounded-num-8 w-[35.3px] h-[35.3px]"
            width={35.3}
            height={35.3}
            sizes="100vw"
            alt=""
            src="/Button.svg"
          />
          <b className="absolute top-[14px] left-[28px] tracking-global-letterspacing-0-6 leading-global-lineheight-16 uppercase flex items-center">
            Dealer365
          </b>
          <div className="absolute top-[30px] left-[28px] text-global-fontsize-10 leading-line-height-15 text-icon-tertiary flex items-center">
            v4.0.1 Build 2025
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeftNavigationSet;
