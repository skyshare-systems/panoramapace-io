import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { aoenik_regular } from "@/public/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ArrowUpRight from "@/components/icons/arrow-up-right";
import EyeIcon from "@/components/icons/eye";

const Filter = () => {
  const [selectedToken, setSelectedToken] = useState("usd");

  const dropdownlist = [
    {
      name: "US Dollars",
      acronym: "usd",
    },
    {
      name: "Philippine Peso",
      acronym: "php",
    },
  ];

  const time = [
    {
      name: "7d",
    },
    {
      name: "24h",
    },
    {
      name: "4h",
    },
  ];

  return (
    <div className="flex flex-wrap grow w-full justify-between items-center">
      <div className="flex flex-wrap items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger
            className={cn(
              aoenik_regular.className,
              "py-3 px-4 flex items-center gap-2 outline-none ty-title backdrop-blur-[8px] bg-white-8 border border-white-16 rounded-lg uppercase text-white-100"
            )}
          >
            {selectedToken} <ChevronDown size={16} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="outline-none p-2 pb-3 border border-white-16 bg-black-100 rounded-xl">
            {dropdownlist.map((data, index) => (
              <DropdownMenuItem
                key={index}
                onClick={() => setSelectedToken(data.acronym)}
                className="flex justify-between min-w-[200px] p-2 items-center gap-2 rounded-[8px] hover:bg-white-4 backdrop-blur-md cursor-pointer"
              >
                <h1
                  className={
                    (aoenik_regular.className, "ty-title text-white-100")
                  }
                >
                  {data.name}
                </h1>
                <h1
                  className={
                    (aoenik_regular.className,
                    "ty-descriptions text-white-50 uppercase")
                  }
                >
                  {data.acronym}
                </h1>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <button
          className={cn(
            aoenik_regular.className,
            "ty-title text-white-100 p-3 pl-4 flex items-center gap-2 rounded-lg button-gray-gradient"
          )}
        >
          All Wallet and Exchanges
          <ArrowUpRight />
        </button>

        <div className="flex flex-wrap items-center gap-2 rounded-lg border border-white-8 bg-black-100 self-stretch p-1">
          {time.map((data, index) => {
            return (
              <button
                key={index}
                className={cn(
                  aoenik_regular.className,
                  "py-2 px-3 ty-title hover:bg-white-100 hover:text-black-100 text-white-50 rounded-lg self-stretch"
                )}
              >
                {data.name}
              </button>
            );
          })}
        </div>
      </div>

      <div className="">
        <button
          className={cn(
            aoenik_regular.className,
            "px-4 py-3 rounded-lg border border-white-4 button-gray-gradient ty-descriptions text-white-50 self-stretch flex items-center gap-2"
          )}
        >
          <EyeIcon />
          Hide Estimated Balance
        </button>
      </div>
    </div>
  );
};

export default Filter;
