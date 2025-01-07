import React from "react";
import { InlineWidget } from "react-calendly";
const CalendlyEmbed: React.FC = () => {
  return (
    <div
      style={{
        height: "600px",
        width: "100%",
        backgroundColor: "#8b8888",
      }}
    >
      {" "}
      <InlineWidget
        url="https://calendly.com/giftojo200047/bookit"
        styles={{ height: "100%", width: "100%" }}
        pageSettings={{
          backgroundColor: "ffffff",
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: "00a2ff",
          textColor: "4d5055",
        }}
        prefill={{
          email: "test@test.com",
          firstName: "Jon",
          lastName: "Snow",
          name: "Jon Snow",
          smsReminderNumber: "+1234567890",
          guests: ["janedoe@example.com", "johndoe@example.com"],

          date: new Date(Date.now() + 86400000),
        }}
      />{" "}
    </div>
  );
};
export default CalendlyEmbed;
