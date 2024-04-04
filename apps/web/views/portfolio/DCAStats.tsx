import SettingsIcon from "@/components/icons/settings";
import { cn } from "@/lib/utils";
import { aoenik_regular } from "@/public/fonts";
import React from "react";
import Image from "next/image";
import Chart from "react-apexcharts";

const DCAStats = () => {
  const chartdata = {
    options: {
      chart: {
        toolbar: {
          show: false,
        },

        id: "chart2",
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: [
          "23 Mar",
          "24 Mar",
          "25 Mar",
          "26 Mar",
          "27 Mar",
          "28 Mar",
          "29 Mar",
        ],
      },
    },
    series: [
      {
        name: "Sales",
        data: [200, 215, 200, 205, 200, 195, 220],
      },
    ],
  };

  return (
    <div className="flex flex-col justify-center items-center grow md:min-w-[588px] max-w-[588px] gap-4 md:gap-8 p-4 md:p-8 border border-white-8 bg-black-100 rounded-2xl">
      <div className="flex flex-wrap justify-between items-center grow w-full">
        <h1 className={cn(aoenik_regular.className, "ty-h5 text-white-100")}>
          DCA
        </h1>
        <SettingsIcon />
      </div>
      {/* 
    <ReactApexChart
      options={chartdata.options}
      series={chartdata.series}
      type="treemap"
      height={500}
      width={588}
    /> */}
      <Chart
        options={chartdata.options}
        series={chartdata.series}
        type="line"
        height={259}
        width={524}
      />
      {/* 
      <Image
        src={"/assets/dca.png"}
        alt={"dca"}
        height={500}
        width={588}
        className="w-full max-w-[588px]"
        unoptimized
      /> */}
    </div>
  );
};

export default DCAStats;
