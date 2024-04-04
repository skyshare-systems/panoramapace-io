"use client";
import { cn } from "@/lib/utils";
import { aoenik_regular } from "@/public/fonts";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import WalletIcon from "./icons/wallet-icon";

export const ConnectWallet = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");
        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    type="button"
                    className="rounded-lg py-3 px-4 hover:opacity-75 duration-200 active:scale-y-95 button-gradient"
                  >
                    <h1
                      className={cn(
                        aoenik_regular.className,
                        "flex items-center gap-2 bg-primary-100 rounded-xl ty-title text-white-100 "
                      )}
                    >
                      <WalletIcon />
                      Connect
                      <span className="hidden sm:block">Wallet</span>
                    </h1>
                  </button>
                );
              }
              if (chain.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    type="button"
                    className="rounded-2xl border border-red-32 bg-red-32 p-1 hover:opacity-75 duration-200 active:scale-y-95"
                  >
                    <h1
                      className={cn(
                        aoenik_regular.className,
                        "flex items-center gap-2 py-3 px-4 bg-red-100 rounded-xl ty-title text-white-100 "
                      )}
                    >
                      {/* <WarningIcon /> */}
                      Wrong network
                    </h1>
                  </button>
                );
              }
              return (
                <div style={{ display: "flex", gap: 12 }}>
                  {/* <button
                    onClick={openChainModal}
                    style={{ display: "flex", alignItems: "center" }}
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: "hidden",
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? "Chain icon"}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button> */}

                  <button
                    onClick={openAccountModal}
                    type="button"
                    className="rounded-lg py-3 px-4 hover:opacity-75 duration-200 active:scale-y-95 button-gradient"
                  >
                    <h1
                      className={cn(
                        aoenik_regular.className,
                        "flex items-center gap-2 bg-primary-100 rounded-xl ty-title text-white-100 "
                      )}
                    >
                      <WalletIcon />
                      {account.displayName}
                    </h1>
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
