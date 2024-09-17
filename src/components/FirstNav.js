/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

const FirstNav = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <div className="nav-con">
        <h3>Statisda</h3>
        <ul>
          <li>Home</li>
          <li>Pricing</li>
          <li>Use Cases</li>
          <li>Location</li>
          <li>FAQ</li>
          <li>Company</li>
        </ul>
        <button onClick={() => navigate("/login")}>Login</button>
      </div>
    </nav>
  );
};

export default FirstNav;
