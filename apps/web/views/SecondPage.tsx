"use client";
import NotConnectedView from "@/components/not-connected-view";
import React from "react";
import { useAccount } from "wagmi";
import DCAPage from "./dca/DCAPage";

const SecondPage = () => {
  const { isConnected } = useAccount();
  return <>{!isConnected ? <NotConnectedView /> : <DCAPage />}</>;
};

export default SecondPage;
