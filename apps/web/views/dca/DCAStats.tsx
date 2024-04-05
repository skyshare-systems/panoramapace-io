import React from "react";
import Filter from "../portfolio/Filter";
import MyHolder from "../portfolio/MyHolder";

const DCAStats = () => {
  return (
    <div className="flex flex-col gap-8 grow items-center justify-center w-full">
      <Filter />

      <div className="flex flex-col gap-4 grow justify-start items-start">
        <div className="flex flex-wrap gap-4 grow items-center">
          <MyHolder />
        </div>
      </div>
    </div>
  );
};

export default DCAStats;
