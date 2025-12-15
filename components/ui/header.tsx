"use client";
import type { NextPage } from "next";
import { Input } from "antd";
import "/app/antd.css";

export type HeaderType = {
  className?: string;
  showMobile?: boolean;
};

// SVG 아이콘 컴포넌트들
const BellIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const UserCircleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SearchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GlobeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12a8.959 8.959 0 01-1.855 5.329m0 0A9.06 9.06 0 0112 13.5a9.06 9.06 0 01-7.145 3.829m0 0A8.959 8.959 0 013 12a8.959 8.959 0 011.855-5.329m0 0A9.06 9.06 0 0112 10.5a9.06 9.06 0 017.145-3.829" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MicrophoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 4a3 3 0 016 0v6a3 3 0 11-6 0V4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.5 10a4.5 4.5 0 009 0m-4.5 4.5V17m0 0h-3m3 0h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Header: NextPage<HeaderType> = ({
  className = "",
  showMobile = false,
}) => {
  return (
    <section
      className={`w-full bg-global-color-grey-grey300 border-global-color-grey-grey200 border-solid border-b-[1px] box-border flex flex-wrap items-center justify-between !pt-num-14 !pb-num-14 !pl-4 !pr-4 md:!pl-6 md:!pr-6 gap-3 md:gap-5 text-left text-global-fontsize-20 text-global-color-blue-blue600 font-global-fontfamily-inter ${className}`}
    >
      {/* 로고 영역 */}
      <div className="flex items-center shrink-0">
        <div className="flex flex-col items-start gap-0.5">
          <h3 className="!m-0 relative text-[length:inherit] tracking-global-letterspacing-0-7 leading-6 uppercase font-global-fontweight-700 font-[inherit] overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
            Dealer365
          </h3>
          <div className="h-2.5 relative text-global-fontsize-10 leading-global-fontsize-10 flex items-center shrink-0 whitespace-nowrap">
            BOS Platform
          </div>
        </div>
      </div>

      {/* 검색바 - 중간 화면에서는 숨김 */}
      <div className="hidden lg:block flex-1 max-w-[480px]">
        <Input
          className="bg-[transparent] w-full shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] font-[Inter] font-[500] text-[14px] text-global-color-grey-grey600 custom-serch-bar"
          size="large"
          placeholder="Search"
          suffix={
            <span className="text-global-color-grey-grey600">
              <MicrophoneIcon />
            </span>
          }
          prefix={
            <span className="text-global-color-grey-grey600">
              <SearchIcon />
            </span>
          }
          type="text"
          variant="borderless"
        />
      </div>

      {/* 우측 액션 버튼 영역 */}
      <div className="flex items-center justify-end gap-3 md:gap-6 text-global-fontsize-14 shrink-0">
        {/* 알림 버튼 - 모바일에서는 숨김 */}
        <button
          className="w-6 h-6 relative shrink-0 hidden md:flex items-center justify-center bg-transparent border-0 cursor-pointer p-0 text-global-color-blue-blue600 hover:text-global-color-blue-blue800"
          aria-label="알림"
        >
          <BellIcon />
        </button>
        
        {/* 사용자 정보 */}
        <div className="flex items-center gap-2 shrink-0">
          <b className="relative leading-global-fontsize-20 hidden sm:block">User</b>
          <button
            className="w-6 h-6 relative flex items-center justify-center bg-transparent border-0 cursor-pointer p-0 text-global-color-blue-blue600 hover:text-global-color-blue-blue800"
            aria-label="사용자"
          >
            <UserCircleIcon />
          </button>
        </div>
        
        {/* 모바일 전용 버튼들 */}
        {!!showMobile && (
          <div className="flex items-center gap-3 shrink-0 md:hidden">
            <button
              className="w-6 h-6 relative flex items-center justify-center bg-transparent border-0 cursor-pointer p-0 text-global-color-blue-blue600 hover:text-global-color-blue-blue800"
              aria-label="검색"
            >
              <SearchIcon />
            </button>
            <button
              className="w-6 h-6 relative flex items-center justify-center bg-transparent border-0 cursor-pointer p-0 text-global-color-blue-blue600 hover:text-global-color-blue-blue800"
              aria-label="언어"
            >
              <GlobeIcon />
            </button>
            <button
              className="w-6 h-6 relative flex items-center justify-center bg-transparent border-0 cursor-pointer p-0 text-global-color-blue-blue600 hover:text-global-color-blue-blue800"
              aria-label="알림"
            >
              <BellIcon />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Header;
