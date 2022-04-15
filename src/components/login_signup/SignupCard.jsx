import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/auth-context";

export default function SignUpCard() {
  const navigate = useNavigate();
  const {auth,setAuth} = useAuth();
  const [passType, setPassType] = useState("password");
  const [userCred, setUserCred] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const signUpHandler = async (userCred) => {
    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName: userCred.firstName,
        lastName: userCred.lastName,
        email: userCred.email,
        password: userCred.password,
      });
      localStorage.setItem("token", response.data.encodedToken);
      setAuth({
        ...auth,
        authToken : response.data.encodedToken,
        authStatus : true 
      })
      navigate("/home")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-page">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          signUpHandler(userCred);
        }}
      >
        <div className="signup-container">
          <h2 className="signup-title">Signup</h2>
          <div className="input-container">
            <p className="input-title">First Name*</p>
            <input
              value={userCred.firstName}
              onChange={(e) =>
                setUserCred({ ...userCred, firstName: e.target.value })
              }
              className="input-field margin-bottom"
              type="text"
            />
            <p className="input-title">Last Name</p>
            <input
              value={userCred.lastName}
              onChange={(e) =>
                setUserCred({ ...userCred, lastName: e.target.value })
              }
              className="input-field margin-bottom"
              type="text"
            />
            <p className="input-title">Email address*</p>
            <input
              value={userCred.email}
              onChange={(e) =>
                setUserCred({ ...userCred, email: e.target.value })
              }
              className="input-field margin-bottom"
              type="text"
            />
            <div className="input-password">
              <p className="input-title">Password*</p>
              <input
                type={passType}
                value={userCred.password}
                onChange={(e) =>
                  setUserCred({ ...userCred, password: e.target.value })
                }
                className="input-field margin-bottom"
              />
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
              <p className="input-title">
                {" "}
                Confirm Password*
              </p>

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
            <p>Create Account</p>
          </button>
          <Link className="greater-than-anchor" to="/login">
            Already have an account ?
          </Link>
        </div>
      </form>
    </div>
  );
}
