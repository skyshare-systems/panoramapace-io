import { cn, shortenAddress } from "@/lib/utils";
import { aoenik_regular } from "@/public/fonts";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import CopyIcon from "@/components/icons/copy-icon";

import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import * as web3 from "@solana/web3.js";
import * as walletAdapterWallets from "@solana/wallet-adapter-wallets";
import * as walletAdapterReact from "@solana/wallet-adapter-react";
import EditIcon from "@/components/icons/edit-icon";
import XIcon from "@/components/icons/x-icon";
import AddWalletIcon from "@/components/icons/add-wallet";

const ListExchanges = () => {
  // const wallet = useWallet();
  // const { connection } = useConnection();

  // const [copyAddress, setCopyAddress] = useState("");

  const exchanges = [
    {
      name: "KevinHCX",
      address: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
          >
            <path
              d="M1 3.5L4.45651 5.45849C5.7308 6.1805 6.2692 6.1805 7.5435 5.45849L11 3.5"
              stroke="#FEFEFE"
              stroke-width="0.75"
              stroke-linejoin="round"
            />
            <path
              d="M1.00789 7.2378C1.04057 8.7706 1.05692 9.53695 1.62248 10.1047C2.18804 10.6724 2.97517 10.6922 4.54942 10.7317C5.51965 10.7561 6.48035 10.7561 7.4506 10.7317C9.02485 10.6922 9.81195 10.6724 10.3776 10.1047C10.9431 9.53695 10.9594 8.7706 10.9921 7.2378C11.0026 6.74495 11.0026 6.25505 10.9921 5.7622C10.9594 4.22943 10.9431 3.46305 10.3776 2.89533C9.81195 2.32762 9.02485 2.30784 7.4506 2.26829C6.48035 2.24391 5.51965 2.24391 4.54941 2.26828C2.97516 2.30783 2.18804 2.32761 1.62248 2.89533C1.05691 3.46304 1.04057 4.22943 1.00788 5.7622C0.99737 6.25505 0.997375 6.74495 1.00789 7.2378Z"
              stroke="#FEFEFE"
              stroke-width="0.75"
              stroke-linejoin="round"
            />
          </svg>{" "}
          k***a@gmail.com
        </>
      ),
      image: "/icons/binance-icon.png",
    },
    {
      name: "kevin.sol",
      address: "12i41...a95hv",
      image: "/icons/coins-icon.png",
    },
    {
      name: "steven.sol",
      address: "ape13...9vade",
      image: "/icons/okx-icon-v2.png",
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-2">
      {/* {wallet.map((data, index) => {
        return ( */}
      {exchanges.map((data, index) => {
        return (
          <div
            key={index}
            className="p-4 rounded-lg flex flex-col gap-4 items-start justify-start min-w-[256.8px] min-h-[66px] border border-white-4 bg-black-100 self-stretch"
          >
            <div className="flex flex-wrap justify-between items-center gap-2 w-full">
              <h1
                className={cn(
                  aoenik_regular.className,
                  "ty-subtext text-white-50"
                )}
              >
                Exchange {index + 1}
              </h1>

              <div className="flex items-center gap-2">
                <button className="hover:scale-125 active:scale-95 duration-200 hover:opacity-100 opacity-50">
                  <EditIcon />
                </button>
                <button className="hover:scale-125 active:scale-95 duration-200 hover:opacity-100 opacity-50">
                  <XIcon />
                </button>
              </div>
            </div>

            <div className="flex flex-row gap-2 items-start justify-start">
              <div className="p-1 bg-white-4 rounded-lg flex justify-center items-center">
                <Image
                  src={data.image}
                  alt={data.image}
                  height={16}
                  width={16}
                  unoptimized
                />
                {/* <Image
                      src={"/icons/solana.png"}
                      alt={"solana"}
                      height={16}
                      width={16}
                      unoptimized
                    /> */}
              </div>

              <div className="flex flex-col gap-1">
                <h1
                  className={cn(
                    aoenik_regular.className,
                    "ty-title text-white-100"
                  )}
                >
                  {data.name}{" "}
                </h1>

                <div className="flex flex-wrap items-center gap-2">
                  <p className={cn(aoenik_regular.className, "text-white-50")}>
                    {data.address}{" "}
                  </p>

                  <button
                    onClick={() => {
                      //   navigator.clipboard.writeText(String(publicKey?.toJSON()));
                    }}
                    className="hover:scale-125 active:scale-95 duration-200 hover:opacity-100 opacity-50"
                  >
                    <CopyIcon />
                  </button>

                  {/* <button className="hover:scale-125 active:scale-95 duration-200 hover:opacity-100 opacity-50">
                        <ArrowUpRight />
                      </button> */}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="flex flex-col justify-center items-center gap-2 py-4 px-8 bg-black-100 border border-white-8 rounded-lg self-stretch">
        <AddWalletIcon />
        <h1 className={cn(aoenik_regular.className, "ty-title text-white-100")}>
          Add wallet
        </h1>
      </div>
    </div>
  );
};

export default ListExchanges;
