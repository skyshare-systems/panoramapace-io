import React from "react";
import PanoramaLogo from "./icons/panorama-logo";
import PanoramaText from "./icons/panorama-text";
import { cn } from "@/lib/utils";
import { aoenik_regular } from "@/public/fonts";
import TwitterIcon from "./icons/twitter";
import GithubIcon from "./icons/github";
import DiscordIcon from "./icons/discord";
import TelegramIcon from "./icons/telegram";
import Link from "next/link";

const Footer = () => {
  const socmed = [
    {
      name: "twitter",
      icon: (
        <>
          <TwitterIcon />
        </>
      ),
      link: "",
    },
    {
      name: "github",
      icon: (
        <>
          <GithubIcon />
        </>
      ),
      link: "",
    },
    {
      name: "discord",
      icon: (
        <>
          <DiscordIcon />
        </>
      ),
      link: "",
    },
    {
      name: "telegram",
      icon: <TelegramIcon />,
      link: "",
    },
  ];
  return (
    <div className="fixed bottom-0 w-full flex justify-center items-center py-4 border-t border-white-50 bg-black-100">
      <div className="flex flex-col lg:flex-row justify-between items-center grow max-w-[1200px] gap-4">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-8">
          <div className="flex items-center gap-2">
            <PanoramaLogo />
            <PanoramaText />
          </div>
          <h1
            className={cn(
              aoenik_regular.className,
              "ty-descriptions text-white-50"
            )}
          >
            © Skyshare Labs 2024 | All rights reserved.
          </h1>
        </div>

        <div className="flex flex-wrap gap-8 items-center">
          <div className="flex flex-wrap items-center gap-4">
            <h1
              className={cn(
                aoenik_regular.className,
                "ty-descriptions text-white-50"
              )}
            >
              Privacy Policy
            </h1>
            <h1
              className={cn(
                aoenik_regular.className,
                "ty-descriptions text-white-50"
              )}
            >
              Terms of Use
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {socmed.map((data, index) => {
              return (
                <Link
                  href={data.link}
                  key={index}
                  className="hover:opacity-50 duration-200"
                >
                  {data.icon}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
