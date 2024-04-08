import React, { useEffect, useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import * as web3 from "@solana/web3.js";
import * as walletAdapterWallets from "@solana/wallet-adapter-wallets";
import * as walletAdapterReact from "@solana/wallet-adapter-react";

const useBalance = () => {
  const [balance, setBalance] = useState<number>(0);

  const endpoint = web3.clusterApiUrl("devnet");

  const wallets = [new walletAdapterWallets.PhantomWalletAdapter()];

  const { connection } = useConnection();
  const { publicKey } = useWallet();

  useEffect(() => {
    const getInfo = async () => {
      if (connection && publicKey) {
        // we get the account info for the user's wallet data store and set the balance in our application's state
        const walletinfo = await connection.getAccountInfo(publicKey);
        setBalance(walletinfo!.lamports / web3.LAMPORTS_PER_SOL);
        console.log(walletinfo!.lamports);
      }
    };
    getInfo();
    // the code above will execute whenever these variables change in any way
  }, [connection, publicKey]);

  return { balance, endpoint, wallets };
};

export default useBalance;
