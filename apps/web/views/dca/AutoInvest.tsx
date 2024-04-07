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
import SearchBar from "@/components/searchbar";
import Image from "next/image";
import ArrowIcon from "@/components/icons/arrow";

const AutoInvest = () => {
  const holdings = [
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
      price: "$ 1.4906",
      hrchange: 7.8,
      volume: "$ 414,588,144",
      marketcap: "$ 3,930,889,862",
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
      price: "$ 66,863.72",
      hrchange: 4.2,
      volume: "$ 42,356,087,820",
      marketcap: "$ 1,310,262,668,095",
    },
    {
      coin: (
        <>
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center p-[3.88px] rounded-full bg-[#375BD2]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="11"
                viewBox="0 0 10 11"
                fill="none"
              >
                <path
                  d="M4.90573 2.64203L7.38064 4.06275V6.91815L4.91271 8.34759L2.43954 6.93036V4.07671L4.90573 2.64203ZM4.90573 0.547607L3.99814 1.07121L1.52672 2.50589L0.619141 3.0295V7.98107L1.52672 8.50467L4.00163 9.92539L4.90922 10.449L5.8168 9.92539L8.28299 8.4942L9.19057 7.97059V3.01205L8.28299 2.48844L5.80982 1.07121L4.90224 0.547607H4.90573Z"
                  fill="white"
                />
              </svg>
            </div>

            <h1
              className={cn(
                aoenik_regular.className,
                "ty-title text-white-100"
              )}
            >
              Chainlink
            </h1>

            <h1
              className={cn(
                aoenik_regular.className,
                "ty-subTitle text-white-50"
              )}
            >
              LINK
            </h1>
          </div>
        </>
      ),
      price: "$ 66,863.72",
      hrchange: 4.2,
      volume: "$ 42,356,087,820",
      marketcap: "$ 1,310,262,668,095",
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
              <circle cx="8" cy="8.5" r="8" fill="#C2A633" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.35445 12.685H8.11637H8.11645C8.11645 12.685 11.9999 13.0157 11.9999 8.56744C11.9999 4.29166 8.45357 4.30682 7.76818 4.30975C7.75213 4.30982 7.73765 4.30988 7.72483 4.30988H5.35438V8.04063H4.38086V8.95447H5.35445V12.685ZM6.91016 5.85789H7.99982C8.40738 5.85789 10.4578 6.02455 10.4611 8.59754C10.4643 11.1399 8.39704 11.1373 8.06447 11.1368C8.06046 11.1368 8.05671 11.1368 8.05321 11.1368H6.91016V8.95435H8.62451V8.04051H6.91016V5.85789Z"
                fill="white"
              />
            </svg>

            <h1
              className={cn(
                aoenik_regular.className,
                "ty-title text-white-100"
              )}
            >
              Dogecoin
            </h1>

            <h1
              className={cn(
                aoenik_regular.className,
                "ty-subTitle text-white-50"
              )}
            >
              DOGE
            </h1>
          </div>
        </>
      ),
      price: "$ 0.1897",
      hrchange: -9.3,
      volume: "$ 3,738,006,688",
      marketcap: "$ 26,884,088,767",
    },
    {
      coin: (
        <>
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center p-[3.88px] rounded-full bg-[#00EF8B]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="9"
                viewBox="0 0 10 9"
                fill="none"
              >
                <path
                  d="M8.19902 3.27075H6.22949V5.24028H8.19902V3.27075Z"
                  fill="white"
                />
                <path
                  d="M4.25973 5.98059C4.25973 6.38567 3.92449 6.72091 3.51941 6.72091C3.11433 6.72091 2.77909 6.38567 2.77909 5.98059C2.77909 5.57551 3.11433 5.24028 3.51941 5.24028H4.25973V3.27075H3.51941C2.02481 3.27075 0.80957 4.48599 0.80957 5.98059C0.80957 7.4752 2.02481 8.69044 3.51941 8.69044C5.01402 8.69044 6.22925 7.4752 6.22925 5.98059V5.24028H4.25973V5.98059Z"
                  fill="white"
                />
                <path
                  d="M6.22929 3.27075H4.25977V5.24028H6.22929V3.27075Z"
                  fill="#00EF8B"
                />
                <path
                  d="M6.96961 2.27909H9.19056V0.30957H6.96961C5.475 0.30957 4.25977 1.52481 4.25977 3.01941V3.27084H6.22929V3.01941C6.22929 2.61433 6.56453 2.27909 6.96961 2.27909Z"
                  fill="white"
                />
              </svg>
            </div>

            <h1
              className={cn(
                aoenik_regular.className,
                "ty-title text-white-100"
              )}
            >
              Flow
            </h1>

            <h1
              className={cn(
                aoenik_regular.className,
                "ty-subTitle text-white-50"
              )}
            >
              FLOW
            </h1>
          </div>
        </>
      ),
      price: "$ 1.2150",
      hrchange: 7.1,
      volume: "$ 60,487,031",
      marketcap: "$ 1,790,817,842",
    },
  ];

  return (
    <div className="hidden md:flex flex-col grow items-center justify-center p-4 md:p-8 gap-4 md:gap-8 border border-white-8 bg-black-100 rounded-2xl self-stretch md:min-w-[768px] lg:min-w-[1024px] xl:min-w-[1200px]">
      <div className="flex flex-wrap justify-between grow w-full items-center">
        <h1
          className={cn(
            aoenik_regular.className,
            "ty-h6 text-white-100 tracking-wider"
          )}
        >
          Auto-invest
        </h1>

        <SearchBar />
      </div>
      <Table className="text-white-100">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Coin</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-right">24hr Change</TableHead>
            <TableHead className="text-right">Volume</TableHead>
            <TableHead className="text-right">Market Cap</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {holdings.map((data, index) => (
            <TableRow key={index}>
              <TableCell>{data.coin}</TableCell>
              <TableCell
                className={cn(
                  aoenik_regular.className,
                  "text-right text-white-100 ty-descriptions"
                )}
              >
                {data.price}
              </TableCell>
              <TableCell
                className={cn(
                  aoenik_regular.className,
                  `text-right ty-descriptions flex gap-2 items-center justify-end ${data.hrchange > 0 ? "text-green-100" : "text-red-100"}`
                )}
              >
                <h1>
                  {data.hrchange > 0 ? "+ " : " "}
                  {data.hrchange}
                </h1>
                <ArrowIcon
                  className={data.hrchange > 0 ? "rotate-0" : "rotate-180"}
                  color={data.hrchange > 0 ? "#2FD520" : "#ED3556"}
                />
              </TableCell>
              <TableCell
                className={cn(
                  aoenik_regular.className,
                  "text-right ty-descriptions ty-white-100"
                )}
              >
                {data.volume}
              </TableCell>
              <TableCell
                className={cn(
                  aoenik_regular.className,
                  "text-right ty-descriptions text-white-50"
                )}
              >
                {data.marketcap}
              </TableCell>

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
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AutoInvest;
