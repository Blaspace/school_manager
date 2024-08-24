/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SecondSection = () => {
  const [password, setPassword] = useState();
  const [conPassword, setConPassword] = useState();
  const navigate = useNavigate();

  const handleNext = () => {
    if (password === conPassword) {
      const i = localStorage.getItem("school");
      if (i && i !== "undifined") {
        localStorage.setItem(
          "school",
          JSON.stringify({ ...JSON.parse(i), password })
        );
        navigate("../../signup/3");
      } else {
        navigate("../../signup/1");
      }
    } else {
      alert("Your password must be thesame as your confirm password");
    }
  };
  return (
    <>
      <div className="signup-right">
        <h1>Welcome, create your school account</h1>
        <br />
        <br />
        <br />
        <form onSubmit={(e) => e.preventDefault()}>
          <br />
          <br />
          <p>
            It is our great pleasure to have
            <br /> you on board
          </p>
          <br />
          <br />
          <input
            type="password"
            placeholder="Choose a password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Confirm password"
            required
            onChange={(e) => setConPassword(e.target.value)}
          />
          <br />
          <br />
          <button onClick={handleNext}>Next</button>
          <br />
          <p>
            <small>Already have an account?</small>{" "}
            <b
              style={{ color: "#2d88d4", cursor: "pointer" }}
              onClick={() => navigate("../../login")}
            >
              Login
            </b>
          </p>
          <br />
          <br />
        </form>
        <br />
      </div>
      <div className="signup-left"></div>
    </>
  );
};
export default SecondSection;
