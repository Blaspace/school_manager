/** @format */

import React from "react";

function FifthSection() {
  return (
    <section className="fifth-section-con">
      <section>
        <h1>Pick up the best plan</h1>
        <br />
        <p>
          Choose the plan that best suits your school’s needs. Whether you’re a
          small institution or a large educational organization, Statisda offers
          flexible pricing options designed to help you manage your school
          efficiently.
        </p>
      </section>
      <div className="fifth-section">
        <div className="price">
          <header>
            <br />
            <br />
            <span>Basic Plan</span>
            <br />
            <p>
              Perfect for small schools or startups looking to get started with
              school management.
            </p>
            <br />
            <h1>
              $15<small>/month</small>
            </h1>
            <br />
            <br />
          </header>
          <hr />
          <section>
            <br />
            <br />
            <ul>
              <input type="checkbox" checked />
              <label>Manage up to 100 students</label>
              <br />
              <input type="checkbox" checked />
              <label>Basic student and teacher management</label>
              <br />
              <input type="checkbox" checked />
              <label>Upload results and study materials</label>
            </ul>
            <br />
            <button>Buy plan</button>
            <br />
            <br />
          </section>
        </div>
        <div className="price-pro" style={{ background: "#100f57" }}>
          <header>
            <br />
            <br />
            <span style={{ background: "#ffffff" }}>Premium Plan</span>
            <br />
            <p>
              Best suited for large schools or educational organizations with
              complex needs and higher student volumes
            </p>
            <br />
            <h1>
              $15<small>/month</small>
            </h1>
            <br />
            <br />
          </header>
          <hr />
          <section>
            <br />
            <br />
            <ul>
              <input type="checkbox" checked />
              <label>Unlimited student management</label>
              <br />
              <input type="checkbox" checked />
              <label>Comprehensive teacher and staff management</label>
              <br />
              <input type="checkbox" checked />
              <label>Full customization of billing and payment systems</label>
            </ul>
            <br />
            <button>Buy plan</button>
            <br />
            <br />
          </section>
        </div>
        <div className="price">
          <header>
            <br />
            <br />
            <span>Standard Plan</span>
            <br />
            <p>
              Designed for growing schools that need more advanced features and
              customization options.
            </p>
            <br />
            <h1>
              $15<small>/month</small>
            </h1>
            <br />
            <br />
          </header>
          <hr />
          <section>
            <br />
            <br />
            <ul>
              <input type="checkbox" checked />
              <label>Manage up to 500 students</label>
              <br />
              <input type="checkbox" checked />
              <label>Advanced student and teacher management</label>
              <br />
              <input type="checkbox" checked />
              <label>Customizable billing and payment tracking</label>
            </ul>
            <br />
            <button>Buy plan</button>
            <br />
            <br />
          </section>
        </div>
      </div>
    </section>
  );
}

export default FifthSection;
