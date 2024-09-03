/** @format */

import React from "react";
import phone from "../../public/phone.png";

function SecondSection() {
  return (
    <section className="second-section-con">
      <div className="second-section"  data-aos='fade-down'data-aos-duration='1500'>
        <div>
          <h1>About Us</h1>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            sapiente dolores nemo? Vitae laudantium, ipsam neque natus dolor
            quod sunt debitis minus eligendi tenetur maiores eum blanditiis
            labore optio repellat!
            sapiente dolores nemo? Vitae laudantium, ipsam neque natus dolor
            quod sunt debitis minus eligendi tenetur maiores eum blanditiis
            labore optio repellat!
            <br/>
            <br/>
            sapiente dolores nemo? Vitae laudantium, ipsam neque natus dolor
            quod sunt debitis minus eligendi tenetur maiores eum blanditiis
            labore optio repellat!
          </p>
        </div>
        <div className="second-section-img" data-aos='fade-up-left'data-aos-duration='2000'>
          <img src={phone} alt="hand" />
        </div>
      </div>
    </section>
  );
}

export default SecondSection;
