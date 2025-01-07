import FanCardPaymentRequest from "@/components/CryptoPayment/FanCardPaymentRequest";
import WalletConnection from "@/components/CryptoPayment/WalletConnection";

const FanCardPaymentPage: React.FC = () => {
  return (
    <>
      {" "}
      <WalletConnection>
        {" "}
        <FanCardPaymentRequest />{" "}
      </WalletConnection>{" "}
    </>
  );
};

export default FanCardPaymentPage;
