/** @format */

import React from "react";
import img1 from "../../public/Img 1.png";
import img2 from "../../public/Img 2.png";

function ThirdSection() {
  return (
    <section className="third-section-con">
      <div className="third-section">
        <div data-aos="fade-up" data-aos-duration="1500">
          <h1>
            We make the connection 
          </h1>
          <br />
          <p>
            our platform is designed to empower schools, teachers, and students
           <br/> to focus on what truly matters
          </p>
          <br />
          <br />
          <br />
          <span>
            <img src={img1} alt="img of guy" />
          </span>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
          <span>
            <img src={img2} alt="image ofstudent" />
          </span>
        </div>
      </div>
    </section>
  );
}

export default ThirdSection;
