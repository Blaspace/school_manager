/** @format */

import React, { useContext, useState } from "react";
import { AiFillSetting, AiOutlineHome, AiFillProfile } from "react-icons/ai";
import { FaChalkboardTeacher, FaMoneyBill, FaUsers } from "react-icons/fa";
import { IoCameraSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import SchoolContext from "../context/SchoolContext";
import ellips from "../public/Ellipse.png";
import Loading from "./Loading";

const SideBar = () => {
  const [loading, setLoading] = useState(false);
  const { school, setSchool } = useContext(SchoolContext);
  const handleUpload = (e) => {
    setLoading(true);
    console.log(e[0]);
    const formData = new FormData();
    formData.append("logo", e[0]);

    fetch(`${process.env.REACT_APP_APIURL}/school/logo`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: formData,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => setSchool({ ...school, logo: data.logo }))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };
  return (
    <div className="sidebar">
      <Loading loading={loading} />
      <header>
        <span style={school?.logo && { background: "transparent" }}>
          {school?.logo ? (
            <img src={school?.logo} alt={school?.schoolName} />
          ) : (
            <img src={ellips} alt="ellips" />
          )}
          <small>
            <input
              type="file"
              onChange={(e) => handleUpload(e.target.files)}
              accept="image"
            />
            <IoCameraSharp size={20} />
          </small>
        </span>
        <br />
        <p>{school?.schoolName}</p>
      </header>
      <ul>
        <NavLink
          to={"/dashboard"}
          id="navlink"
          className={({ isActive, isPending }) => {
            return isActive ? "active" : "domant";
          }}
        >
          <AiOutlineHome size={20} /> <span>Dashboard</span>
        </NavLink>
        <NavLink
          to={"/teachers"}
          id="navlink"
          className={({ isActive, isPending }) => {
            return isActive ? "active" : "domant";
          }}
        >
          <FaChalkboardTeacher size={20} /> <span>Teachers</span>
        </NavLink>
        <NavLink
          to={"/students"}
          id="navlink"
          className={({ isActive, isPending }) => {
            return isActive ? "active" : "domant";
          }}
        >
          <FaUsers size={20} />
          <span>Student/classes</span>
        </NavLink>
        <NavLink
          to={"/billing"}
          id="navlink"
          className={({ isActive, isPending }) => {
            return isActive ? "active" : "domant";
          }}
        >
          <FaMoneyBill size={20} /> <span>Billing</span>
        </NavLink>
        
      </ul>
    </div>
  );
};

export default SideBar;
