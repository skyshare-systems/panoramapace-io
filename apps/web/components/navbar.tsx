"use client";
import React from "react";
import PanoramaLogo from "./icons/panorama-logo";
import PanoramaText from "./icons/panorama-text";
import { ConnectWallet } from "./connect-wallet";
import { useScrollPosition } from "@/hooks/useScrollPosition";

export const Navbar = () => {
  const { scrollPosition } = useScrollPosition();

  return (
    <div
      className={`${
        scrollPosition < 50 ? "bg-transparent py-8" : "bg-black-100 py-4"
      } fixed top-0 w-full flex justify-center items-center z-[99] duration-200`}
    >
      <div className="flex flex-row justify-between items-center max-w-[1200px] grow px-4 xl:px-0">
        {/* Logo  */}
        <div className="flex items-center gap-2">
          <PanoramaLogo />
          <PanoramaText className="hidden sm:block" />
        </div>
        {/* Connect Wallet */}
        <ConnectWallet />
      </div>
    </div>
  );
};
