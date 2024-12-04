/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

function LoginPop({ pop, setPop }) {
const navigate = useNavigate()

  const handleTeacherDemo = (login, e)=>{
    e.target.innerText = "Loading..."
    e.target.style.backgroundColor = "lightgrey"
    e.target.style.color = "black"
    fetch(`${process.env.REACT_APP_APIURL}/teacher/login`,{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(login)
    })
    .then(res=> {
        if(res.ok){
            return res.json()
        }else if(res.status === 401){
            alert('Wrong email/password')
        }else{
            alert('please try again')
        }
    })
    .then(data=>{
        localStorage.setItem('token', data.accessToken)
        localStorage.setItem('user', 'teacher')
        navigate('../../teacherdashboard')
    })
    .catch(err=>console.log(err))
    .finally(()=>{
        e.target.innerText = "Login"
        e.target.style.backgroundColor = "#2d88d4"
        e.target.style.color = "#ffffff"
    })
}

const handleStudentDemo = (login,e)=>{
  e.target.innerText = "Loading..."
  e.target.style.backgroundColor = "lightgrey"
  e.target.style.color = "black"
  fetch(`${process.env.REACT_APP_APIURL}/student/login`,{
      method: 'POST',
      headers: {
          'Content-Type':'application/json'
      },
      body: JSON.stringify(login)
  })
  .then(res=> {
      if(res.ok){
          return res.json()
      }else if(res.status === 401){
          alert('Wrong email/password')
      }else{
          alert('please try again')
      }
  })
  .then(data=>{
      localStorage.setItem('token', data.accessToken)
      localStorage.setItem('user', 'student')
      navigate('../../studentdashboard')
  })
  .catch(err=>console.log(err))
  .finally(()=>{
      e.target.innerText = "Login"
      e.target.style.backgroundColor = "#2d88d4"
      e.target.style.color = "#ffffff"
  })
}

const handleSchoolDemo = (login, e) => {
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
      {pop && (
        <div className="popup-con">
          <div className="demo">
            <br />
            <p>
              Login to a demo accout that has already been created and populated
              to help you test the application better
            </p>
            <br />
            <div>
              <button
                className="btn"
                onClick={(e) =>
                  handleSchoolDemo({
                    email: "ngbedejames415@gmail.com",
                    password: "blaspace",
                  }, e)
                }
              >
                Login as School
              </button>
              <button
                className="btn"
                onClick={(e) =>
                  handleTeacherDemo({
                    email: "ngbedejames415@gmail.com",
                    password: "blaspace",
                  }, e)
                }
              >
                Login as Teacher
              </button>
              <button
                className="btn"
                onClick={(e) =>
                  handleStudentDemo({
                    email: "ngbedejames415@gmail.com",
                    password: "blaspace",
                  }, e)
                }
              >
                Login as Student
              </button>
              <button className="btn2" onClick={() => setPop(false)}>
                Not Now
              </button>
            </div>
            <br />
          </div>
        </div>
      )}
    </>
  );
}

export default LoginPop;
