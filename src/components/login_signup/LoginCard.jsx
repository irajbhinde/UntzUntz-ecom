import { useState } from "react"
import { Link } from "react-router-dom"

export default function LoginCard(){
    const [passType, setPassType] = useState("password");
    console.log(setPassType);
    return(
        <div className="login-page">
            <div className="login-container">
                <h2 className="login-title">Login</h2>
                <div className="input-container">
                    <p className="input-title">Email address*</p>
                    <input className="input-field margin-bottom" type="text" />
                        <p className="input-title">Password*</p>
                        <input type={passType} className="input-field margin-bottom" />
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
                <button className="btn primary-btn">
                    <Link to="/home">Login as Guest</Link>
                </button>
                <Link className="greater-than-anchor" to="/signup">Create New Account <span className="greater-than"> &gt; </span></Link>
            </div>
        </div>
    )
}