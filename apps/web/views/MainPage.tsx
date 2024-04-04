"use client";
import NotConnectedView from "@/components/not-connected-view";
import React from "react";
import { useAccount } from "wagmi";
import DashboardPage from "./dashboard/DashboardPage";

const MainPage = () => {
  const { isConnected } = useAccount();
  return <>{!isConnected ? <NotConnectedView /> : <DashboardPage />}</>;
};

export default MainPage;
