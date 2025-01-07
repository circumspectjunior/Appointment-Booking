// WalletConnection.tsx
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import React, { useMemo } from "react";
const WalletConnection: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);
  return (
    <ConnectionProvider endpoint="https://api.mainnet-beta.solana.com">
      {" "}
      <WalletProvider wallets={wallets} autoConnect>
        {" "}
        <WalletModalProvider>{children}</WalletModalProvider>{" "}
      </WalletProvider>{" "}
    </ConnectionProvider>
  );
};
export default WalletConnection;
