import React from "react";
import Filter from "./Filter";
import DashboardStats from "./DashboardStats";
import PortfolioStats from "./PortfolioStats";
import DCAStats from "./DCAStats";
import MyHolder from "./MyHolder";

const PortfolioPage = () => {
  return (
    <div className="flex flex-col gap-8 grow items-center justify-center w-full">
      {/* Filter */}
      <Filter />

      {/* portfolio */}
      <div className="flex flex-col gap-4 grow justify-start items-start">
        <DashboardStats />

        <div className="flex flex-wrap gap-4 grow items-center">
          <PortfolioStats />
          {/* <DCAStats /> */}

          <MyHolder />
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
