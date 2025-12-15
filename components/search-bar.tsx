"use client";
import type { NextPage } from "next";
import { useState } from "react";

export type SearchBarType = {
  className?: string;
  onSearch?: (query: string) => void;
};

const SearchBar: NextPage<SearchBarType> = ({
  className = "",
  onSearch,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleFocus = () => {
    setIsOpen(true);
  };

  const handleBlur = (e: React.FocusEvent) => {
    // 드롭다운 내부를 클릭하면 닫히지 않도록
    if (e.relatedTarget?.closest('.search-dropdown')) {
      return;
    }
    setTimeout(() => setIsOpen(false), 200);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <div className={`relative w-[480px] ${className}`}>
      {/* Search Input */}
      <div 
        className="h-10 bg-surface-surfaceprimary border-border-borderdefault border-solid border-global-strokeweight-1 rounded-num-8 flex items-center !px-3 gap-2 cursor-text"
        onClick={handleFocus}
      >
        {/* Search Icon */}
        <svg className="w-6 h-6 text-icon-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          className="flex-1 text-font-size-13 font-global-fontweight-500 text-icon-tertiary bg-transparent border-none outline-none"
          placeholder="Search"
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{ color: searchQuery ? "#09090b" : "#71717a" }}
        />
        {/* Calendar Icon */}
        <svg className="w-5 h-5 text-icon-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        {/* Microphone Icon */}
        <svg className="w-5 h-5 text-icon-tertiary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
          <path d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z" />
        </svg>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div 
          className="search-dropdown absolute top-[52px] left-0 w-full bg-surface-surfacesecondary border-border-borderdefault border-solid border-global-strokeweight-1 rounded-num-6 shadow-[0px_4px_12px_rgba(0,0,0,0.1)] overflow-hidden z-50"
          style={{ maxHeight: "346px", overflowY: "auto" }}
        >
          {/* Recently Open */}
          {!searchQuery && (
            <>
              <div className="px-2.5 py-2">
                <div className="text-global-fontsize-12 font-global-fontweight-600 text-icon-tertiary">
                  Recently Open
                </div>
              </div>
              <div className="px-2.5 py-2 hover:bg-global-color-grey-grey50 cursor-pointer flex items-center gap-2">
                <svg className="w-4 h-4 text-icon-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-global-fontsize-12 font-global-fontweight-600 text-global-color-blue-blue950">
                  tesla
                </span>
              </div>
              <div className="px-2.5 py-2 hover:bg-global-color-grey-grey50 cursor-pointer flex items-center gap-2">
                <svg className="w-4 h-4 text-icon-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-global-fontsize-12 font-global-fontweight-600 text-global-color-blue-blue950">
                  AP900027
                </span>
              </div>
            </>
          )}

          {/* Today Appointment */}
          <div className="px-2.5 py-2 mt-2">
            <div className="text-global-fontsize-12 font-global-fontweight-600 text-icon-tertiary">
              Today Appointment
            </div>
          </div>
          <div className="px-2.5 py-2 hover:bg-global-color-grey-grey50 cursor-pointer">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full border-2 border-global-color-blue-blue500 bg-global-color-blue-blue50 relative">
                <div className="w-2 h-2 rounded-full bg-global-color-blue-blue500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <span className="text-global-fontsize-12 font-global-fontweight-600 text-global-color-blue-blue950">
                {searchQuery ? "John D. (GV80) - Engine Oil Change" : "John D. (GV80) - Engine Oil Change"}
              </span>
            </div>
          </div>
          {searchQuery && (
            <div className="px-2.5 py-2 hover:bg-global-color-grey-grey50 cursor-pointer bg-global-color-grey-grey50">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full border-2 border-global-color-blue-blue500 bg-global-color-blue-blue50 relative">
                  <div className="w-2 h-2 rounded-full bg-global-color-blue-blue500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
                <span className="text-global-fontsize-12 font-global-fontweight-600 text-global-color-blue-blue950">
                  Jane S. (ABC-1234) - Scheduled Maintenance Engine
                </span>
              </div>
            </div>
          )}
          <div className="px-2.5 py-2 hover:bg-global-color-grey-grey50 cursor-pointer">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full border-2 border-global-color-blue-blue500 bg-global-color-blue-blue50 relative">
                <div className="w-2 h-2 rounded-full bg-global-color-blue-blue500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <span className="text-global-fontsize-12 font-global-fontweight-600 text-global-color-blue-blue950">
                Mike P. (Sorento) - Check Engine Light
              </span>
            </div>
          </div>

          {/* Today RO */}
          <div className="px-2.5 py-2 mt-2">
            <div className="text-global-fontsize-12 font-global-fontweight-600 text-icon-tertiary">
              Today RO
            </div>
          </div>
          <div className="px-2.5 py-2 hover:bg-global-color-grey-grey50 cursor-pointer flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-icon-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-global-fontsize-12 font-global-fontweight-600 text-global-color-blue-blue950">
                ABC-1234 - Engine Oil Change - 240716
              </span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-icon-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              <svg className="w-4 h-4 text-icon-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <svg className="w-4 h-4 text-icon-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
          </div>
          <div className="px-2.5 py-2 hover:bg-global-color-grey-grey50 cursor-pointer flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-icon-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-global-fontsize-12 font-global-fontweight-600 text-global-color-blue-blue950">
                DEF-5678 - Engine No-Start - 24071
              </span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-icon-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              <svg className="w-4 h-4 text-icon-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <svg className="w-4 h-4 text-icon-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;

