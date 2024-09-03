/** @format */

import React from "react";
import phone from "../../public/phone.png";

function SecondSection() {
  return (
    <section className="second-section-con">
      <div
        className="second-section"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        <div>
          <h1>What We Offer</h1>
          <br />
          <p>
            Statisda is a powerful SaaS platform that brings all
            essential school management functions under one roof. From student
            registration and teacher management to billing customization and
            resource sharing, our system is built to adapt to the unique needs
            of every school. We aim to make school management more accessible,
            allowing educators to dedicate more time to teaching and students to
            thrive in their academic journeys.
          </p>
        </div>
        <div
          className="second-section-img"
          data-aos="fade-up-left"
          data-aos-duration="2000"
        >
          <img src={phone} alt="hand" />
        </div>
      </div>
    </section>
  );
}

export default SecondSection;
