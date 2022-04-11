import { Link } from "react-router-dom";
import { useState } from "react";

export default function SignUpCard() {
  const [passType, setPassType] = useState("password");
  return (
    <div className="login-page">
      <div className="signup-container">
        <h2 className="signup-title">Signup</h2>
        <div className="input-container">
          <p className="input-title">First Name*</p>
          <input className="input-field margin-bottom" type="text" />
          <p className="input-title">Last Name</p>
          <input className="input-field margin-bottom" type="text" />
          <p className="input-title">Email address*</p>
          <input className="input-field margin-bottom" type="text" />
          <div className="input-password">
            <p className="input-title">Password*</p>
            <input type={passType} className="input-field margin-bottom" />
            {passType === "text" ? (
              <i
                onClick={() =>
                  setPassType((passType) =>
                    passType === "password" ? "text" : "password"
                  )
                }
                class="pass-icon fa-solid fa-eye"
              ></i>
            ) : (
              <i
                onClick={() =>
                  setPassType((passType) =>
                    passType === "password" ? "text" : "password"
                  )
                }
                class="pass-icon fa-solid fa-eye-slash"
              ></i>
            )}
            <p className="input-title"> Confirm Password*</p>
            
            <input type={passType} className="input-field margin-bottom" />
          </div>
        </div>
        <div className="signup-elements">
          <div className="element-checkbox">
            <input id="checkbox" type="checkbox" /> I Accept the terms &
            conditions
          </div>
        </div>
        <button className="btn primary-btn">
          <a href="/Pages/Home/home.html">Create Account</a>
        </button>
        <a className="greater-than-anchor" href="/Get_Started/login.html">
          Already have an account ?
        </a>
      </div>
    </div>
  );
}
