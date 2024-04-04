import React from "react";
import PanoramaLogo from "./icons/panorama-logo";
import PanoramaText from "./icons/panorama-text";
import { ConnectWallet } from "./connect-wallet";

export const Navbar = () => {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="flex flex-row justify-between items-center max-w-[1200px] grow">
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
