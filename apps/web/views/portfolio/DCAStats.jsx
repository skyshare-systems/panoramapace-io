import SettingsIcon from "@/components/icons/settings";
import { cn } from "@/lib/utils";
import { aoenik_regular } from "@/public/fonts";
import React from "react";
import Chart from "react-apexcharts";
import useScreenSize from "@/hooks/useScreenSize";

const DCAStats = () => {
  const screenSize = useScreenSize();

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
    },
    series: [
      {
        name: "Sales",

        data: [
          {
            x: "23 Mar",
            y: 51.09,
          },
          {
            x: "24 Mar",
            y: 16.07,
          },
          {
            x: "25 Mar",
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
        width={screenSize.width > 640 ? 500 : 300}
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
