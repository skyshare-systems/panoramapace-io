import React from "react";

const XIcon = ({ className }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className={className}
    >
      <path
        d="M9.5 2.5L2.5 9.5M2.5 2.5L9.5 9.5"
        stroke="#FEFEFE"
        stroke-width="0.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default XIcon;
