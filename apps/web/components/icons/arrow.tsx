import React from "react";

const ArrowIcon = ({ className, color }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      className={className}
    >
      <path
        d="M8.3335 3.16663V13.8333"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.6667 6.49993C11.6667 6.49993 9.21173 3.16663 8.33333 3.16663C7.45493 3.16662 5 6.49996 5 6.49996"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>

    // 2FD520
  );
};

export default ArrowIcon;
