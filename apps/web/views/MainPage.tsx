"use client";
import NotConnectedView from "@/components/not-connected-view";
import React from "react";
import DashboardPage from "./dashboard/DashboardPage";
import useMounted from "@/hooks/useMounted";
import { useWallet } from "@solana/wallet-adapter-react";

const MainPage = () => {
  const wallet = useWallet();

  const { hasMounted } = useMounted();

  if (!hasMounted) {
    return null;
  }

  return <>{!wallet.connected ? <NotConnectedView /> : <DashboardPage />}</>;
};

export default MainPage;
