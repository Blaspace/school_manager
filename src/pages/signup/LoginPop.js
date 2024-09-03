/** @format */

import React from "react";

function LoginPop({ pop, setPop, func }) {
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
                  func({
                    email: "ngbedejames415@gmail.com",
                    password: "blaspace",
                  }, e)
                }
              >
                Login
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
