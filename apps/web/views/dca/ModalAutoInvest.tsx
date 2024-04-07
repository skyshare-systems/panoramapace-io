import { Input } from "@/components/ui/input";
import { cn, shortenAddress } from "@/lib/utils";
import { aoenik_regular } from "@/public/fonts";
import React, { useState } from "react";
import * as walletAdapterReact from "@solana/wallet-adapter-react";
import useBalance from "@/hooks/useBalance";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ModalAutoInvest = ({ isOpen }: any) => {
  const { balance, endpoint, wallets } = useBalance();
  const { publicKey } = walletAdapterReact.useWallet();
  const [checkbox, setCheckbox] = useState(false);

  const [selectedCycle, setSelectedCycle] = useState("Daily");

  const recurring_cycle_data = [
    {
      name: "Daily",
    },
    {
      name: "Weekly",
    },
    {
      name: "Bi-Weekly",
    },
    {
      name: "Monthly",
    },
    {
      name: "1 Hour",
    },
    {
      name: "4 Hours",
    },
    {
      name: "8 Hours",
    },
    {
      name: "12 Hours",
    },
  ];

  const dropdownlist = [
    {
      name: "Solana",
    },
  ];

  return (
    <walletAdapterReact.ConnectionProvider endpoint={endpoint}>
      {/* makes the wallet adapter available to the entirety of our application (wrapped in this component) */}
      <walletAdapterReact.WalletProvider wallets={wallets}>
        <div className="fixed top-0 left-0 w-full flex justify-center items-center bg-black-4 backdrop-blur-[32px] z-[9999] h-[100dvh] overflow-y-auto">
          <div className="mt-[40rem] sm:mt-[20rem] lg:mt-0 flex flex-col lg:flex-row items-center justify-center grow max-w-[1000px] w-full">
            <div className="w-full max-w-[484px] lg:rounded-l-[32px] flex flex-col p-8 gap-8 bg-black-100 border border-r-0 border-white-8">
              <div className="flex justify-end-end grow w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  onClick={() => isOpen(false)}
                  className="cursor-pointer block lg:hidden"
                >
                  <path
                    d="M12.6666 3.83337L3.33325 13.1667M3.33325 3.83337L12.6666 13.1667"
                    stroke="#FEFEFE"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <h1
                className={cn(aoenik_regular.className, "t-h4 text-white-100")}
              >
                Auto Invest
              </h1>

              <div className="flex flex-col gap-4 grow">
                <div className="flex flex-wrap justify-between items-center gap-2 grow self-stretch">
                  <h1
                    className={cn(
                      aoenik_regular.className,
                      "ty-subtitle text-white-100"
                    )}
                  >
                    Coin Allocation
                  </h1>
                  <div className="flex flex-wrap items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <g opacity="0.5">
                        <path
                          d="M11 6C11 3.23857 8.7614 1 6 1C3.23857 1 1 3.23857 1 6C1 8.7614 3.23857 11 6 11C8.7614 11 11 8.7614 11 6Z"
                          stroke="#FEFEFE"
                          stroke-width="0.75"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5.01172 5.00535H6.00217V8.49585M5.62547 3.63379H6.37522"
                          stroke="#FEFEFE"
                          stroke-width="0.75"
                        />
                      </g>
                    </svg>
                    <h1
                      className={cn(
                        aoenik_regular.className,
                        "text-white-50 ty-subtext"
                      )}
                    >
                      Total Allocation:
                    </h1>
                    <h1
                      className={cn(
                        aoenik_regular.className,
                        "ty-descriptions font-normal text-white-100"
                      )}
                    >
                      0%
                    </h1>
                  </div>
                </div>
                <div className="flex flex-col gap-2 p-1 rounded-xl border border-white-4">
                  <div className="flex flex-row items-center gap-2">
                    <Input placeholder="Enter at least 10%" />
                    <DropdownMenu>
                      <DropdownMenuTrigger
                        className={cn(
                          aoenik_regular.className,
                          "pl-3 pr-2 py-2 border self-stretch border-white-16 flex items-center gap-2 outline-none ty-title backdrop-blur-[8px] button-gray-gradient rounded-lg text-white-100 w-full max-w-[120px]"
                        )}
                      >
                        <Image
                          src={"/icons/solana.png"}
                          alt={"solana"}
                          height={16}
                          width={16}
                        />
                        SOLANA{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          className="h-[16px] w-[16px]"
                        >
                          <path
                            d="M12 6.00003C12 6.00003 9.05407 10 8 10C6.94587 10 4 6 4 6"
                            stroke="#FEFEFE"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="outline-none p-2 border border-white-16  rounded-xl z-[999999999]">
                        {dropdownlist.map((data, index) => (
                          <DropdownMenuItem
                            key={index}
                            // onClick={() => setSelectedToken(data.acronym)}
                            className="flex justify-between  p-2 items-center gap-2 rounded-[8px] hover:bg-white-4 backdrop-blur-md cursor-pointer"
                          >
                            <h1
                              className={
                                (aoenik_regular.className,
                                "ty-title text-white-100")
                              }
                            >
                              {data.name}
                            </h1>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  <button
                    className={cn(
                      aoenik_regular.className,
                      "py-2 px-3 bg-white-4 w-full text-white-100 ty-title rounded-lg"
                    )}
                  >
                    Add a coin allocation
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h1
                  className={cn(
                    aoenik_regular.className,
                    "t-h4 text-white-100"
                  )}
                >
                  Amount to invest
                </h1>

                <Input placeholder="Minimum of 0.1 USDT" />
              </div>

              <div className="flex flex-col gap-4 items-start">
                <div className="flex flex-col gap-2">
                  <h1
                    className={cn(
                      aoenik_regular.className,
                      "t-h4 text-white-100"
                    )}
                  >
                    Payment Order
                  </h1>
                  <p
                    className={cn(
                      aoenik_regular.className,
                      "ty-subtext text-white-50"
                    )}
                  >
                    Subscription amount will be deducted from the payment
                    selected.
                  </p>
                </div>
                <div className="flex p-2 flex-row gap-2 items-start justify-between min-w-[98px] rounded-lg border border-dark_blue-100 bg-dark_blue-4">
                  <div className="flex flex-col gap-3 items-start">
                    <div className="p-1 rounded bg-white-4">
                      <Image
                        src={"/icons/solana.png"}
                        alt={"solana"}
                        height={12}
                        width={12}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h1
                        className={cn(
                          aoenik_regular.className,
                          "ty-descriptions text-white-100"
                        )}
                      >
                        Wallet 1
                      </h1>
                      <p
                        className={cn(
                          aoenik_regular.className,
                          "text-white-100 ty-subtext"
                        )}
                      >
                        {String(shortenAddress(publicKey?.toString()))}
                      </p>
                    </div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                  >
                    <path
                      d="M2.5 7.5L4.25 9.25L9.5 3.75"
                      stroke="#FEFEFE"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h1
                  className={cn(
                    aoenik_regular.className,
                    "t-h4 text-white-100"
                  )}
                >
                  Recurring Cycle
                </h1>
                <div className="flex flex-wrap items-center justify-start gap-1">
                  {recurring_cycle_data.map((data, index) => {
                    return (
                      <button
                        key={index}
                        onClick={() => setSelectedCycle(data.name)}
                        className={cn(
                          aoenik_regular.className,
                          `p-2 flex justify-center items-center rounded-lg border ${selectedCycle === data.name ? "border-dark_blue-100 bg-dark_blue-4" : "border-white-4 hover:border-white-16 hover:bg-white-4"} duration-200 min-w-[101px] text-white-100`
                        )}
                      >
                        {data.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <h1
                  className={cn(
                    aoenik_regular.className,
                    "ty-subtitle text-white-100"
                  )}
                >
                  Repeats On
                </h1>

                <div className="flex gap-2 items-center">
                  <div
                    className={cn(
                      aoenik_regular.className,
                      "pl-3 p-2 ty-subtitle text-white-100 flex items-center rounded-lg border border-white-8 backdrop-blur"
                    )}
                  >
                    18 : 00
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M6.4222 3.10064C6.55403 3.02117 6.76088 2.91663 7.00016 2.91663C7.2395 2.91663 7.4463 3.02117 7.57813 3.10064C7.726 3.18977 7.87312 3.30607 8.01044 3.4274C8.28635 3.67124 8.57831 3.98523 8.8379 4.28419C9.09999 4.58604 9.34073 4.88619 9.51526 5.10983C9.60195 5.22094 9.75052 5.4176 9.80162 5.48528L9.80302 5.48711C9.93351 5.66428 9.95335 5.90007 9.85412 6.09644C9.75484 6.29281 9.55353 6.41663 9.3335 6.41663L4.66683 6.41661C4.4468 6.41661 4.24548 6.29279 4.14622 6.09642C4.04696 5.90004 4.06666 5.66452 4.19714 5.48735L4.19876 5.48521C4.2501 5.41723 4.39851 5.22074 4.48509 5.10981C4.65961 4.88618 4.90037 4.58603 5.16246 4.28418C5.42202 3.98522 5.71399 3.67123 5.98995 3.4274C6.12726 3.30607 6.27438 3.18977 6.4222 3.10064Z"
                        fill="#FEFEFE"
                      />
                      <path
                        d="M4.14615 7.90357C4.24541 7.70716 4.44672 7.58337 4.66676 7.58337H9.33344C9.55347 7.58337 9.75478 7.70722 9.85406 7.90357C9.95329 8.09997 9.93363 8.33547 9.80314 8.51262L9.8015 8.51478C9.75017 8.58274 9.60177 8.77927 9.51514 8.89022C9.34067 9.11381 9.09987 9.41399 8.83778 9.71581C8.57825 10.0148 8.28629 10.3288 8.01032 10.5726C7.873 10.6939 7.72589 10.8102 7.57801 10.8993C7.44618 10.9788 7.23939 11.0834 7.0001 11.0834C6.76076 11.0834 6.55397 10.9788 6.42208 10.8993C6.27426 10.8102 6.12714 10.6939 5.98983 10.5726C5.71388 10.3288 5.42192 10.0148 5.16236 9.71581C4.90028 9.41393 4.65952 9.11381 4.485 8.89016C4.3983 8.77909 4.24977 8.58239 4.19864 8.51472L4.19725 8.51292C4.06677 8.3357 4.04689 8.09992 4.14615 7.90357Z"
                        fill="#FEFEFE"
                      />
                    </svg>
                  </div>
                  <p
                    className={cn(
                      aoenik_regular.className,
                      "text-white-50 ty-subtext"
                    )}
                  >
                    Local Time
                  </p>
                </div>
              </div>

              <h1 className={cn(aoenik_regular.className)}>
                <span className="text-white-50 ty-descriptions">
                  Your first auto-invest cycle will begin on{" "}
                </span>
                <span className="text-white-100 ty-title">2024-03-25 </span>
                <span className="text-white-50 ty-descriptions">at </span>
                <span className="text-white-100 ty-title">18:00. </span>
              </h1>
            </div>

            <div className="w-full max-w-[484px] lg:self-stretch lg:rounded-r-[32px] flex flex-col items-start justify-between  p-8 gap-8 bg-white-4 border border-l-0 border-white-8">
              <div className="flex flex-col justify-end items-end w-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  onClick={() => isOpen(false)}
                  className="cursor-pointer hidden lg:block"
                >
                  <path
                    d="M12.6666 3.83337L3.33325 13.1667M3.33325 3.83337L12.6666 13.1667"
                    stroke="#FEFEFE"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div className="flex flex-col gap-4 w-full">
                  <h1
                    className={cn(
                      aoenik_regular.className,
                      "ty-subtitle text-white-100"
                    )}
                  >
                    Summary
                  </h1>
                  <div className="flex flex-col items-start w-full grow">
                    {/* Time Created */}
                    <div className="flex flex-wrap justify-between grow w-full items-center gap-2">
                      <div className="flex items-center gap-2">
                        <div className="h-[14px] w-[14px] flex justify-center items-center rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="6"
                            height="7"
                            viewBox="0 0 6 7"
                            fill="none"
                          >
                            <circle cx="3" cy="3.5" r="3" fill="#FEFEFE" />
                          </svg>
                        </div>
                        <h1
                          className={cn(
                            aoenik_regular.className,
                            "ty-title text-white-100"
                          )}
                        >
                          Time created
                        </h1>
                      </div>

                      <h1 className={cn(aoenik_regular.className)}>
                        <span className="text-white-100">
                          2024-03-25 17:34{" "}
                        </span>
                        <span className="text-white-50">PHT</span>
                      </h1>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2"
                      height="17"
                      viewBox="0 0 2 17"
                      fill="none"
                      className="ml-[0.4rem]"
                    >
                      <path
                        d="M1 0.5V16.5"
                        stroke="#FEFEFE"
                        stroke-opacity="0.16"
                      />
                    </svg>
                    {/* Amount per period */}
                    <div className="flex flex-wrap justify-between grow w-full items-center gap-2">
                      <div className="flex items-center gap-2">
                        <div className="h-[14px] w-[14px] flex justify-center items-center rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="6"
                            height="7"
                            viewBox="0 0 6 7"
                            fill="none"
                          >
                            <circle cx="3" cy="3.5" r="3" fill="#FEFEFE" />
                          </svg>
                        </div>
                        <h1
                          className={cn(
                            aoenik_regular.className,
                            "ty-title text-white-100"
                          )}
                        >
                          Amount Per Period
                        </h1>
                      </div>

                      <h1 className={cn(aoenik_regular.className)}>
                        <span className="text-white-50">$ </span>
                        <span className="text-white-100">10</span>
                      </h1>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2"
                      height="17"
                      viewBox="0 0 2 17"
                      fill="none"
                      className="ml-[0.4rem]"
                    >
                      <path
                        d="M1 0.5V16.5"
                        stroke="#FEFEFE"
                        stroke-opacity="0.16"
                      />
                    </svg>
                    {/* First Auto-Invest Date */}
                    <div className="flex flex-wrap justify-between grow w-full items-center gap-2">
                      <div className="flex items-center gap-2">
                        <div className="h-[14px] w-[14px] flex justify-center items-center rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="6"
                            height="7"
                            viewBox="0 0 6 7"
                            fill="none"
                          >
                            <circle cx="3" cy="3.5" r="3" fill="#FEFEFE" />
                          </svg>
                        </div>
                        <h1
                          className={cn(
                            aoenik_regular.className,
                            "ty-title text-white-100"
                          )}
                        >
                          First Auto-Invest Date
                        </h1>
                      </div>

                      <h1 className={cn(aoenik_regular.className)}>
                        <span className="text-white-100">
                          2024-03-25 17:34{" "}
                        </span>
                        <span className="text-white-50">PHT</span>
                      </h1>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2"
                      height="17"
                      viewBox="0 0 2 17"
                      fill="none"
                      className="ml-[0.4rem]"
                    >
                      <path
                        d="M1 0.5V16.5"
                        stroke="#FEFEFE"
                        stroke-opacity="0.16"
                      />
                    </svg>
                    {/* Transaction Fee */}
                    <div className="flex flex-wrap justify-between grow w-full items-center gap-2">
                      <div className="flex items-center gap-2">
                        <div className="h-[14px] w-[14px] flex justify-center items-center rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="6"
                            height="7"
                            viewBox="0 0 6 7"
                            fill="none"
                          >
                            <circle cx="3" cy="3.5" r="3" fill="#FEFEFE" />
                          </svg>
                        </div>
                        <h1
                          className={cn(
                            aoenik_regular.className,
                            "ty-title text-white-100"
                          )}
                        >
                          Transaction Fee (0.2%)
                        </h1>
                      </div>

                      <h1 className={cn(aoenik_regular.className)}>
                        <span className="text-white-100">0.02 </span>
                        <span className="text-white-50">USDT</span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center grow justify-end gap-1">
                <div className="p-4 flex items-center gap-2">
                  <Checkbox className="rounded-md text-white-100" />
                  <h1
                    className={cn(
                      aoenik_regular.className,
                      "text-white-50 ty-subtitle"
                    )}
                  >
                    I have read and agreed to Panorama Pace DCA Agreement
                  </h1>
                </div>

                <button
                  onClick={() => isOpen(false)}
                  className={cn(
                    aoenik_regular.className,
                    "py-3 px-4 rounded-lg bg-white-16 hover:bg-white-100 w-full ty-title text-white-16 hover:text-black-100 duration-200 font-bold"
                  )}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </walletAdapterReact.WalletProvider>
    </walletAdapterReact.ConnectionProvider>
  );
};

export default ModalAutoInvest;
