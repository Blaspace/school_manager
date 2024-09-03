/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FourthSection = () => {
  const navigate = useNavigate();
  const [first, setFirst] = useState({ height: 0 });
  const [second, setSecond] = useState({ height: 0 });
  const [third, setThid] = useState({ height: 0 });
  const [fourth, setFourth] = useState({ height: 0 });

  return (
    <div className="fourth-section-con">
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
        <div className="fourth-section">
          <div data-aos="fade-right" data-aos-duration="1500">
            <h1>
              We are always here
              <br /> for your backup
            </h1>
            <br />
            <p>
              Our mission is to bridge the gap between technology and education
              by providing a comprehensive school management solution that
              enhances communication, streamlines administrative tasks, and
              fosters a collaborative learning environment.
            </p>
          </div>
          <ul>
            <li
              onClick={() => {
                if (first.height === "150px") {
                  setFirst({ height: 0 });
                } else {
                  setFirst({ height: "150px" });
                  setSecond({ height: 0 });
                  setThid({ height: 0 });
                  setFourth({ height: 0 });
                }
              }}
            >
              <span>What is Statisda</span>
              <p style={first}>
                <br />
                Statisda is a cloud-based school management platform designed to
                streamline administrative tasks, enhance communication, and
                improve the overall educational experience for schools,
                teachers, and students.
              </p>
            </li>
            <li
              onClick={() => {
                if (second.height === "150px") {
                  setSecond({ height: 0 });
                } else {
                  setFirst({ height: 0 });
                  setSecond({ height: "150px" });
                  setThid({ height: 0 });
                  setFourth({ height: 0 });
                }
              }}
            >
              Can I customize the platform for my school’s needs?
              <p style={second}>
                <br />
                Absolutely! Statisda is designed to be flexible. Schools can
                customize billing processes, manage student and teacher data,
                and tailor notifications according to their specific
                requirements.
              </p>
            </li>
            <li
              onClick={() => {
                if (third.height === "150px") {
                  setThid({ height: 0 });
                } else {
                  setFirst({ height: 0 });
                  setSecond({ height: 0 });
                  setThid({ height: "150px" });
                  setFourth({ height: 0 });
                }
              }}
            >
              What can teachers do on the platform?
              <p style={third}>
                <br />
                Teachers can upload student results, share study materials, send
                notifications, and receive feedback from students. It’s a
                comprehensive tool that supports teachers in managing their
                classroom activities efficiently.
              </p>
            </li>
            <li
              style={{ border: "none" }}
              onClick={() => {
                if (fourth.height === "150px") {
                  setFourth({ height: 0 });
                } else {
                  setFirst({ height: 0 });
                  setSecond({ height: 0 });
                  setThid({ height: 0 });
                  setFourth({ height: "150px" });
                }
              }}
            >
              What features are available for students?
              <p style={fourth}>
                <br />
                Students can check their results, make payments, and download
                study materials through a user-friendly portal. They also
                receive important notifications directly from their teachers and
                the school administration.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
