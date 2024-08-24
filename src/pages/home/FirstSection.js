/** @format */

import React from "react";
import { BsPhone, BsPhoneLandscape } from "react-icons/bs";
import { FaClock } from "react-icons/fa";
import { PiFileHtmlLight } from "react-icons/pi";

function FirstSection() {
  return (
    <section className="first-section-con">
      <div className="first-section">
        <div>
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
        <div>
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
        <div>
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
