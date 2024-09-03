/** @format */

import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import LoginPop from "./LoginPop";

const Login = () => {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate();
  const [pop, setPop] = useState(true);
  const handleLogin = (e) => {
    e.target.innerText = "Loading...";
    e.target.style.backgroundColor = "lightgrey";
    e.target.style.color = "black";
    fetch(`${process.env.REACT_APP_APIURL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else if (res.status === 401) {
          alert("Wrong email/password");
        } else {
          alert("please try again");
        }
      })
      .then((data) => {
        localStorage.setItem("token", data.accessToken);
        localStorage.setItem("user", "school");
        navigate("../../dashboard");
      })
      .catch((err) => console.log(err))
      .finally(() => {
        e.target.innerText = "Login";
        e.target.style.backgroundColor = "#2d88d4";
        e.target.style.color = "#ffffff";
      });
  };
  const handleDemo = (login, e) => {
    e.target.innerText = "Loading...";
    e.target.style.backgroundColor = "lightgrey";
    e.target.style.color = "black";
    fetch(`${process.env.REACT_APP_APIURL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else if (res.status === 401) {
          alert("Wrong email/password");
        } else {
          alert("please try again");
        }
      })
      .then((data) => {
        localStorage.setItem("token", data.accessToken);
        localStorage.setItem("user", "school");
        navigate("../../dashboard");
      })
      .catch((err) => console.log(err))
      .finally(() => {
        e.target.innerText = "Login";
        e.target.style.backgroundColor = "#2d88d4";
        e.target.style.color = "#ffffff";
      });
  };
  return (
    <>
      <LoginPop pop={pop} setPop={setPop} func={handleDemo} />
      <div className="signup">
        <div className="signup-right">
          <h1>Welcome, login to your school account</h1>
          <br />
          <br />
          <br />
          <form onSubmit={(e) => e.preventDefault()}>
            <br />
            <br />
            <p>Login as:</p>
            <br />
            <section>
              <NavLink
                to={"/student/login"}
                id="navlink"
                className={({ isActive, isPending }) => {
                  return isActive ? "activel" : "domantl";
                }}
              >
                {" "}
                <span>Student</span>
              </NavLink>
              <NavLink
                to={"/login"}
                id="navlink"
                className={({ isActive, isPending }) => {
                  return isActive ? "activel" : "domantl";
                }}
              >
                {" "}
                <span>School</span>
              </NavLink>
              <NavLink
                to={"/teacher/login"}
                id="navlink"
                className={({ isActive, isPending }) => {
                  return isActive ? "activel" : "domantl";
                }}
              >
                {" "}
                <span>Teacher</span>
              </NavLink>
            </section>
            <br />
            <br />
            <input
              type="email"
              placeholder="Enter school email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type="password"
              placeholder="Enter password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <button onClick={(e) => handleLogin(e)}>Login</button>
            <br />
            <p>
              <small>Do not have an account?</small>{" "}
              <b
                style={{ color: "#2d88d4", cursor: "pointer" }}
                onClick={() => navigate("../../signup/1")}
              >
                Signup
              </b>
            </p>
            <br />
            <br />
          </form>
          <br />
        </div>
        <div className="signup-left"></div>
      </div>
    </>
  );
};

export default Login;
