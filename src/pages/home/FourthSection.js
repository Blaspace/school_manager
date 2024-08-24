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
      ></span>
      <span
        style={{
          bottom: "200px",
          right: "10px",
        }}
      ></span>
      <div className="header">
        <div className="fourth-section">
          <div>
            <h1>
              We are always here
              <br /> for your backup
            </h1>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              sapiente dolores nemo? Vitae laudantium, ipsam neque natus dolor
              quod sunt debitis minus eligendi tenetur maiores eum blanditiis
              labore optio repellat!
            </p>
          </div>
          <ul>
            <li
              onClick={() =>
                first.height === "150px"
                  ? setFirst({ height: 0 })
                  : setFirst({ height: "150px" })
              }
            >
              <span>What are we all about?</span>
              <p style={first}>
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                sapiente dolores nemo? Vitae laudantium, ipsam neque natus dolor
                quod sunt debitis minus eligendi tenetur maiores eum blanditiis
                labore optio repellat! sapiente dolores nemo? Vitae laudantium,
                ipsam neque natus dolor quod sunt debitis minus eligendi tenetur
                maiores eum blanditiis labore optio repellat!
              </p>
            </li>
            <li
              onClick={() =>
                second.height === "150px"
                  ? setSecond({ height: 0 })
                  : setSecond({ height: "150px" })
              }
            >
              What is our policy on refund?
              <p style={second}>
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                sapiente dolores nemo? Vitae laudantium, ipsam neque natus dolor
                quod sunt debitis minus eligendi tenetur maiores eum blanditiis
                labore optio repellat! sapiente dolores nemo? Vitae laudantium,
                ipsam neque natus dolor quod sunt debitis minus eligendi tenetur
                maiores eum blanditiis labore optio repellat!
              </p>
            </li>
            <li
              onClick={() =>
                third.height === "150px"
                  ? setThid({ height: 0 })
                  : setThid({ height: "150px" })
              }
            >
              Why we stand out?
              <p style={third}>
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                sapiente dolores nemo? Vitae laudantium, ipsam neque natus dolor
                quod sunt debitis minus eligendi tenetur maiores eum blanditiis
                labore optio repellat! sapiente dolores nemo? Vitae laudantium,
                ipsam neque natus dolor quod sunt debitis minus eligendi tenetur
                maiores eum blanditiis labore optio repellat!
              </p>
            </li>
            <li
              style={{ border: "none" }}
              onClick={() =>
                fourth.height === "150px"
                  ? setFourth({ height: 0 })
                  : setFourth({ height: "150px" })
              }
            >
              How can i sponsor this app?
              <p style={fourth}>
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                sapiente dolores nemo? Vitae laudantium, ipsam neque natus dolor
                quod sunt debitis minus eligendi tenetur maiores eum blanditiis
                labore optio repellat! sapiente dolores nemo? Vitae laudantium,
                ipsam neque natus dolor quod sunt debitis minus eligendi tenetur
                maiores eum blanditiis labore optio repellat!
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
