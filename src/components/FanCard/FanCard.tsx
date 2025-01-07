import usePlan from "@/hooks/usePlan";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MagicCard } from "../ui/magic-card";
import ShimmerButton from "../ui/shimmer-button";
import "./FanCard.css";

const FanCard: React.FC = () => {
  const planPrice = {
    Standard: 4.91,
    Plus: 9.82,
    Premium: 24.52,
    Elite: 49.05,
  };
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const { selectedPlanPrice, setSelectedPlanPrice } = usePlan();

  const handleCardClick = (plan: string) => {
    setSelectedPlan(plan);
    if (plan === "Standard") {
      setSelectedPlanPrice(planPrice.Standard);
    } else if (plan === "Plus") {
      setSelectedPlanPrice(planPrice.Plus);
    } else if (plan === "Premium") {
      setSelectedPlanPrice(planPrice.Premium);
    } else {
      setSelectedPlanPrice(planPrice.Elite);
    }
  };
  if (selectedPlan) {
    return (
      <div className="message-container">
        {" "}
        <h1>Congratulations!</h1>{" "}
        <p>
          You have selected the {selectedPlan} plan which cost{" "}
          {selectedPlanPrice} SOL.
        </p>{" "}
        <Link to="/fanCardPaymentPage" className="link">
          <ShimmerButton>Proceed to Payment</ShimmerButton>
        </Link>{" "}
      </div>
    );
  }
  return (
    <div className="card-container">
      {" "}
      <div className="card" onClick={() => handleCardClick("Standard")}>
        {" "}
        <MagicCard className="magic-card">
          <h2>Standard Plan</h2> <p>{`${planPrice.Standard} SOL`}</p>{" "}
        </MagicCard>
      </div>{" "}
      <div className="card" onClick={() => handleCardClick("Plus")}>
        {" "}
        <MagicCard className="magic-card">
          <h2>Plus Plan</h2> <p>{`${planPrice.Plus} SOL`}</p>{" "}
        </MagicCard>
      </div>{" "}
      <div className="card" onClick={() => handleCardClick("Premium")}>
        {" "}
        <MagicCard className="magic-card">
          <h2>Premium Plan</h2> <p>{`${planPrice.Premium} SOL`}</p>{" "}
        </MagicCard>
      </div>{" "}
      <div className="card" onClick={() => handleCardClick("Elite")}>
        {" "}
        <MagicCard className="magic-card">
          <h2>Elite Plan</h2> <p>{`${planPrice.Elite} SOL`}</p>{" "}
        </MagicCard>
      </div>{" "}
    </div>
  );
};
export default FanCard;
