"use client";
import SettingsIcon from "@/components/icons/settings";
import { cn } from "@/lib/utils";
import { aoenik_regular } from "@/public/fonts";
import React from "react";
import Chart from "react-apexcharts";

const DCAStats = () => {
  const chartdata = {
    options: {
      stroke: {
        curve: "smooth",
        width: "1",
      },

      grid: {
        borderColor: "#FEFEFE0A",
        // position: "front",
        xaxis: {
          lines: {
            show: true,
            borderColor: "#FEFEFE0A",
          },
        },
      },

      colors: ["#fff"],
      chart: {
        // type: "line",
        toolbar: {
          show: false,
        },
      },
    },
    series: [
      {
        name: "Sales",

        data: [
          {
            x: "23 Mar",
            y: 205,
          },
          {
            x: "24 Mar",
            y: 215,
          },
          {
            x: "25 Mar",
            y: 200,
          },
          {
            x: "26 Mar",
            y: 206,
          },
          {
            x: "27 Mar",
            y: 197,
          },
          {
            x: "28 Mar",
            y: 213,
          },
          {
            x: "29 Mar",
            y: 230,
          },
        ],
      },
    ],
  };

  return (
    <div className="hidden md:flex flex-col justify-center items-center grow md:min-w-[588px] max-w-[588px] gap-4 md:gap-8 p-4 md:p-8 border border-white-8 bg-black-100 rounded-2xl">
      <div className="flex flex-wrap justify-between items-center grow w-full">
        <h1 className={cn(aoenik_regular.className, "ty-h5 text-white-100")}>
          DCA
        </h1>
        <SettingsIcon />
      </div>

      {typeof window !== "undefined" && (
        <Chart
          options={chartdata.options}
          series={chartdata.series}
          type="line"
          height={259}
          width={535}
        />
      )}
    </div>
  );
};

export default DCAStats;
