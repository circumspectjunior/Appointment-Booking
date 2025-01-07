import usePlan from "@/hooks/usePlan";
import { createQR, encodeURL } from "@solana/pay";
//import QRCodeStyling from "@solana/qr-code-styling";
import { Keypair, PublicKey } from "@solana/web3.js";
import BigNumber from "bignumber.js";
import * as dotenv from "dotenv";
import React, { useEffect } from "react";
import "./payment.css";
dotenv.config();

const FanCardPaymentRequest: React.FC = () => {
  const { selectedPlanPrice } = usePlan();

  const walletKey = import.meta.env.VITE_WALLET_KEY;

  console.log(walletKey);

  console.log("Environment Variables:", process.env);
  if (!walletKey) {
    throw new Error(
      "Solana wallet key is not defined in the environment variables"
    );
  }

  console.log("Solana Wallet Key:" + walletKey);
  //const [qrcodeState, setQrcodeState] = React.useState<QRCodeStyling | null>(null);
  try {
    useEffect(() => {
      const generatePaymentRequest = () => {
        const recipient = new PublicKey(walletKey); // Replace with your address
        const amount = new BigNumber(selectedPlanPrice); // Payment amount in SOL
        const reference = Keypair.generate().publicKey;
        const paymentURL = encodeURL({
          recipient,
          amount,
          reference,
          label: "Your Business Name",
          message: "Thank you for your payment!",
        });

        const qrCode = createQR(paymentURL, 256);

        const qrCodeContainer = document.getElementById("qr-code-container");
        if (qrCodeContainer) {
          qrCode.append(qrCodeContainer);
        }
      };
      generatePaymentRequest();
    }, [selectedPlanPrice, walletKey]);
  } catch (error) {
    console.error("Error generating payment request:", error);
  }

  if (selectedPlanPrice == 0) {
    return (
      <div className="payment-request">
        <h2>Please go back and reselect card</h2>
        <p>The page has been refreshed please go back and select a card</p>
      </div>
    );
  }

  return (
    <div className="payment-request">
      <h2>Payment Request</h2>

      <p>
        Please use a wallet like coinbase, phantom or other solana supported
        wallet to scan and pay
      </p>

      <h3>{selectedPlanPrice} SOL</h3>
      <div id="qr-code-container"></div>
    </div>
  );
};
export default FanCardPaymentRequest;
