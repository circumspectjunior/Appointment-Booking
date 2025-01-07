import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CalendlyEmbed from "../CalendlyEmbed/CalendlyEmbed";
import LocalizationDayjs from "../MyDatePicker/LocalizationDayjs";
import ShineBorder from "../ui/shine-border";
import WordPullUp from "../ui/word-pull-up";
import "./Appointtment.css";

interface FormData {
  name: string;
  address: string;
  email: string;
  phone: string;
  nationality: string;
  occupation: string;
  meeting: string;
  duration: string;
  complexion: string;
  height: string;
  nextOfKin: string;
  nextOfKinPhone: string;
}
const AppointmentForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    address: "",
    email: "",
    phone: "",
    nationality: "",
    occupation: "",
    meeting: "",
    duration: "",
    complexion: "",
    height: "",
    nextOfKin: "",
    nextOfKinPhone: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/appointments",
        formData
      );
      setSubmitted(true);
      alert("Appointment booked successfully!");
      console.log(response);
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("Failed to book appointment.");
    }
  };
  return (
    <section className="appointmentSection">
      <div className="formContainer">
        {" "}
        {submitted ? (
          <div className="submittedD">
            <div className="submittedDiv">
              {" "}
              <h2 className="text-slate-600">Form Sent Successfully</h2>{" "}
              <p>
                Please pick a date bellow and click on the payment button to
                confirm and pay for the appointment. You will be redirected to
                the payment page.
              </p>{" "}
            </div>
            <LocalizationDayjs />
            <CalendlyEmbed />
            <Link to="/appointmentPaymentPage" className="aPayButton">
              Go to Payment
            </Link>{" "}
          </div>
        ) : (
          <ShineBorder
            className=" shineB rounded-lg border bg-background md:shadow-xl"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            borderRadius={8}
            borderWidth={10}
          >
            <div className="preSubmitFom">
              {" "}
              <h1 className="text-slate-600 md:text-3xl  lg:text-5xl">
                <WordPullUp
                  className="tracking-[-0.02em]"
                  words="Book an Appointment"
                />
              </h1>{" "}
              <form onSubmit={handleSubmit}>
                {" "}
                <input
                  placeholder="Name"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />{" "}
                <input
                  placeholder="Email"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />{" "}
                <input
                  placeholder="Enter phone number"
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />{" "}
                <input
                  placeholder="Full address"
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />{" "}
                <input
                  placeholder="Nationality"
                  type="text"
                  id="nationality"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  required
                />{" "}
                <input
                  placeholder="Occupation"
                  type="text"
                  id="occupation"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  required
                />{" "}
                <input
                  placeholder="Meeting on dinner or lunch"
                  type="text"
                  id="meeting"
                  name="meeting"
                  value={formData.meeting}
                  onChange={handleChange}
                  required
                />{" "}
                <input
                  placeholder="Duration of meeting"
                  type="text"
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  required
                />{" "}
                <input
                  placeholder="Complexion"
                  type="text"
                  id="complexion"
                  name="complexion"
                  value={formData.complexion}
                  onChange={handleChange}
                  required
                />{" "}
                <input
                  placeholder="Height"
                  type="text"
                  id="height"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  required
                />{" "}
                <input
                  placeholder="Next of kin"
                  type="text"
                  id="nextOfKin"
                  name="nextOfKin"
                  value={formData.nextOfKin}
                  onChange={handleChange}
                  required
                />{" "}
                <input
                  placeholder="Next of kin phone number"
                  type="text"
                  id="nextOfKinPhone"
                  name="nextOfKinPhone"
                  value={formData.nextOfKinPhone}
                  onChange={handleChange}
                  required
                />{" "}
                <button className="w-48 m-auto bg-slate-800" type="submit">
                  Submit
                </button>{" "}
              </form>{" "}
            </div>
          </ShineBorder>
        )}{" "}
      </div>
    </section>
  );
};
export default AppointmentForm;
