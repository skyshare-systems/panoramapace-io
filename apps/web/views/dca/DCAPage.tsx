import CeilingBg from "@/components/icons/bg-ceiling";
import { cn } from "@/lib/utils";
import { aoenik_regular } from "@/public/fonts";
import React from "react";
import ListWallet from "../dashboard/ListWallet";
import DCAStats from "./DCAStats";

const DCAPage = () => {
  return (
    <div className="flex justify-center items-center pt-[8rem] pb-[5rem] relative">
      <CeilingBg className="absolute -top-[7rem] w-full -z-[1] opacity-40" />
      <div className="flex flex-col max-w-[1200px] gap-16 grow items-start w-full px-4 xl:px-0">
        {/* DCA */}
        <div className="flex flex-col gap-8 items-start justify-start grow w-full">
          <div className="flex flex-wrap justify-between items-center grow w-full gap-2">
            <div className="flex flex-col gap-2">
              <h1
                className={cn(
                  aoenik_regular.className,
                  "ty-h3 lg:ty-h1 text-white-100 leading-none"
                )}
              >
                DCA
              </h1>
              <p
                className={cn(
                  aoenik_regular.className,
                  "ty-subheading text-white-50"
                )}
              >
                Accumulate and start growing your crypto on autopilot.
              </p>
            </div>
            <button className="button-gradient py-3 px-4 flex items-center gap-2 ty-title text-white-80 rounded-lg hover:opacity-50 duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <path
                  d="M8 3.16675V13.8334"
                  stroke="#FEFEFE"
                  stroke-opacity="0.8"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.6665 8.5H13.3332"
                  stroke="#FEFEFE"
                  stroke-opacity="0.8"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Add DCA Investment
            </button>
          </div>

          {/* Add Wallet  */}
          <ListWallet />
        </div>
        <DCAStats />
        {/* Portfolio */}
        {/* <PortfolioPage /> */}
      </div>
    </div>
  );
};

export default DCAPage;
