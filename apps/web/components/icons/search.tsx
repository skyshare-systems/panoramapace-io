import React from "react";

const SearchIcon = ({ className }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      className={className}
    >
      <path
        d="M7 7.5L8.25 8.75"
        stroke="#FEFEFE"
        stroke-width="0.75"
        stroke-linejoin="round"
      />
      <path
        d="M8.21664 9.76259C7.92779 9.47374 7.92779 9.00544 8.21664 8.71664C8.50544 8.42779 8.97374 8.42779 9.26259 8.71664L10.7833 10.2374C11.0722 10.5262 11.0722 10.9945 10.7833 11.2833C10.4945 11.5722 10.0262 11.5722 9.73739 11.2833L8.21664 9.76259Z"
        stroke="#FEFEFE"
        stroke-width="0.75"
        stroke-linecap="round"
      />
      <path
        d="M8 5C8 3.06701 6.433 1.5 4.5 1.5C2.56701 1.5 1 3.06701 1 5C1 6.933 2.56701 8.5 4.5 8.5C6.433 8.5 8 6.933 8 5Z"
        stroke="#FEFEFE"
        stroke-width="0.75"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default SearchIcon;
