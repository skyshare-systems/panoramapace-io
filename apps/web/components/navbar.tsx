"use client";
import React from "react";
import PanoramaLogo from "./icons/panorama-logo";
import PanoramaText from "./icons/panorama-text";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import Link from "next/link";
import { aoenik_regular } from "@/public/fonts";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export const Navbar = () => {
  const { scrollPosition } = useScrollPosition();
  const pathname = usePathname();

  const navigation = [
    {
      name: "Dashboard",
      link: "/",
    },
    {
      name: "DCA",
      link: "/dca",
    },
  ];

  return (
    <div
      className={`${
        scrollPosition < 50 ? "bg-transparent py-8" : "bg-black-100 py-4"
      } fixed top-0 w-full flex justify-center items-center z-[99] duration-200`}
    >
      <div className="flex flex-row justify-between items-center max-w-[1200px] grow px-4 xl:px-0">
        {/* Logo  */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <PanoramaLogo />
            <PanoramaText className="hidden sm:block" />
          </div>
          {navigation.map((data, index) => {
            return (
              <Link
                key={index}
                href={data.link}
                className={cn(
                  aoenik_regular.className,
                  `${pathname === data.link ? "ty-title text-white-100" : "ty-descriptions text-white-50 hover:ty-title hover:text-white-100"} duration-200`
                )}
              >
                {data.name}
              </Link>
            );
          })}
        </div>

        {/* Connect Wallet */}
        {/* <ConnectWallet /> */}
        <WalletMultiButton />
      </div>
    </div>
  );
};
