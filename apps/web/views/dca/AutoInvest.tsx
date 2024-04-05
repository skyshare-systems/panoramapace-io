import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { aoenik_regular } from "@/public/fonts";
import { ChevronDown } from "lucide-react";

const AutoInvest = () => {
  const holdings = [
    {
      coin: (
        <>
          <div className="flex flex-row items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <path
                d="M15.7605 10.4281C14.6919 14.7138 10.3507 17.322 6.06401 16.2533C1.77906 15.1848 -0.829473 10.8438 0.23964 6.55838C1.30775 2.27218 5.64897 -0.336295 9.93442 0.732194C14.2209 1.80068 16.8292 6.14214 15.7605 10.4281Z"
                fill="#F7931A"
              />
              <path
                d="M11.5279 7.35311C11.6871 6.28862 10.8765 5.71637 9.76818 5.33463L10.1277 3.89264L9.24987 3.67389L8.89984 5.07788C8.66906 5.02038 8.43203 4.96613 8.19651 4.91238L8.54905 3.49914L7.6717 3.2804L7.31192 4.72188C7.1209 4.67838 6.93338 4.63539 6.75136 4.59014L6.75236 4.58563L5.54173 4.28338L5.30821 5.22087C5.30821 5.22087 5.95953 5.37012 5.94577 5.37937C6.30131 5.46812 6.36557 5.70337 6.35481 5.88987L5.94527 7.5326C5.96977 7.53885 6.00153 7.54785 6.03654 7.56185C6.00728 7.55461 5.97603 7.5466 5.94378 7.53885L5.36971 9.84008C5.3262 9.94808 5.21595 10.1101 4.96742 10.0486C4.97617 10.0613 4.32935 9.88933 4.32935 9.88933L3.89355 10.8941L5.03593 11.1788C5.24845 11.2321 5.45672 11.2878 5.66174 11.3403L5.29846 12.7988L6.1753 13.0176L6.53509 11.5746C6.77461 11.6396 7.00714 11.6996 7.23466 11.7561L6.87613 13.1923L7.75396 13.411L8.11725 11.9553C9.61416 12.2386 10.7398 12.1243 11.2136 10.7706C11.5954 9.68058 11.1946 9.05184 10.407 8.64185C10.9806 8.5096 11.4126 8.13235 11.5279 7.35311ZM9.52215 10.1653C9.25087 11.2553 7.41543 10.6661 6.82036 10.5183L7.30242 8.58609C7.89748 8.73459 9.80568 9.02859 9.52215 10.1653ZM9.79368 7.33735C9.54615 8.32884 8.01849 7.8251 7.52294 7.7016L7.95999 5.94912C8.45554 6.07262 10.0515 6.30311 9.79368 7.33735Z"
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
            <p
              className={cn(
                aoenik_regular.className,
                "ty-subtitle text-white-50 uppercase"
              )}
            >
              btc
            </p>
          </div>
        </>
      ),
      network: (
        <>
          <div className="flex flex-row gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <path
                d="M15.7605 10.4281C14.6919 14.7138 10.3507 17.322 6.06401 16.2533C1.77906 15.1848 -0.829473 10.8438 0.23964 6.55838C1.30775 2.27218 5.64897 -0.336295 9.93442 0.732194C14.2209 1.80068 16.8292 6.14214 15.7605 10.4281Z"
                fill="#F7931A"
              />
              <path
                d="M11.5279 7.35311C11.6871 6.28862 10.8765 5.71637 9.76818 5.33463L10.1277 3.89264L9.24987 3.67389L8.89984 5.07788C8.66906 5.02038 8.43203 4.96613 8.19651 4.91238L8.54905 3.49914L7.6717 3.2804L7.31192 4.72188C7.1209 4.67838 6.93338 4.63539 6.75136 4.59014L6.75236 4.58563L5.54173 4.28338L5.30821 5.22087C5.30821 5.22087 5.95953 5.37012 5.94577 5.37937C6.30131 5.46812 6.36557 5.70337 6.35481 5.88987L5.94527 7.5326C5.96977 7.53885 6.00153 7.54785 6.03654 7.56185C6.00728 7.55461 5.97603 7.5466 5.94378 7.53885L5.36971 9.84008C5.3262 9.94808 5.21595 10.1101 4.96742 10.0486C4.97617 10.0613 4.32935 9.88933 4.32935 9.88933L3.89355 10.8941L5.03593 11.1788C5.24845 11.2321 5.45672 11.2878 5.66174 11.3403L5.29846 12.7988L6.1753 13.0176L6.53509 11.5746C6.77461 11.6396 7.00714 11.6996 7.23466 11.7561L6.87613 13.1923L7.75396 13.411L8.11725 11.9553C9.61416 12.2386 10.7398 12.1243 11.2136 10.7706C11.5954 9.68058 11.1946 9.05184 10.407 8.64185C10.9806 8.5096 11.4126 8.13235 11.5279 7.35311ZM9.52215 10.1653C9.25087 11.2553 7.41543 10.6661 6.82036 10.5183L7.30242 8.58609C7.89748 8.73459 9.80568 9.02859 9.52215 10.1653ZM9.79368 7.33735C9.54615 8.32884 8.01849 7.8251 7.52294 7.7016L7.95999 5.94912C8.45554 6.07262 10.0515 6.30311 9.79368 7.33735Z"
                fill="white"
              />
            </svg>
            <h1
              className={cn(
                aoenik_regular.className,
                "ty-descriptions text-white-100"
              )}
            >
              Bitcoin
            </h1>
          </div>
        </>
      ),
      price: 66_863.72,
      volume: 42_356_087_820,
      amount: (
        <>
          <div className="flex flex-col">
            <h1 className={cn(aoenik_regular.className, "text-white-100")}>
              0.0011056
            </h1>
            <p className={cn(aoenik_regular.className, "text-white-50")}>
              $ 73.92
            </p>
          </div>
        </>
      ),
      pnl: (
        <>
          <h1
            className={cn(
              aoenik_regular.className,
              "text-green-100 ty-descriptions"
            )}
          >
            + $2.55
          </h1>
        </>
      ),
    },
    {
      coin: (
        <>
          <div className="flex flex-row items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <circle cx="8" cy="8.4928" r="8" fill="#C2A633" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.35445 12.6777H8.11637H8.11645C8.11645 12.6777 11.9999 13.0084 11.9999 8.56017C11.9999 4.28439 8.45357 4.29956 7.76818 4.30249C7.75213 4.30256 7.73765 4.30262 7.72483 4.30262H5.35438V8.03337H4.38086V8.9472H5.35445V12.6777ZM6.91016 5.85062H7.99982C8.40738 5.85062 10.4578 6.01729 10.4611 8.59028C10.4643 11.1326 8.39704 11.13 8.06447 11.1296C8.06046 11.1296 8.05671 11.1296 8.05321 11.1296H6.91016V8.94709H8.62451V8.03325H6.91016V5.85062Z"
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
            <p
              className={cn(
                aoenik_regular.className,
                "ty-subtitle text-white-50 uppercase"
              )}
            >
              DOGE
            </p>
          </div>
        </>
      ),
      network: (
        <>
          <div className="flex flex-row gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <circle cx="8" cy="8.4928" r="8" fill="#C2A633" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.35445 12.6777H8.11637H8.11645C8.11645 12.6777 11.9999 13.0084 11.9999 8.56017C11.9999 4.28439 8.45357 4.29956 7.76818 4.30249C7.75213 4.30256 7.73765 4.30262 7.72483 4.30262H5.35438V8.03337H4.38086V8.9472H5.35445V12.6777ZM6.91016 5.85062H7.99982C8.40738 5.85062 10.4578 6.01729 10.4611 8.59028C10.4643 11.1326 8.39704 11.13 8.06447 11.1296C8.06046 11.1296 8.05671 11.1296 8.05321 11.1296H6.91016V8.94709H8.62451V8.03325H6.91016V5.85062Z"
                fill="white"
              />
            </svg>
            <h1
              className={cn(
                aoenik_regular.className,
                "ty-descriptions text-white-100"
              )}
            >
              Dogecoin
            </h1>
          </div>
        </>
      ),
      price: 0.1897,
      volume: 3_738_006_688,
      amount: (
        <>
          <div className="flex flex-col">
            <h1 className={cn(aoenik_regular.className, "text-white-100 ")}>
              399.27
            </h1>
            <p className={cn(aoenik_regular.className, "text-white-50")}>
              $ 75.74
            </p>
          </div>
        </>
      ),
      pnl: (
        <>
          <h1
            className={cn(
              aoenik_regular.className,
              "text-red-100 ty-descriptions"
            )}
          >
            - $3.23
          </h1>
        </>
      ),
    },
  ];

  const dropdownlist = [
    {
      name: "All Wallet",
    },
  ];
  return (
    <div className="hidden md:flex flex-col grow items-center justify-center p-4 md:p-8 gap-4 md:gap-8 border border-white-8 bg-black-100 rounded-2xl w-full md:min-w-[768px] lg:min-w-[1024px] xl:min-w-[1200px]">
      <div className="flex flex-wrap justify-between grow w-full items-center">
        <h1
          className={cn(
            aoenik_regular.className,
            "ty-h6 text-white-100 tracking-wider"
          )}
        >
          Auto-invest
        </h1>

        {/* <DropdownMenu>
          <DropdownMenuTrigger
            className={cn(
              aoenik_regular.className,
              "py-3 px-4 flex items-center gap-2 outline-none ty-title backdrop-blur-[8px] border border-white-16 rounded-lg uppercase text-white-100"
            )}
          >
            All Wallet{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
            >
              <path
                d="M9 4.99282C9 4.99282 6.79055 7.9928 6 7.9928C5.2094 7.9928 3 4.9928 3 4.9928"
                stroke="#FEFEFE"
                stroke-width="0.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="outline-none p-2 pb-3 border border-white-16 bg-black-100 rounded-xl">
            {dropdownlist.map((data, index) => (
              <DropdownMenuItem
                key={index}
                // onClick={() => setSelectedToken(data.acronym)}
                className="flex justify-between  p-2 items-center gap-2 rounded-[8px] hover:bg-white-4 backdrop-blur-md cursor-pointer"
              >
                <h1
                  className={
                    (aoenik_regular.className, "ty-title text-white-100")
                  }
                >
                  {data.name}
                </h1>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu> */}
      </div>
      <Table className="text-white-100">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Coin</TableHead>
            <TableHead>Network</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-right">Volume</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead className="text-right">Today’s PNL %</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {holdings.map((data, index) => (
            <TableRow key={index}>
              {/* <TableCell className="font-medium">{data.coin}</TableCell> */}
              <TableCell>{data.coin}</TableCell>
              <TableCell>{data.network}</TableCell>
              <TableCell className="text-right">${data.price}</TableCell>
              <TableCell className="text-right">${data.volume}</TableCell>
              <TableCell className="text-right">{data.amount}</TableCell>
              <TableCell className="text-right">{data.pnl}</TableCell>
              {/* <TableCell className="text-right">{data.coin}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AutoInvest;
