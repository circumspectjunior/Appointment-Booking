import AppointmentPaymentRequest from "@/components/CryptoPayment/AppointmentPaymentRequest";
import WalletConnection from "@/components/CryptoPayment/WalletConnection";

const AppointmentPaymentPage: React.FC = () => {
  return (
    <>
      <WalletConnection>
        <AppointmentPaymentRequest />
      </WalletConnection>
    </>
  );
};

export default AppointmentPaymentPage;
