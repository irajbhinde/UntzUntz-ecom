import axios from "axios";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/auth-context";

export default function LoginCard(){
    const navigate = useNavigate();
    const {auth, setAuth} = useAuth();
    const [passType, setPassType] = useState("password");
    const [userCred, setUserCred] = useState({
        email: "",
        password: "",
      });

      
      const loginHandler = async (email,password) => {
          try {
              const response = await axios.post(`/api/auth/login`, {
                  email : email,
                  password : password
              })
              
              localStorage.setItem("token",response.data.encodedToken)
              setAuth({
                  ...auth,
                  authToken : response.data.encodedToken,
                  authStatus : true
              })
              navigate("/home")
          }
          catch(error){
            console.log(error);
          }
      }

    return(
        <div className="login-page">
            <form onSubmit={(e)=> {
                e.preventDefault();
                loginHandler(userCred.email,userCred.password)
            }}
            >
                <div className="login-container">
                <h2 className="login-title">Login</h2>
                <div className="input-container">
                    <p className="input-title">Email address*</p>
                    <input value={userCred.email}
                    type="email"
                    onChange={(e) =>
                    setUserCred({...userCred, email: e.target.value})}className="input-field margin-bottom" />
                        <p className="input-title">Password*</p>
                        <input 
                        value={userCred.password}
                        onChange={(e)=>
                        setUserCred({...userCred, password: e.target.value})}
                        type={passType} className="input-field margin-bottom" />
                        {passType === "text" ? <i 
                        onClick={() => setPassType((passType) => (passType === "password" ? "text" : "password"))}
                        class="loginpass-icon fa-solid fa-eye"></i> : <i 
                        onClick={() => setPassType((passType) => (passType === "password" ? "text" : "password"))}
                        class="loginpass-icon fa-solid fa-eye-slash"></i>}                       
                    </div>
                <div className="login-elements">
                    <div className="element-remember-me">
                        <input id="checkbox" type="checkbox" /> Remember Me
                        </div>
                    <Link className="forgot-pass" to="/resetpass">Forgot your password ?</Link>
                </div>
                <button 
                className="btn primary-btn">
                    Login
                </button>
                <button 
                onClick={() => 
                    loginHandler( 
                        "adarshbalika@gmail.com", 
                        "adarshbalika"
                    )
                
                }
                className="bg-gray btn primary-btn">
                    Login as Guest
                </button>
                <Link className="greater-than-anchor" to="/signup">Create New Account <span className="greater-than"> &gt; </span></Link>
            </div>
            </form>
            
        </div>
    )
}