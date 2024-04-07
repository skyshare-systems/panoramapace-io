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

const ListWallet = () => {
  // const wallet = useWallet();
  // const { connection } = useConnection();

  // const [copyAddress, setCopyAddress] = useState("");

  const { publicKey } = useWallet();

  // const wallet = [
  //   {
  //     name: "darkzuckerberg.sui",
  //     address: "1Hd8Kc...opXv",
  //     network: "sui",
  //   },
  //   {
  //     name: "kevin.sol",
  //     address: "V9Zs6g...CDPH",
  //     network: "sol",
  //   },
  //   {
  //     name: "steven.sol",
  //     address: "WLdYz6...asE0",
  //     network: "sol",
  //   },
  //   {
  //     name: "aurelion.sol",
  //     address: "J7cPoJ...a430",
  //     network: "sol",
  //   },
  // ];

  return (
    <div className="flex flex-wrap items-center gap-2">
      {/* {wallet.map((data, index) => {
        return ( */}
      <div
        // key={index}
        className="p-4 rounded-lg flex flex-col gap-4 items-start justify-start min-w-[256.8px] min-h-[66px] border border-white-4 bg-black-100"
      >
        <div className="flex flex-wrap justify-between items-center gap-2 w-full">
          <h1
            className={cn(aoenik_regular.className, "ty-subtext text-white-50")}
          >
            Wallet 1
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
            {/* <Image
                  src={
                    data.network === "solana"
                      ? "/icons/solana.png"
                      : "/icons/sui.png"
                  }
                  alt={data.network === "solana" ? "solana" : "sui"}
                  height={16}
                  width={16}
                  unoptimized
                /> */}
            <Image
              src={"/icons/solana.png"}
              alt={"solana"}
              height={16}
              width={16}
              unoptimized
            />
          </div>

          <div className="flex flex-col gap-1">
            <h1
              className={cn(
                aoenik_regular.className,
                "ty-title text-white-100"
              )}
            >
              {/* {data.name}{" "} */}
            </h1>

            <div className="flex flex-wrap items-center gap-2">
              <p className={cn(aoenik_regular.className, "text-white-50")}>
                {/* {data.address}{" "} */}

                {String(shortenAddress(publicKey?.toJSON()))}
              </p>

              <button
                onClick={() => {
                  navigator.clipboard.writeText(String(publicKey?.toJSON()));
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

      <div className="flex flex-col justify-center items-center gap-2 py-4 px-8 bg-black-100 border border-white-8 rounded-lg self-stretch">
        <AddWalletIcon />
        <h1 className={cn(aoenik_regular.className, "ty-title text-white-100")}>
          Add wallet
        </h1>
      </div>
    </div>
  );
};

export default ListWallet;
