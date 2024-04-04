import React from "react";
import LineBg from "./icons/bg-line";
import { cn } from "@/lib/utils";
import { aoenik_regular } from "@/public/fonts";
import { ConnectWallet } from "./connect-wallet";

const NotConnectedView = () => {
  return (
    <div className="flex justify-center items-center relative h-[100dvh]">
      <LineBg className="absolute top-[0rem] w-full -z-[1] h-[100dvh]" />
      <div className="flex flex-col items-center justify-center max-w-[1200px] gap-8 lg:px-0 px-4 pb-[8rem] pt-[5rem]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <h1
            className={cn(
              aoenik_regular.className,
              "ty-h3 lg:ty-display text-white-100 text-center"
            )}
          >
            Start creating your personalized portfolio
          </h1>
          <p
            className={cn(
              aoenik_regular.className,
              "ty-subheading text-white-50 text-center"
            )}
          >
            Track your Web3 investment across 60+ chains and CEX in one single
            place
          </p>
        </div>
        <ConnectWallet />
      </div>
    </div>
  );
};

export default NotConnectedView;
