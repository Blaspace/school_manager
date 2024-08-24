/** @format */

import React from "react";
import phone from "../../public/phone.png";

function SecondSection() {
  return (
    <section className="second-section-con">
      <div className="second-section">
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
        <div className="second-section-img">
          <img src={phone} alt="hand" />
        </div>
      </div>
    </section>
  );
}

export default SecondSection;
