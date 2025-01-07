import * as dotenv from "dotenv";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PlanProvider } from "./context/PlanProvider";
import AppointmentPaymentPage from "./pages/AppointmentPaymentPage";
import FanCardPage from "./pages/FanCardPage";
import FanCardPaymentPage from "./pages/FanCardPaymentPage";
import FormPage from "./pages/FormPage";
import HomePage from "./pages/HomePage";
dotenv.config();

const App: React.FC = () => {
  return (
    <>
      <PlanProvider>
        <BrowserRouter>
          {" "}
          <Routes>
            {" "}
            <Route path="/" element={<HomePage />} />
            <Route path="/formPage" element={<FormPage />} />
            <Route path="/formCardPage" element={<FanCardPage />} />
            <Route
              path="/fanCardPaymentPage"
              element={<FanCardPaymentPage />}
            />
            <Route
              path="/appointmentPaymentPage"
              element={<AppointmentPaymentPage />}
            />
          </Routes>
        </BrowserRouter>
      </PlanProvider>
    </>
  );
};

export default App;
