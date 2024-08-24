/** @format */

import React from "react";
import img1 from "../../public/Img 1.png";
import img2 from "../../public/Img 2.png";

function ThirdSection() {
  return (
    <section className="third-section-con">
      <div className="third-section">
        <div>
          <h1>
            Work around very
            <br /> talented people.
          </h1>
          <br/>
          <p>
            with lots of unique block you can easily buils
            <br /> a page easily without any code
          </p>
          <br />
          <br/>
          <br/>
          <span>
            <img src={img1} alt="img of guy" />
          </span>
        </div>
        <div>
          <span>
            <img src={img2} alt="image ofstudent" />
          </span>
        </div>
      </div>
    </section>
  );
}

export default ThirdSection;
