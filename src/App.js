// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css";
import Appointment from "./Components/Appoint";
import Consult from "./Components/Consult";
import Feed from "./Components/Feed";
import Location from "./Components/Location";
import Services from "./Components/Services";
import OurTeam from "./Components/OutTeam";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/appointments" element={<Appointment />} />
          <Route path="/consult" element={<Consult />} />
          <Route path="/feeds" element={<Feed />} />
          <Route path="/location" element={<Location />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ourteam" element={<OurTeam />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
