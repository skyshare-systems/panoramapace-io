import CeilingBg from "@/components/icons/bg-ceiling";
import { cn } from "@/lib/utils";
import { aoenik_regular } from "@/public/fonts";
import React from "react";
import ListWallet from "./ListWallet";
import PortfolioPage from "../portfolio/PortfolioPage";
import ListExchanges from "./ListExchanges";

const DashboardPage = () => {
  return (
    <div className="flex justify-center items-center pt-[8rem] pb-[5rem] relative">
      <CeilingBg className="absolute -top-[7rem] w-full -z-[1] opacity-40" />
      <div className="flex flex-col max-w-[1200px] gap-16 grow items-start w-full px-4 xl:px-0">
        {/* Dashboard */}
        <div className="flex flex-col gap-8 items-start justify-start grow w-full">
          <div className="flex flex-col gap-2">
            <h1
              className={cn(
                aoenik_regular.className,
                "ty-h3 lg:ty-h1 text-white-100 leading-none"
              )}
            >
              Dashboard
            </h1>
            <p
              className={cn(
                aoenik_regular.className,
                "ty-subheading text-white-50"
              )}
            >
              See your summary of your portfolio
            </p>
          </div>

          {/* Add Wallet  */}
          <div className="flex flex-col gap-2 p-2 rounded-2xl border-[0.7px] backdrop-blur-lg border-white-8 bg-black-100 grow self-stretch">
            <h1
              className={cn(
                aoenik_regular.className,
                "ty-subtext text-white-50 pb-0 p-2"
              )}
            >
              Wallets
            </h1>
            <ListWallet />
          </div>
          <div className="flex flex-col gap-2 p-2 rounded-2xl border-[0.7px] backdrop-blur-lg border-white-8 bg-black-100 grow self-stretch">
            <h1
              className={cn(
                aoenik_regular.className,
                "ty-subtext text-white-50 pb-0 p-2"
              )}
            >
              Exchanges
            </h1>
            <ListExchanges />
          </div>
        </div>
        {/* Portfolio */}
        <PortfolioPage />
      </div>
    </div>
  );
};

export default DashboardPage;
