import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  const [meetingId, setMeetingId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/meeting/${meetingId}`);
  };

  return (
    <div className="home-container">
      <div className="form-container">
        <h1 className="form-heading">Welcome to Video Chat Demo!</h1>
        <form onSubmit={handleSubmit} className="meeting-form">
          <label className="form-label">Enter Meeting Code</label>
          <input
            type="text"
            required
            placeholder="Enter Meeting Code"
            value={meetingId}
            onChange={(e) => setMeetingId(e.target.value)}
            className="form-input"
          />
          <button className="form-button">Join Meeting</button>
        </form>
      </div>
    </div>
  );
};
