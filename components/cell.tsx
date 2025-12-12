"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import { Button, Select } from "antd";
import "/app/antd.css";

export type CellType = {
  className?: string;
  showCollepseL?: boolean;
  showCollepseR?: boolean;
  showChevronUpDown?: boolean;

  /** Variant props */
  property1?: string;

  /** Style props */
  cellWidth?: CSSProperties["width"];
  cellFlex?: CSSProperties["flex"];
  cellBorderRight?: CSSProperties["borderRight"];
  cellPadding?: CSSProperties["padding"];
  cellJustifyContent?: CSSProperties["justifyContent"];
  cellGap?: CSSProperties["gap"];
  cellBorderLeft?: CSSProperties["borderLeft"];
  dealerCodeFontSize?: CSSProperties["fontSize"];
  dealerCodeFontWeight?: CSSProperties["fontWeight"];
  dealerCodeFontFamily?: CSSProperties["fontFamily"];
  dealerCodeColor?: CSSProperties["color"];
  dealerCodeTextAlign?: CSSProperties["textAlign"];
};

const Cell: NextPage<CellType> = ({
  className = "",
  property1 = "Header",
  showCollepseL = false,
  showCollepseR = false,
  cellWidth,
  cellFlex,
  cellBorderRight,
  cellPadding,
  cellJustifyContent,
  cellGap,
  cellBorderLeft,
  dealerCodeFontSize,
  dealerCodeFontWeight,
  dealerCodeFontFamily,
  dealerCodeColor,
  dealerCodeTextAlign,
  showChevronUpDown,
}) => {
  const cellStyle: CSSProperties = useMemo(() => {
    return {
      width: cellWidth,
      flex: cellFlex,
      borderRight: cellBorderRight,
      padding: cellPadding,
      justifyContent: cellJustifyContent,
      gap: cellGap,
      borderLeft: cellBorderLeft,
    };
  }, [
    cellWidth,
    cellFlex,
    cellBorderRight,
    cellPadding,
    cellJustifyContent,
    cellGap,
    cellBorderLeft,
  ]);

  const dealerCodeStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: dealerCodeFontSize,
      fontWeight: dealerCodeFontWeight,
      fontFamily: dealerCodeFontFamily,
      color: dealerCodeColor,
      textAlign: dealerCodeTextAlign,
    };
  }, [
    dealerCodeFontSize,
    dealerCodeFontWeight,
    dealerCodeFontFamily,
    dealerCodeColor,
    dealerCodeTextAlign,
  ]);

  return (
    <div
      className={`w-num-142 bg-global-color-grey-grey100 border-border-borderdefault border-solid border-r-[1px] box-border flex items-center justify-between !pt-num-14 !pb-num-14 !pl-num-20 !pr-num-20 gap-[-20px] text-left text-num-12 text-global-color-blue-blue600 font-global-fontfamily-inter ${className}`}
      style={cellStyle}
    >
      {!!showCollepseL && (
        <Button
          className="h-5 w-5 relative shrink-0 custom-collepse-l"
          size="small"
          style={{ width: "20px" }}
          type="primary"
        />
      )}
      <div
        className="relative tracking-global-letterspacing-0-6 leading-global-lineheight-16 font-global-fontweight-600 shrink-0"
        style={dealerCodeStyle}
      >
        Dealer Code
      </div>
      {!!showChevronUpDown && (
        <Button
          className="h-5 w-5 relative shrink-0 custom-heroicons-outlinechevron-up-d"
          size="small"
          style={{ width: "20px" }}
          type="primary"
        />
      )}
      {!!showCollepseR && (
        <Button
          className="h-5 w-5 relative shrink-0 custom-collepse-r"
          size="small"
          style={{ width: "20px" }}
          type="primary"
        />
      )}
    </div>
  );
};

export default Cell;
