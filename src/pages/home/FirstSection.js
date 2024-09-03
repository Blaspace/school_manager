/** @format */

import React from "react";
import { BsPhone, BsPhoneLandscape } from "react-icons/bs";
import { FaClock } from "react-icons/fa";
import { PiFileHtmlLight } from "react-icons/pi";

function FirstSection() {
  return (
    <section className="first-section-con">
      <div className="first-section">
        <div data-aos='fade-up'data-aos-duration='1500'>
          <BsPhone size={40} color="509cdb"/>
          <br/>
          <br />
          <p><b>Manage your student information</b></p>
          <br/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            sapiente dolores nemo? Vitae laudantium, ipsam neque natus dolor
            quod sunt debitis minus eligendi tenetur maiores eum blanditiis
            labore optio repellat!
          </p>
        </div>
        <div data-aos='fade-up'data-aos-duration='1500'>
          <PiFileHtmlLight size={40}  color="509cdb"/>
          <br />
          <br/>
          <p><b>Manage your student information</b></p>
          <br/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            sapiente dolores nemo? Vitae laudantium, ipsam neque natus dolor
            quod sunt debitis minus eligendi tenetur maiores eum blanditiis
            labore optio repellat!
          </p>
        </div>
        <div data-aos='fade-up'data-aos-duration='1500'>
          <FaClock size={40}  color="509cdb"/>
          <br />
          <br/>
          <p><b>Manage your student information</b></p>
          <br/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            sapiente dolores nemo? Vitae laudantium, ipsam neque natus dolor
            quod sunt debitis minus eligendi tenetur maiores eum blanditiis
            labore optio repellat!
          </p>
        </div>
      </div>
    </section>
  );
}

export default FirstSection;
