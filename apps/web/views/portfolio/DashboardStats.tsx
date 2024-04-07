import ArrowIcon from "@/components/icons/arrow";
import { cn } from "@/lib/utils";
import { aoenik_regular } from "@/public/fonts";
import React from "react";
import * as walletAdapterReact from "@solana/wallet-adapter-react";
import useBalance from "@/hooks/useBalance";

const DashboardStats = () => {
  const portfolio = [
    // {
    //   title: "Net worth",
    //   value: 31_473.82,
    //   percentage: 22.74,
    // },
    {
      title: "Past Profit",
      value: 721.03,
      percentage: -5.12,
    },
    {
      title: "PNL",
      value: 16.82,
      percentage: -5.12,
    },
  ];

  const { balance, endpoint, wallets } = useBalance();

  return (
    <walletAdapterReact.ConnectionProvider endpoint={endpoint}>
      {/* makes the wallet adapter available to the entirety of our application (wrapped in this component) */}
      <walletAdapterReact.WalletProvider wallets={wallets}>
        <div className="flex flex-wrap items-center justify-center gap-4 grow">
          <div className="md:min-w-[389.33px] max-w-[389.33px] w-full p-4 md:p-8 bg-black-100 rounded-2xl border border-white-8 flex flex-col gap-2 items-start justify-start">
            <div className="flex flex-wrap gap-8 justify-between grow items-center w-full">
              <h1
                className={cn(
                  aoenik_regular.className,
                  "ty-subheading text-white-50"
                )}
              >
                Net Worth
              </h1>

              <div
                className={cn(
                  aoenik_regular.className,
                  `${22.74 > 0 ? "bg-green-16 text-green-100" : "bg-red-16 text-red-100"} rounded  p-1 pl-2 flex flex-row gap-1 items-center `
                )}
              >
                <h1>
                  {22.74 > 0 ? "+" : ""}
                  {22.74}
                </h1>
                <ArrowIcon
                  className={22.74 > 0 ? "rotate-0" : "rotate-180"}
                  color={22.74 > 0 ? "#2FD520" : "#ED3556"}
                />
              </div>
            </div>

            <h1 className={cn(aoenik_regular.className, "ty-h4 tracking-wide")}>
              <span className="text-white-50">$ </span>
              <span className="text-white-100">{balance}</span>
            </h1>
          </div>
          {portfolio.map((data, index) => {
            return (
              <div
                key={index}
                className="md:min-w-[389.33px] max-w-[389.33px] w-full p-4 md:p-8 bg-black-100 rounded-2xl border border-white-8 flex flex-col gap-2 items-start justify-start"
              >
                <div className="flex flex-wrap gap-8 justify-between grow items-center w-full">
                  <h1
                    className={cn(
                      aoenik_regular.className,
                      "ty-subheading text-white-50"
                    )}
                  >
                    {data.title}
                  </h1>

                  <div
                    className={cn(
                      aoenik_regular.className,
                      `${data.percentage > 0 ? "bg-green-16 text-green-100" : "bg-red-16 text-red-100"} rounded  p-1 pl-2 flex flex-row gap-1 items-center `
                    )}
                  >
                    <h1>
                      {data.percentage > 0 ? "+" : ""}
                      {data.percentage}
                    </h1>
                    <ArrowIcon
                      className={
                        data.percentage > 0 ? "rotate-0" : "rotate-180"
                      }
                      color={data.percentage > 0 ? "#2FD520" : "#ED3556"}
                    />
                  </div>
                </div>

                <h1
                  className={cn(
                    aoenik_regular.className,
                    "ty-h4 tracking-wide"
                  )}
                >
                  <span className="text-white-50">$ </span>
                  <span className="text-white-100">{data.value}</span>
                </h1>
              </div>
            );
          })}
        </div>
      </walletAdapterReact.WalletProvider>
    </walletAdapterReact.ConnectionProvider>
  );
};

export default DashboardStats;
