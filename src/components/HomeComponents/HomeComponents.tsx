import { useState } from "react";
import { Link } from "react-router-dom";
import FanCard from "../FanCard/FanCard";
import Meteors from "../ui/meteors";
import ShimmerButton from "../ui/shimmer-button";
import "./homeComp.css";
const HomeComponents: React.FC = () => {
  const [fanCardClicked, setFanCardClicked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleFanCardClick = () => {
    setFanCardClicked(true);
    setIsDisabled(true);
  };

  return (
    <div className="topDiv">
      {" "}
      <h1 className="intro bg-zinc-200">
        <Meteors /> Welcome to Our Website
      </h1>{" "}
      <main className="main">
        {" "}
        <div className="book">
          {" "}
          <h2>Book an Appointment</h2>
          <p>
            {" "}
            Click the button below to go to the page where you need to fill a
            quick form for booking an appointment with us.
          </p>
          <Link to="/formPage">
            {" "}
            <ShimmerButton className="bu">
              {" "}
              Go to Appointment Booking Form
            </ShimmerButton>{" "}
          </Link>{" "}
        </div>{" "}
        <div className="fanC">
          {" "}
          <h2>Buy Fan Cards</h2>{" "}
          <p>
            {" "}
            Click the button below to go to the page where you can buy fan
            cards.
          </p>{" "}
          <ShimmerButton
            className="bu"
            onClick={handleFanCardClick}
            disabled={isDisabled}
          >
            Buy Fan Card
          </ShimmerButton>{" "}
        </div>{" "}
        {fanCardClicked ? (
          <div>
            <FanCard />
          </div>
        ) : null}
      </main>{" "}
    </div>
  );
};
export default HomeComponents;
