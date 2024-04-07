"use client";
import NotConnectedView from "@/components/not-connected-view";
import React from "react";
import DCAPage from "./dca/DCAPage";
import { useWallet } from "@solana/wallet-adapter-react";

const SecondPage = () => {
  const wallet = useWallet();

  return <>{!wallet.connected ? <NotConnectedView /> : <DCAPage />}</>;
};

export default SecondPage;
