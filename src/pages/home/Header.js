/** @format */

import React from "react";
import FirstNav from "../../components/FirstNav";
import img from '../../public/schoolapp.PNG'
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className="header-con">
      <span
        style={{
          top: "0",
          left: "0",
        }}
      ></span>
      <span
        style={{
          bottom: "200px",
          right: "10px",
        }}
      ></span>
      <div className="header">
        <FirstNav />
        <section>
          <button className="first-button">Get Your Free Consulting Now</button>
          <br />
          <br />
          <br />
          <h1>
            Manage your team
            <br /> easily with task man
          </h1>
          <br />
          <p>
            Statisdaa is a school management solution that offers<br/> a personalized
            portal to each type of user,
          </p>
          <br/>
          <button className="btn" onClick={()=>navigate('/signup')}>Get Started</button>
        </section>
        <br/>
        <br/>
        <div className="img">
            <img src={img} alt="school"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
