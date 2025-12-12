"use client";
import type { NextPage } from "next";
import { useState } from "react";
import { Button, Input } from "antd";
import "/app/antd.css";
import Image from "next/image";
import Header from "./ui/header";
import LeftNavigation from "./ui/left-navigation";
import HeroiconsOutlinehome from "./heroicons-outlinehome";
import KPICardWrap from "./k-p-i-card-wrap";
import Chevron from "./chevron";
import Cell from "./cell";
import Chip from "./chip";
import Pagination from "./pagination";

export type ReservarionVisitType = {
  className?: string;
};

const ReservarionVisit: NextPage<ReservarionVisitType> = ({
  className = "",
}) => {
  const [cellItems] = useState([
    {
      property1: "Header",
      showCollepseL: false,
      showCollepseR: false,
      cellWidth: "142px",
      cellFlex: "",
      cellBorderRight: "1px solid #c2c4c3",
      cellPadding: "14px 20px",
      cellJustifyContent: "space-between",
      cellGap: "-20px",
      cellBorderLeft: "",
      dealerCodeFontSize: "12px",
      dealerCodeFontWeight: "600",
      dealerCodeFontFamily: "Inter",
      dealerCodeColor: "#1e4275",
      dealerCodeTextAlign: "left",
      showChevronUpDown: true,
    },
    {
      property1: "Header",
      showCollepseL: false,
      showCollepseR: false,
      cellWidth: "unset",
      cellFlex: 0.9614,
      cellBorderRight: "",
      cellPadding: "",
      cellJustifyContent: "",
      cellGap: "",
      cellBorderLeft: "",
      dealerCodeFontSize: "",
      dealerCodeFontWeight: "",
      dealerCodeFontFamily: "",
      dealerCodeColor: "",
      dealerCodeTextAlign: "",
      showChevronUpDown: true,
    },
    {
      property1: "Header",
      showCollepseL: false,
      showCollepseR: false,
      cellWidth: "unset",
      cellFlex: 0.9614,
      cellBorderRight: "",
      cellPadding: "",
      cellJustifyContent: "",
      cellGap: "",
      cellBorderLeft: "",
      dealerCodeFontSize: "",
      dealerCodeFontWeight: "",
      dealerCodeFontFamily: "",
      dealerCodeColor: "",
      dealerCodeTextAlign: "",
      showChevronUpDown: true,
    },
    {
      property1: "Header",
      showCollepseL: false,
      showCollepseR: false,
      cellWidth: "unset",
      cellFlex: 0.9614,
      cellBorderRight: "",
      cellPadding: "",
      cellJustifyContent: "",
      cellGap: "",
      cellBorderLeft: "",
      dealerCodeFontSize: "",
      dealerCodeFontWeight: "",
      dealerCodeFontFamily: "",
      dealerCodeColor: "",
      dealerCodeTextAlign: "",
      showChevronUpDown: true,
    },
    {
      property1: "Header",
      showCollepseL: false,
      showCollepseR: false,
      cellWidth: "unset",
      cellFlex: 0.9614,
      cellBorderRight: "",
      cellPadding: "",
      cellJustifyContent: "",
      cellGap: "",
      cellBorderLeft: "",
      dealerCodeFontSize: "",
      dealerCodeFontWeight: "",
      dealerCodeFontFamily: "",
      dealerCodeColor: "",
      dealerCodeTextAlign: "",
      showChevronUpDown: true,
    },
    {
      property1: "Header",
      showCollepseL: false,
      showCollepseR: true,
      cellWidth: "unset",
      cellFlex: 1,
      cellBorderRight: "1px solid #d4d4d4",
      cellPadding: "14px 12px 14px 20px",
      cellJustifyContent: "",
      cellGap: "",
      cellBorderLeft: "",
      dealerCodeFontSize: "",
      dealerCodeFontWeight: "",
      dealerCodeFontFamily: "",
      dealerCodeColor: "",
      dealerCodeTextAlign: "",
      showChevronUpDown: false,
    },
    {
      property1: "Header",
      showCollepseL: true,
      showCollepseR: false,
      cellWidth: "unset",
      cellFlex: 0.9952,
      cellBorderRight: "1px solid #d4d4d4",
      cellPadding: "14px 20px 14px 12px",
      cellJustifyContent: "unset",
      cellGap: "4px",
      cellBorderLeft: "1px solid #d4d4d4",
      dealerCodeFontSize: "",
      dealerCodeFontWeight: "",
      dealerCodeFontFamily: "",
      dealerCodeColor: "",
      dealerCodeTextAlign: "",
      showChevronUpDown: false,
    },
    {
      property1: "Header",
      showCollepseL: false,
      showCollepseR: false,
      cellWidth: "unset",
      cellFlex: "",
      cellBorderRight: "",
      cellPadding: "",
      cellJustifyContent: "unset",
      cellGap: "4px",
      cellBorderLeft: "",
      dealerCodeFontSize: "",
      dealerCodeFontWeight: "",
      dealerCodeFontFamily: "",
      dealerCodeColor: "",
      dealerCodeTextAlign: "",
      showChevronUpDown: true,
    },
    {
      property1: "Header",
      showCollepseL: false,
      showCollepseR: false,
      cellWidth: "105px",
      cellFlex: "",
      cellBorderRight: "",
      cellPadding: "",
      cellJustifyContent: "",
      cellGap: "",
      cellBorderLeft: "",
      dealerCodeFontSize: "unset",
      dealerCodeFontWeight: "unset",
      dealerCodeFontFamily: "unset",
      dealerCodeColor: "unset",
      dealerCodeTextAlign: "unset",
      showChevronUpDown: true,
    },
  ]);
  return (
    <div
      className={`w-[1920px] h-[1200px] [background:linear-gradient(#ebebeb,_#ebebeb),_#fff] max-w-full overflow-y-auto leading-[normal] tracking-[normal] ${className}`}
    >
      <main className="absolute w-full top-[0px] right-[0px] left-[0px] bg-global-color-grey-grey100 flex flex-col items-start max-w-full h-full">
        <Header showMobile={false} />
        <section className="self-stretch flex-1 flex items-start gap-px max-w-full text-left text-global-fontsize-14 text-global-color-blue-blue800 font-global-fontfamily-inter">
          <LeftNavigation opened={false} />
          <div className="self-stretch flex-1 flex flex-col items-start !p-8 box-border gap-6 max-w-[calc(100%_-_73px)]">
            <section className="self-stretch flex items-center justify-between gap-5 max-w-full text-left text-global-fontsize-20 text-global-color-blue-blue950 font-global-fontfamily-inter mq850:flex-wrap mq850:gap-5">
              <div className="flex flex-col items-start gap-4 max-w-full">
                <HeroiconsOutlinehome showOptionListFilter={false} />
                <div className="flex items-center justify-center gap-[7.3px]">
                  <h3 className="!m-0 h-7 w-[99px] relative text-[length:inherit] leading-global-lineheight-28 font-global-fontweight-700 font-[inherit] flex items-center mq450:text-[16px] mq450:leading-[22px]">
                    Test Drive
                  </h3>
                  <div className="h-5 relative text-global-fontsize-14 leading-global-fontsize-20 text-icon-tertiary flex items-center">
                    Test drive reservations
                  </div>
                </div>
              </div>
              <Button
                className="h-9 w-[165px] shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_1px_2px_-1px_rgba(0,_0,_0,_0.1)] !pt-[10.7px] !pb-[11px] !pl-num-16 !pr-num-16 box-border custom-button"
                size="middle"
                shape="round"
                icon={<img width="14px" height="14px" src="/svg.svg" />}
                iconPosition="start"
                style={{ width: "165px" }}
                type="primary"
              >
                EXPORT TO EXCEL
              </Button>
            </section>
            <div className="self-stretch flex items-center justify-center flex-wrap content-center gap-4">
              <KPICardWrap />
              <Image
                className="h-num-102_5 flex-1 shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_1px_2px_-1px_rgba(0,_0,_0,_0.1)] rounded-num-8 max-w-full overflow-hidden object-contain"
                width={434.3}
                height={102.5}
                sizes="100vw"
                alt=""
                src="/KPI-Card3@2x.png"
              />
              <Image
                className="h-num-102_5 flex-1 shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_1px_2px_-1px_rgba(0,_0,_0,_0.1)] rounded-num-8 max-w-full overflow-hidden object-contain"
                width={434.3}
                height={102.5}
                sizes="100vw"
                alt=""
                src="/KPI-Card2@2x.png"
              />
              <Image
                className="h-num-102_5 flex-1 shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_1px_2px_-1px_rgba(0,_0,_0,_0.1)] rounded-num-8 max-w-full overflow-hidden object-contain"
                width={434.3}
                height={102.5}
                sizes="100vw"
                alt=""
                src="/KPI-Card@2x.png"
              />
            </div>
            <div className="self-stretch overflow-auto flex items-center !pt-0 !pb-0 !pl-num-20 !pr-num-20 gap-3">
              <b className="relative leading-global-fontsize-20">
                Quick Actions
              </b>
              <Button
                className="h-8 !pt-2 !pb-2 !pl-num-16 !pr-num-16 box-border custom-button1"
                size="small"
                shape="circle"
                icon={
                  <img
                    width="16px"
                    height="16px"
                    src="/heroicons-outline-clipboard-document-list.svg"
                  />
                }
                iconPosition="start"
                type="primary"
              >
                Quick Reserve
              </Button>
              <Button
                className="h-8 !pt-2 !pb-2 !pl-num-16 !pr-num-16 box-border custom-button2"
                size="small"
                shape="circle"
                icon={
                  <img
                    width="16px"
                    height="16px"
                    src="/heroicons-outline-envelope.svg"
                  />
                }
                iconPosition="start"
                type="primary"
              >
                Send Reminder SMS
              </Button>
              <Button
                className="h-8 !pt-2 !pb-2 !pl-num-16 !pr-num-16 box-border custom-button3"
                size="small"
                shape="circle"
                icon={
                  <img
                    width="16px"
                    height="16px"
                    src="/heroicons-outline-home-modern.svg"
                  />
                }
                iconPosition="start"
                type="primary"
              >
                Log Walk-In
              </Button>
              <Button
                className="h-8 !pt-2 !pb-2 !pl-num-16 !pr-num-16 box-border custom-button4"
                size="small"
                shape="circle"
                icon={
                  <img
                    width="16px"
                    height="16px"
                    src="/heroicons-outline-calendar.svg"
                  />
                }
                iconPosition="start"
                type="primary"
              >
                Reschedule Today
              </Button>
              <Button
                className="h-8 !pt-2 !pb-2 !pl-num-16 !pr-num-16 box-border custom-button5"
                size="small"
                shape="circle"
                icon={
                  <img
                    width="16px"
                    height="16px"
                    src="/heroicons-outline-printer.svg"
                  />
                }
                iconPosition="start"
                type="primary"
              >
                Print Schedule
              </Button>
            </div>
            <div className="self-stretch bg-global-color-grey-grey25 border-global-color-grey-grey25 border-solid border-b-global-strokeweight-0-5 flex items-center justify-between !pt-1 !pb-[3px] !pl-[19px] !pr-[19px] gap-5 mq850:flex-wrap mq850:gap-5">
              <div className="flex items-center gap-2">
                <b className="relative leading-global-fontsize-20">
                  Search Conditions
                </b>
                <b className="relative leading-global-fontsize-20 text-global-color-blue-blue600">
                  (3)
                </b>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center">
                  <Button
                    className="h-9 !pt-2 !pb-2 !pl-num-16 !pr-num-16 box-border custom-button6"
                    size="middle"
                    icon={
                      <img
                        width="16px"
                        height="16px"
                        src="/heroicons-outline-arrow-path.svg"
                      />
                    }
                    iconPosition="start"
                    type="primary"
                  >
                    Clear all
                  </Button>
                  <Button
                    className="h-9 !pt-2 !pb-2 !pl-num-16 !pr-num-16 box-border custom-button7"
                    size="middle"
                    icon={
                      <img
                        width="16px"
                        height="16px"
                        src="/heroicons-outline-check.svg"
                      />
                    }
                    iconPosition="start"
                    type="primary"
                  >
                    Apply
                  </Button>
                </div>
                <Chevron
                  type="Close"
                  showChevron
                  vectorOverflow="unset"
                  vectorMaxHeight="unset"
                  vectorTransform="unset"
                />
              </div>
            </div>
            <div className="self-stretch shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_1px_2px_-1px_rgba(0,_0,_0,_0.1)] rounded-num-8 bg-global-color-grey-white border-global-color-grey-grey200 border-solid border-global-strokeweight-1 overflow-hidden flex flex-col items-start">
              <div className="self-stretch h-11 bg-global-color-grey-grey25 border-global-color-grey-grey25 border-solid border-b-global-strokeweight-0-5 box-border flex items-center justify-between !pt-1 !pb-1 !pl-[19px] !pr-[19px] gap-5 mq450:h-auto mq450:flex-wrap mq450:gap-5">
                <div className="flex items-center gap-2">
                  <b className="relative leading-global-fontsize-20">
                    Reservation List
                  </b>
                  <b className="relative leading-global-fontsize-20 text-global-color-blue-blue600">
                    (80)
                  </b>
                </div>
                <div className="flex items-center gap-2 text-num-12 text-global-color-blue-blue600">
                  <div className="h-4 w-[35px] relative leading-global-lineheight-16 font-global-fontweight-500 flex items-center">
                    Rows:
                  </div>
                  <Input
                    className="bg-[transparent] w-[68.7px] font-[Inter] text-num-12 text-global-color-grey-black custom-options"
                    size="small"
                    placeholder="10"
                    type="text"
                    style={{ width: "68.7px" }}
                    variant="borderless"
                  />
                </div>
              </div>
              <div className="self-stretch overflow-auto flex flex-col items-start text-global-color-grey-grey700">
                <div className="w-num-1793 flex flex-col items-start shrink-0">
                  <div className="self-stretch bg-global-color-grey-grey75 border-global-color-grey-grey25 border-solid border-b-global-strokeweight-0-5 overflow-hidden flex items-start [row-gap:20px] mq1500:flex-wrap">
                    {cellItems.map((item, index) => (
                      <Cell
                        key={index}
                        property1={item.property1}
                        showCollepseL={item.showCollepseL}
                        showCollepseR={item.showCollepseR}
                        cellWidth={item.cellWidth}
                        cellFlex={item.cellFlex}
                        cellBorderRight={item.cellBorderRight}
                        cellPadding={item.cellPadding}
                        cellJustifyContent={item.cellJustifyContent}
                        cellGap={item.cellGap}
                        cellBorderLeft={item.cellBorderLeft}
                        dealerCodeFontSize={item.dealerCodeFontSize}
                        dealerCodeFontWeight={item.dealerCodeFontWeight}
                        dealerCodeFontFamily={item.dealerCodeFontFamily}
                        dealerCodeColor={item.dealerCodeColor}
                        dealerCodeTextAlign={item.dealerCodeTextAlign}
                        showChevronUpDown={item.showChevronUpDown}
                      />
                    ))}
                  </div>
                  <div className="w-num-1793 h-num-47 bg-global-color-grey-white overflow-x-auto shrink-0 flex items-center">
                    <div className="w-num-142 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 text-num-12 text-global-color-grey-grey600">
                      <div className="relative leading-num-16">DLR-001</div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        2023-11-15 10:00 AM
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 text-global-color-orange-orange500">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        IONIQ 5
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 text-global-color-blue-blue950">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        Alice Johnson
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 text-global-color-blue-blue950">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        Hyundai Downtown
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        +1 (555) 010-2345
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        Michael Scott
                      </div>
                    </div>
                    <div className="w-num-105 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center justify-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20">
                      <Chip property1="Success" confirmed="Confirmed" />
                    </div>
                    <Button
                      className="w-num-105 !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 box-border shrink-0 custom-cell"
                      size="large"
                      icon={<img width="16px" height="16px" src="/svg-1.svg" />}
                      iconPosition="start"
                      style={{ width: "105px" }}
                      type="primary"
                    />
                  </div>
                  <div className="w-num-1793 h-num-47 bg-global-color-grey-grey25 overflow-x-auto shrink-0 flex items-center">
                    <div className="w-num-142 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 text-num-12 text-global-color-grey-grey600">
                      <div className="relative leading-num-16">DLR-045</div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        2023-11-15 02:00 PM
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 text-global-color-orange-orange500">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        Tucson Hybrid
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 text-global-color-blue-blue950">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        Robert Smith
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 text-global-color-blue-blue950">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        Westside Auto Group
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        +1 (555) 012-9988
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        Jim Halpert
                      </div>
                    </div>
                    <div className="w-num-105 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center justify-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20">
                      <Chip property1="Error" confirmed="Cancelled" />
                    </div>
                    <Button
                      className="w-num-105 !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 box-border shrink-0 custom-cell1"
                      size="large"
                      icon={<img width="16px" height="16px" src="/svg-1.svg" />}
                      iconPosition="start"
                      style={{ width: "105px" }}
                      type="primary"
                    />
                  </div>
                  <div className="w-num-1793 h-num-47 bg-global-color-grey-white overflow-x-auto shrink-0 flex items-center">
                    <div className="w-num-142 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 text-num-12 text-global-color-grey-grey600">
                      <div className="relative leading-num-16">DLR-023</div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        2023-11-15 00:52 AM
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 text-global-color-orange-orange500">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        Palisade
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 text-global-color-blue-blue950">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        Elena Rodriguez
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 text-global-color-blue-blue950">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        Hyundai Downtown
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        +1 (555) 123-4567
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        Dwight Schrute
                      </div>
                    </div>
                    <div className="w-num-105 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center justify-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20">
                      <Chip property1="Success" confirmed="Confirmed" />
                    </div>
                    <Button
                      className="w-num-105 !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 box-border shrink-0 custom-cell2"
                      size="large"
                      icon={<img width="16px" height="16px" src="/svg-1.svg" />}
                      iconPosition="start"
                      style={{ width: "105px" }}
                      type="primary"
                    />
                  </div>
                  <div className="w-num-1793 h-num-47 bg-global-color-grey-grey25 overflow-x-auto shrink-0 flex items-center">
                    <div className="w-num-142 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 text-num-12 text-global-color-grey-grey600">
                      <div className="relative leading-num-16">DLR-102</div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        2023-11-16 09:30 AM
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 text-global-color-orange-orange500">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        Elantra N
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 text-global-color-blue-blue950">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        David Kim
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 text-global-color-blue-blue950">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        North Star Motors
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        +1 (555) 987-6543
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        Pam Beesly
                      </div>
                    </div>
                    <div className="w-num-105 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center justify-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20">
                      <Chip property1="InProgress" confirmed="Pending" />
                    </div>
                    <Button
                      className="w-num-105 !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 box-border shrink-0 custom-cell3"
                      size="large"
                      icon={<img width="16px" height="16px" src="/svg-1.svg" />}
                      iconPosition="start"
                      style={{ width: "105px" }}
                      type="primary"
                    />
                  </div>
                  <div className="w-num-1793 h-num-47 bg-global-color-grey-white overflow-x-auto shrink-0 flex items-center">
                    <div className="w-num-142 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 text-num-12 text-global-color-grey-grey600">
                      <div className="relative leading-num-16">DLR-134</div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        2023-11-16 11:00 AM
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 text-global-color-orange-orange500">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        Santa Fe
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 text-global-color-blue-blue950">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        Sarah Connor
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 text-global-color-blue-blue950">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        Hyundai Downtown
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        +1 (555) 010-2345
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        Michael Scott
                      </div>
                    </div>
                    <div className="w-num-105 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center justify-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20">
                      <Chip property1="Done" confirmed="Completed" />
                    </div>
                    <Button
                      className="w-num-105 !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 box-border shrink-0 custom-cell4"
                      size="large"
                      icon={<img width="16px" height="16px" src="/svg-1.svg" />}
                      iconPosition="start"
                      style={{ width: "105px" }}
                      type="primary"
                    />
                  </div>
                  <div className="w-num-1793 h-num-47 bg-global-color-grey-grey25 overflow-x-auto shrink-0 flex items-center">
                    <div className="w-num-142 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 text-num-12 text-global-color-grey-grey600">
                      <div className="relative leading-num-16">DLR-005</div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        2023-11-17 04:00 PM
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 text-global-color-orange-orange500">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        Sonata
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 text-global-color-blue-blue950">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        James Miller
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 text-global-color-blue-blue950">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        North Star Motors
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        +1 (555) 555-1212
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        Andy Bernard
                      </div>
                    </div>
                    <div className="w-num-105 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center justify-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20">
                      <Chip property1="Success" confirmed="Confirmed" />
                    </div>
                    <Button
                      className="w-num-105 !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 box-border shrink-0 custom-cell5"
                      size="large"
                      icon={<img width="16px" height="16px" src="/svg-1.svg" />}
                      iconPosition="start"
                      style={{ width: "105px" }}
                      type="primary"
                    />
                  </div>
                  <div className="w-num-1793 h-num-47 bg-global-color-grey-white overflow-x-auto shrink-0 flex items-center text-global-color-grey-grey600">
                    <div className="w-num-142 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 text-num-12">
                      <div className="relative leading-num-16">DLR-023</div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 text-global-color-grey-grey700">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        2023-11-18 09:00 AM
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 text-global-color-orange-orange500">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        Kona Electric
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 text-global-color-blue-blue950">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        Linda Davis
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 text-global-color-blue-blue950">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        City Center Auto
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        +1 (555) 333-4444
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 text-global-color-grey-grey700">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        Phyllis Vance
                      </div>
                    </div>
                    <div className="w-num-105 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center justify-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20">
                      <Chip property1="InProgress" confirmed="Pending" />
                    </div>
                    <Button
                      className="w-num-105 !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 box-border shrink-0 custom-cell6"
                      size="large"
                      icon={<img width="16px" height="16px" src="/svg-1.svg" />}
                      iconPosition="start"
                      style={{ width: "105px" }}
                      type="primary"
                    />
                  </div>
                  <div className="w-num-1793 h-num-47 bg-global-color-grey-grey25 overflow-x-auto shrink-0 flex items-center">
                    <div className="w-num-142 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 text-num-12 text-global-color-grey-grey600">
                      <div className="relative leading-num-16">DLR-112</div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        2023-11-18 01:30 PM
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 text-global-color-orange-orange500">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        IONIQ 5
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 text-global-color-blue-blue800">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        James Davis
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 text-global-color-blue-blue950">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        Eastside Motors
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        +1 (555) 777-8888
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        Andy Bernard
                      </div>
                    </div>
                    <div className="w-num-105 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center justify-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20">
                      <Chip property1="Done" confirmed="Completed" />
                    </div>
                    <Button
                      className="w-num-105 !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 box-border shrink-0 custom-cell7"
                      size="large"
                      icon={<img width="16px" height="16px" src="/svg-1.svg" />}
                      iconPosition="start"
                      style={{ width: "105px" }}
                      type="primary"
                    />
                  </div>
                  <div className="w-num-1793 h-num-47 bg-global-color-grey-white overflow-x-auto shrink-0 flex items-center text-global-color-grey-grey600">
                    <div className="w-num-142 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 text-num-12">
                      <div className="relative leading-num-16">DLR-023</div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 text-global-color-grey-grey700">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        2023-11-18 09:00 AM
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 text-global-color-orange-orange500">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        Kona Electric
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 text-global-color-blue-blue950">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        Linda Davis
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 text-global-color-blue-blue950">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        City Center Auto
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        +1 (555) 333-4444
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 text-global-color-grey-grey700">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        Phyllis Vance
                      </div>
                    </div>
                    <div className="w-num-105 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center justify-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20">
                      <Chip property1="InProgress" confirmed="Pending" />
                    </div>
                    <Button
                      className="w-num-105 !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 box-border shrink-0 custom-cell8"
                      size="large"
                      icon={<img width="16px" height="16px" src="/svg-1.svg" />}
                      iconPosition="start"
                      style={{ width: "105px" }}
                      type="primary"
                    />
                  </div>
                  <div className="w-num-1793 h-num-47 bg-global-color-grey-grey25 overflow-x-auto shrink-0 flex items-center">
                    <div className="w-num-142 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 text-num-12 text-global-color-grey-grey600">
                      <div className="relative leading-num-16">DLR-112</div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        2023-11-18 01:30 PM
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 text-global-color-orange-orange500">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        IONIQ 5
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 text-global-color-blue-blue800">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        James Davis
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 text-global-color-blue-blue950">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        Eastside Motors
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        +1 (555) 777-8888
                      </div>
                    </div>
                    <div className="w-num-240_2 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20">
                      <div className="relative leading-global-fontsize-20 font-global-fontweight-500">
                        Andy Bernard
                      </div>
                    </div>
                    <div className="w-num-105 border-global-color-grey-grey200 border-solid border-r-[1px] box-border shrink-0 flex items-center justify-center !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20">
                      <Chip property1="Done" confirmed="Completed" />
                    </div>
                    <Button
                      className="w-num-105 !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 box-border shrink-0 custom-cell9"
                      size="large"
                      icon={<img width="16px" height="16px" src="/svg-1.svg" />}
                      iconPosition="start"
                      style={{ width: "105px" }}
                      type="primary"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-t-num-0 rounded-b-global-radius-8 bg-global-color-grey-grey50 border-global-color-grey-grey25 border-solid border-t-global-strokeweight-0-5 flex flex-col items-start !pt-[15px] !pb-num-16 !pl-num-16 !pr-num-16">
                <Pagination />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Button
        className="absolute right-[30px] bottom-[30px] shadow-[0px_12px_25px_-5px_rgba(0,_0,_0,_0.2),_0px_8px_10px_-6px_rgba(0,_0,_0,_0.1)] z-[2] custom-ai-assistant"
        size="large"
        shape="circle"
        style={{ width: "48px" }}
        type="primary"
      />
    </div>
  );
};

export default ReservarionVisit;
