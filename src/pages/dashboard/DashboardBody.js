/** @format */

import React from "react";
import { BsPersonAdd } from "react-icons/bs";

function DashboardBody() {
  return (
    <div className="dashboard-body-con">
      <div className="dashboard-body">
        <div>
          <BsPersonAdd size={50} />
          <section>
            <h1>Add Teachers to your school</h1>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              sapiente dolores nemo? Vitae laudantium, ipsam neque natus dolor
              quod sunt debitis minus eligendi tenetur
            </p>
          </section>
        </div>
        <div>
          <BsPersonAdd size={50} />
          <section>
            <h1>Add Students to your school</h1>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              sapiente dolores nemo? Vitae laudantium, ipsam neque natus dolor
              quod sunt debitis minus eligendi tenetur
            </p>
          </section>
        </div>
        <div>
          <BsPersonAdd size={50} />
          <section>
            <h1>Add billing for Students</h1>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              sapiente dolores nemo? Vitae laudantium, ipsam neque natus dolor
              quod sunt debitis minus eligendi tenetur
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default DashboardBody;
