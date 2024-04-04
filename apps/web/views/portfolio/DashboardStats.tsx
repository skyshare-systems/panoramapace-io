import ArrowIcon from "@/components/icons/arrow";
import { cn } from "@/lib/utils";
import { aoenik_regular } from "@/public/fonts";
import React from "react";

const DashboardStats = () => {
  const portfolio = [
    {
      title: "Net worth",
      value: 31_473.82,
      percentage: 22.74,
    },
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

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 grow">
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
                  className={data.percentage > 0 ? "rotate-0" : "rotate-180"}
                  color={data.percentage > 0 ? "#2FD520" : "#ED3556"}
                />
              </div>
            </div>

            <h1 className={cn(aoenik_regular.className, "ty-h4 tracking-wide")}>
              <span className="text-white-50">$ </span>
              <span className="text-white-100">{data.value}</span>
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardStats;
