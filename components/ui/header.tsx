"use client";
import type { NextPage } from "next";
import { Input, Button } from "antd";
import "/app/antd.css";
import Dropdown1 from "../dropdown1";

export type HeaderType = {
  className?: string;
  showMobile?: boolean;
};

const Header: NextPage<HeaderType> = ({
  className = "",
  showMobile = false,
}) => {
  return (
    <section
      className={`w-[1920px] bg-global-color-grey-grey300 border-global-color-grey-grey200 border-solid border-b-[1px] box-border flex items-center justify-between !pt-num-14 !pb-num-14 !pl-6 !pr-6 gap-5 text-left text-global-fontsize-20 text-global-color-blue-blue600 font-global-fontfamily-inter ${className}`}
    >
      <div className="w-[325px] flex items-center">
        <div className="w-[88.2px] flex flex-col items-start gap-0.5">
          <h3 className="!m-0 relative text-[length:inherit] tracking-global-letterspacing-0-7 leading-6 uppercase font-global-fontweight-700 font-[inherit] overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
            Dealer365
          </h3>
          <div className="self-stretch h-2.5 relative text-global-fontsize-10 leading-global-fontsize-10 flex items-center shrink-0">
            BOS Platform
          </div>
        </div>
      </div>
      <Input
        className="bg-[transparent] w-[480px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] font-[Inter] font-[500] text-[14px] text-global-color-grey-grey600 custom-serch-bar"
        size="large"
        placeholder="Search"
        suffix={
          <img
            width="20px"
            height="20px"
            src="/heroicons-solid-microphone.svg"
          />
        }
        prefix={
          <img
            width="24px"
            height="24px"
            src="/heroicons-solid-magnifying-glass.svg"
          />
        }
        type="text"
        style={{ width: "480px" }}
        variant="borderless"
      />
      <div className="flex items-center justify-end gap-6 text-global-fontsize-14">
        <Dropdown1 filled={false} type="Inline" type1="Close" showChevron />
        <Button
          className="w-6 relative shrink-0 custom-heroicons-outlinebell"
          size="small"
          style={{ width: "24px" }}
          type="primary"
        />
        <div className="flex items-center gap-2 shrink-0">
          <b className="relative leading-global-fontsize-20">User</b>
          <Button
            className="w-6 relative custom-heroicons-outlineuser-circle"
            size="small"
            style={{ width: "24px" }}
            type="primary"
          />
        </div>
        {!!showMobile && (
          <div className="items-center gap-6 shrink-0">
            <Button
              className="w-6 relative custom-heroicons-outlinemagnifying-g"
              size="small"
              style={{ width: "24px" }}
              type="primary"
            />
            <Button
              className="w-6 relative custom-heroicons-outlineglobe-europe"
              size="small"
              style={{ width: "24px" }}
              type="primary"
            />
            <Button
              className="w-6 relative custom-heroicons-outlinebell1"
              size="small"
              style={{ width: "24px" }}
              type="primary"
            />
            <Button
              className="w-6 relative custom-heroicons-outlineuser-circle1"
              size="small"
              style={{ width: "24px" }}
              type="primary"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Header;
