import { createQR, encodeURL } from "@solana/pay";
//import QRCodeStyling from "@solana/qr-code-styling";
import { Keypair, PublicKey } from "@solana/web3.js";
import BigNumber from "bignumber.js";
import React, { useEffect } from "react";
import "./payment.css";

const AppointmentPaymentRequest: React.FC = () => {
  const walletKey = import.meta.env.VITE_WALLET_KEY;

  const datePrice = 3;
  //const [qrcodeState, setQrcodeState] = React.useState<QRCodeStyling | null>(null);
  useEffect(() => {
    const generatePaymentRequest = () => {
      const recipient = new PublicKey(walletKey); // Replace with your address
      const amount = new BigNumber(datePrice); // Payment amount in SOL
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
  }, []);

  return (
    <div className="payment-request">
      <h2>Payment Request</h2>
      <p>
        Please use a wallet like coinbase, phantom or other solana supported
        wallet to scan and pay
      </p>

      <h3>3 SOL</h3>
      <div id="qr-code-container"></div>
    </div>
  );
};
export default AppointmentPaymentRequest;
