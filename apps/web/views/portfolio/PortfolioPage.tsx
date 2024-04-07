import React from "react";
import Filter from "./Filter";
import DashboardStats from "./DashboardStats";
// import PortfolioStats from "./PortfolioStats";
// import DCAStats from "./DCAStats";

import MyHolder from "./MyHolder";
import dynamic from "next/dynamic";
import NonCryptoAssets from "./NonCryptoAssets";

const PortfolioStats = dynamic(() => import("./PortfolioStats"), {
  ssr: false,
});
const DCAGraph = dynamic(() => import("./DCAGraph"), { ssr: false });

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
          <DCAGraph />
          <div className="hidden md:flex flex-col grow items-center justify-center p-4 md:p-8 gap-4 md:gap-8 border border-white-8 bg-black-100 rounded-2xl w-full md:min-w-[768px] lg:min-w-[1024px] xl:min-w-[1200px]">
            <MyHolder />
            <NonCryptoAssets />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
