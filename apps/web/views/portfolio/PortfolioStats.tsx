"use client";
import SettingsIcon from "@/components/icons/settings";
import { cn } from "@/lib/utils";
import { aoenik_regular } from "@/public/fonts";
import React from "react";
import Chart from "react-apexcharts";

const PortfolioStats = () => {
  const chartdata = {
    series: [
      {
        data: [
          {
            x: "BTC",
            y: 51.09,
          },
          {
            x: "ETH",
            y: 16.07,
          },
          {
            x: "SOL",
            y: 3.24,
          },
          {
            x: "XRP",
            y: 1.31,
          },
          {
            x: "BNB",
            y: 3.34,
          },
          {
            x: "USDT",
            y: 4.17,
          },
          {
            x: "OTHER",
            y: 1.8,
          },
          {
            x: "MEME",
            y: 1.6,
          },
          {
            x: "USDC",
            y: 1.3,
          },
          {
            x: "DOGE",
            y: 1.07,
          },
        ],
      },
    ],

    options: {
      legend: {
        show: false,
      },
      chart: {
        toolbar: {
          show: false,
          type: "treemap",
        },
      },

      formatter: function (text: any, op: any) {
        return [text, op.value + "%"];
      },

      // dataLabels: {
      //   enabled: true,
      //   style: {
      //     fontSize: "12px",
      //     fontWeight: "bold",
      //     color: "#FEFEFE",
      //   },
      //   textAnchor: "middle",

      //   formatter: function (text: any, op: any) {
      //     return [text, op.value + "%"];
      //   },
      //   // offsetY: 0,
      // },

      plotOptions: {
        treemap: {
          borderWidth: 2,
          borderRadius: 8,
          borderColor: "#151b1e",
          backgroundColor: "#15151b1e1515",
          distributed: true,
          enableShades: false,
        },
      },
    },
  };

  return (
    <div className="hidden md:flex flex-col justify-start items-start grow md:min-w-[588px] max-w-[588px] gap-4 md:gap-8 p-4 md:p-8 border border-white-8 bg-black-100 rounded-2xl self-stretch">
      <div className="flex flex-wrap justify-between items-center grow w-full">
        <h1 className={cn(aoenik_regular.className, "ty-h5 text-white-100")}>
          Portfolio
        </h1>
        <SettingsIcon />
      </div>

      {typeof window !== "undefined" && (
        <Chart
          options={chartdata.options}
          series={chartdata.series}
          type="treemap"
          height={259}
          width={535}
        />
      )}
    </div>
  );
};

export default PortfolioStats;
