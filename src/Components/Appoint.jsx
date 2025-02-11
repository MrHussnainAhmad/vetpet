import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./CSS/Appointment.css";
import Navbar from "./Navbar";

const Appointment = () => {
  const [formData, setFormData] = useState({
    petType: "",
    interest: "",
    name: "",
    phoneNumber: "",
    date: "",
    time: "",
    desiredLength: "",
  });
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");
    const formDataToSend = new FormData();
    
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });
    formDataToSend.append("access_key", "18253797-8d77-4ec8-aa8b-4b3f8a97e167");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });
      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setFormData({
          petType: "",
          interest: "",
          name: "",
          phoneNumber: "",
          date: "",
          time: "",
          desiredLength: "",
        });
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Submission Error", error);
      setResult("Error submitting form. Try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="appointment-container">
        <h1>Reliable Pet Hospital in Bahawalpur</h1>
        <p>Welcome to our trusted veterinary clinic...</p>

        <form onSubmit={handleSubmit} className="appointment-form">
          <h2>Book Your Appointment</h2>
          
          <label htmlFor="petType">Select Your Pet:</label>
          <select id="petType" name="petType" value={formData.petType} onChange={handleChange} required>
            <option value="">-- Select --</option>
            <option value="Dogs">Dogs</option>
            <option value="Cats">Cats</option>
            <option value="Cats">Birds</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="interest">Interested In:</label>
          <select id="interest" name="interest" value={formData.interest} onChange={handleChange} required>
            <option value="">-- Select --</option>
            <option value="Consultancy">Consultancy</option>
            <option value="Vaccination">Vaccination</option>
            <option value="Vaccination">Grooming</option>
            <option value="Vaccination">Boarding</option>
            <option value="Vaccination">Others</option>
          </select>

          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />

          <label htmlFor="date">Preferred Date:</label>
          <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />

          <label htmlFor="time">Preferred Time:</label>
          <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} required />

          <label htmlFor="desiredLength">Desired Length of Visit:</label>
          <select id="desiredLength" name="desiredLength" value={formData.desiredLength} onChange={handleChange} required>
            <option value="30mins">Undecided</option>
            <option value="30mins">30 Minutes</option>
            <option value="2hours">2 Hours</option>
            <option value="2hours">4 Hours</option>
            <option value="2hours">6 Hours</option>
            <option value="fullday">Full Day - 8 Hours +</option>
          </select>

          <button type="submit">Book Appointment</button>
          <span>{result}</span>
        </form>
      </div>
    </>
  );
};

export default Appointment;
