/** @format */

import React from "react";
import { BsPhone, BsPhoneLandscape } from "react-icons/bs";
import { FaClock } from "react-icons/fa";
import { PiFileHtmlLight } from "react-icons/pi";

function FirstSection() {
  return (
    <section className="first-section-con">
      <div className="first-section">
        <div data-aos="fade-up" data-aos-duration="1500">
          <BsPhone size={40} color="509cdb" />
          <br />
          <br />
          <p>
            <b>Innovative Solutions</b>
          </p>
          <br />
          <p>
            We continuously innovate to meet the evolving needs of modern
            education, integrating the latest technology to provide a robust and
            reliable platform.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-duration="1500">
          <PiFileHtmlLight size={40} color="509cdb" />
          <br />
          <br />
          <p>
            <b>User-Centric Design</b>
          </p>
          <br />
          <p>
            Our platform is designed with users in mind, ensuring that every
            feature is intuitive and easy to use, whether you’re a school
            administrator, teacher, or student.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-duration="1500">
          <FaClock size={40} color="509cdb" />
          <br />
          <br />
          <p>
            <b>Commitment to Excellence</b>
          </p>
          <br />
          <p>
            We are committed to providing the highest level of service, with a
            focus on security, reliability, and customer satisfaction. Your
            success is our success
          </p>
        </div>
      </div>
    </section>
  );
}

export default FirstSection;
