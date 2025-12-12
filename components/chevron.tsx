"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import { Button } from "antd";
import "/app/antd.css";

export type ChevronType = {
  className?: string;
  showChevron?: boolean;

  /** Variant props */
  type?: string;

  /** Style props */
  vectorOverflow?: CSSProperties["overflow"];
  vectorMaxHeight?: CSSProperties["maxHeight"];
  vectorTransform?: CSSProperties["transform"];
};

const Chevron: NextPage<ChevronType> = ({
  className = "",
  type = "Open",
  showChevron,
  vectorOverflow,
  vectorMaxHeight,
  vectorTransform,
}) => {
  const vectorStyle: CSSProperties = useMemo(() => {
    return {
      overflow: vectorOverflow,
      maxHeight: vectorMaxHeight,
      transform: vectorTransform,
    };
  }, [vectorOverflow, vectorMaxHeight, vectorTransform]);

  return (
    !!showChevron && (
      <div
        className={`h-4 w-4 relative [transform:_rotate(180deg)] ${className}`}
      >
        <Button
          className="absolute h-1/4 w-6/12 top-[37.5%] right-[25%] bottom-[37.5%] left-[25%] custom-vector"
          size="small"
          style={vectorStyle}
          type="primary"
        />
      </div>
    )
  );
};

export default Chevron;
