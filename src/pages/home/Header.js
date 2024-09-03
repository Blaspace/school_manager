/** @format */

import React from "react";
import FirstNav from "../../components/FirstNav";
import img from "../../public/schoolapp.PNG";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header-con">
      <span
        style={{
          top: "0",
          left: "0",
        }}
        data-aos="zoom-in"
        data-aos-duration="2000"
      ></span>
      <span
        style={{
          bottom: "200px",
          right: "10px",
        }}
        data-aos="zoom-in"
        data-aos-duration="2000"
      ></span>
      <div className="header">
        <FirstNav />
        <section>
          <button className="first-button">Get Your Free Consulting Now</button>
          <br />
          <br />
          <br />
          <h1>
            Manage your school
            <br /> easily with Statisda
          </h1>
          <br />
          <p>
            Statisda is a school management solution that offers
            <br /> a personalized portal to each type of user,
          </p>
          <br />
          <button className="btn" onClick={() => navigate("/signup/1")}>
            Get Started
          </button>
        </section>
        <br />
        <br />
        <div className="img" data-aos="fade-up" data-aos-duration="2000">
          <img src={img} alt="school" />
        </div>
      </div>
    </div>
  );
};

export default Header;
