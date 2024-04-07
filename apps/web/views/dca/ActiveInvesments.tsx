import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { aoenik_regular } from "@/public/fonts";
import Image from "next/image";
import SearchBar from "@/components/searchbar";

const ActiveInvestments = () => {
  const investment = [
    {
      coin: (
        <>
          <div className="flex items-center gap-2">
            <Image
              src={"/icons/arb-icon.png"}
              alt={"arb"}
              height={16}
              width={16}
            />
            <h1
              className={cn(
                aoenik_regular.className,
                "ty-title text-white-100"
              )}
            >
              Arbitrum
            </h1>

            <h1
              className={cn(
                aoenik_regular.className,
                "ty-subTitle text-white-50"
              )}
            >
              Arb
            </h1>
          </div>
        </>
      ),
      amount: 10,
      accumulated: (
        <>
          <h1 className={cn(aoenik_regular.className, "ty-descriptions")}>
            <span className="text-white-100">1.48 </span>
            <span className="text-white-50 uppercase">arb</span>
          </h1>
        </>
      ),
      totalValuation: (
        <>
          <h1 className={cn(aoenik_regular.className, "ty-descriptions")}>
            <span className="text-white-50">$ </span>
            <span className="text-white-100">37.24</span>
          </h1>
        </>
      ),
      pnl: (
        <>
          <div className="flex flex-wrap gap-2 items-center">
            <h1
              className={
                (aoenik_regular.className, "text-green-100 ty-descriptions")
              }
            >
              + 7.8%
            </h1>
            <h1 className={cn(aoenik_regular.className, "ty-descriptions")}>
              <span className="text-white-50">$ </span>
              <span className="text-white-100">2.90</span>
            </h1>
          </div>
        </>
      ),
      recurringCycle: (
        <div className="flex flex-wrap gap-2 items-center">
          <h1
            className={
              (aoenik_regular.className, "text-white-100 ty-descriptions")
            }
          >
            Daily
          </h1>
          <h1 className={cn(aoenik_regular.className, "ty-descriptions")}>
            <span className="text-white-100">18:00</span>

            <span className="text-white-50">PHT </span>
          </h1>
        </div>
      ),
      count: 3,
    },
    {
      coin: (
        <>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <path
                d="M15.7605 10.4353C14.6919 14.721 10.3507 17.3292 6.06401 16.2605C1.77906 15.192 -0.829473 10.851 0.23964 6.56559C1.30775 2.27938 5.64897 -0.329093 9.93442 0.739397C14.2209 1.80789 16.8292 6.14934 15.7605 10.4353Z"
                fill="#F7931A"
              />
              <path
                d="M11.5274 7.36031C11.6866 6.29582 10.8761 5.72358 9.76769 5.34183L10.1272 3.89984L9.24939 3.6811L8.89935 5.08508C8.66858 5.02758 8.43155 4.97333 8.19602 4.91959L8.54856 3.50635L7.67122 3.2876L7.31143 4.72908C7.12041 4.68558 6.93289 4.64259 6.75087 4.59734L6.75187 4.59284L5.54124 4.29059L5.30772 5.22808C5.30772 5.22808 5.95904 5.37733 5.94529 5.38658C6.30082 5.47533 6.36508 5.71057 6.35433 5.89707L5.94478 7.53981C5.96929 7.54606 6.00104 7.55506 6.03605 7.56906C6.00679 7.56181 5.97554 7.5538 5.94329 7.54605L5.36922 9.84729C5.32572 9.95529 5.21546 10.1173 4.96693 10.0558C4.97568 10.0685 4.32887 9.89653 4.32887 9.89653L3.89307 10.9013L5.03544 11.186C5.24796 11.2393 5.45623 11.295 5.66125 11.3475L5.29797 12.806L6.17481 13.0248L6.5346 11.5818C6.77412 11.6468 7.00665 11.7068 7.23417 11.7633L6.87564 13.1995L7.75348 13.4183L8.11677 11.9625C9.61367 12.2458 10.7393 12.1315 11.2131 10.7778C11.5949 9.68778 11.1941 9.05904 10.4065 8.64905C10.9801 8.5168 11.4121 8.13955 11.5274 7.36031ZM9.52166 10.1725C9.25038 11.2625 7.41494 10.6733 6.81988 10.5255L7.30193 8.59329C7.89699 8.74179 9.80519 9.03579 9.52166 10.1725ZM9.79319 7.34456C9.54566 8.33605 8.018 7.8323 7.52245 7.7088L7.9595 5.95633C8.45505 6.07982 10.051 6.31032 9.79319 7.34456Z"
                fill="white"
              />
            </svg>
            <h1
              className={cn(
                aoenik_regular.className,
                "ty-title text-white-100"
              )}
            >
              Bitcoin
            </h1>

            <h1
              className={cn(
                aoenik_regular.className,
                "ty-subTitle text-white-50"
              )}
            >
              BTC
            </h1>
          </div>
        </>
      ),
      amount: 25,
      accumulated: (
        <>
          <h1 className={cn(aoenik_regular.className, "ty-descriptions")}>
            <span className="text-white-100">0.0043 </span>
            <span className="text-white-50 uppercase">btc</span>
          </h1>
        </>
      ),
      totalValuation: (
        <>
          <h1 className={cn(aoenik_regular.className, "ty-descriptions")}>
            <span className="text-white-50">$ </span>
            <span className="text-white-100">78.40</span>
          </h1>
        </>
      ),
      pnl: (
        <>
          <div className="flex flex-wrap gap-2 items-center">
            <h1
              className={
                (aoenik_regular.className, "text-green-100 ty-descriptions")
              }
            >
              + 4.2%
            </h1>
            <h1 className={cn(aoenik_regular.className, "ty-descriptions")}>
              <span className="text-white-50">$ </span>
              <span className="text-white-100">3.29</span>
            </h1>
          </div>
        </>
      ),
      recurringCycle: (
        <div className="flex flex-wrap gap-2 items-center">
          <h1
            className={
              (aoenik_regular.className, "text-white-100 ty-descriptions")
            }
          >
            Weekly
          </h1>
          <h1 className={cn(aoenik_regular.className, "ty-descriptions")}>
            <span className="text-white-100">18:00</span>

            <span className="text-white-50">PHT </span>
          </h1>
        </div>
      ),
      count: 3,
    },
  ];

  const dropdownlist = [
    {
      name: "All Wallet",
    },
  ];
  return (
    <div className="hidden md:flex flex-col grow items-center justify-center p-4 md:p-8 gap-4 md:gap-8 border border-white-8 bg-black-100 rounded-2xl self-stretch lg:max-w-[1200px]">
      <div className="flex flex-wrap justify-between grow w-full items-center">
        <h1
          className={cn(
            aoenik_regular.className,
            "ty-h6 text-white-100 tracking-wider"
          )}
        >
          Active investments
        </h1>

        <SearchBar />
      </div>
      <Table className="text-white-100">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Coin</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead className="text-right">Accumulated</TableHead>
            <TableHead className="text-right">Total Valuation</TableHead>
            <TableHead className="text-right">Unrealized PNL</TableHead>
            <TableHead className="text-right">Recurring Cycle</TableHead>
            <TableHead className="text-right">Count</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {investment.map((data, index) => (
            <TableRow key={index}>
              {/* <TableCell className="font-medium">{data.coin}</TableCell> */}
              <TableCell>{data.coin}</TableCell>
              <TableCell className="text-right">{data.amount}</TableCell>
              <TableCell className="text-right">{data.accumulated}</TableCell>
              <TableCell className="text-right">
                {data.totalValuation}
              </TableCell>
              <TableCell className="text-right">{data.pnl}</TableCell>
              <TableCell className="text-right">
                {data.recurringCycle}
              </TableCell>
              <TableCell className="text-right">{data.count}</TableCell>
              <TableCell className="text-right flex gap-2 items-center justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.666504 14.5C0.666504 14.1318 0.964984 13.8334 1.33317 13.8334H14.6665C15.0347 13.8334 15.3332 14.1318 15.3332 14.5C15.3332 14.8682 15.0347 15.1667 14.6665 15.1667H1.33317C0.964984 15.1667 0.666504 14.8682 0.666504 14.5Z"
                    fill="#FEFEFE"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.66667 13.1667C2.29848 13.1667 2 12.8682 2 12.5V10.5C2 10.1318 2.29848 9.83337 2.66667 9.83337C3.03485 9.83337 3.33333 10.1318 3.33333 10.5V12.5C3.33333 12.8682 3.03485 13.1667 2.66667 13.1667Z"
                    fill="#FEFEFE"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.33317 10.5C4.96498 10.5 4.6665 10.2016 4.6665 9.83337V6.50004C4.6665 6.13185 4.96498 5.83337 5.33317 5.83337C5.70136 5.83337 5.99984 6.13185 5.99984 6.50004V9.83337C5.99984 10.2016 5.70136 10.5 5.33317 10.5Z"
                    fill="#FEFEFE"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.00016 8.50004C7.63196 8.50004 7.3335 8.20157 7.3335 7.83337V6.50004C7.3335 6.13185 7.63196 5.83337 8.00016 5.83337C8.36836 5.83337 8.66683 6.13185 8.66683 6.50004V7.83337C8.66683 8.20157 8.36836 8.50004 8.00016 8.50004Z"
                    fill="#FEFEFE"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.6667 8.49996C10.2985 8.49996 10 8.20149 10 7.83329V3.83329C10 3.4651 10.2985 3.16663 10.6667 3.16663C11.0349 3.16663 11.3333 3.4651 11.3333 3.83329V7.83329C11.3333 8.20149 11.0349 8.49996 10.6667 8.49996Z"
                    fill="#FEFEFE"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.3332 4.50004C12.965 4.50004 12.6665 4.20156 12.6665 3.83337V2.50004C12.6665 2.13185 12.965 1.83337 13.3332 1.83337C13.7014 1.83337 13.9998 2.13185 13.9998 2.50004V3.83337C13.9998 4.20156 13.7014 4.50004 13.3332 4.50004Z"
                    fill="#FEFEFE"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.5412 1.78702C10.6456 1.66661 9.49844 1.66662 8.03797 1.66663H7.9617C6.50125 1.66662 5.35413 1.66661 4.45852 1.78702C3.54075 1.91041 2.81258 2.16844 2.24044 2.74057C1.66832 3.3127 1.41029 4.04087 1.2869 4.95864C1.16649 5.85425 1.1665 7.00137 1.1665 8.46183V8.53809C1.1665 9.99856 1.16649 11.1457 1.2869 12.0413C1.41029 12.959 1.66832 13.6872 2.24044 14.2594C2.81258 14.8315 3.54075 15.0895 4.45852 15.2129C5.35413 15.3333 6.50124 15.3333 7.9617 15.3333H8.03797C9.49844 15.3333 10.6456 15.3333 11.5412 15.2129C12.4589 15.0895 13.1871 14.8315 13.7592 14.2594C14.3314 13.6872 14.5894 12.959 14.7128 12.0413C14.8332 11.1457 14.8332 9.99856 14.8332 8.53809V8.46183C14.8332 7.00136 14.8332 5.85425 14.7128 4.95864C14.5894 4.04087 14.3314 3.3127 13.7592 2.74057C13.1871 2.16844 12.4589 1.91041 11.5412 1.78702ZM8.6665 5.83329C8.6665 5.46511 8.36804 5.16663 7.99984 5.16663C7.63164 5.16663 7.33317 5.46511 7.33317 5.83329V7.83329H5.33317C4.96498 7.83329 4.6665 8.13176 4.6665 8.49996C4.6665 8.86816 4.96498 9.16663 5.33317 9.16663H7.33317V11.1666C7.33317 11.5348 7.63164 11.8333 7.99984 11.8333C8.36804 11.8333 8.6665 11.5348 8.6665 11.1666V9.16663H10.6665C11.0347 9.16663 11.3332 8.86816 11.3332 8.49996C11.3332 8.13176 11.0347 7.83329 10.6665 7.83329H8.6665V5.83329Z"
                    fill="#FEFEFE"
                  />
                </svg>
                <Image
                  src={"/icons/bitcoin-withdraw.png"}
                  alt={"withdraw"}
                  height={16}
                  width={16}
                  unoptimized
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ActiveInvestments;
