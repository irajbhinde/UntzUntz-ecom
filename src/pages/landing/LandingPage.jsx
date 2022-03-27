import React from "react";
import landing_image_mellowhead from "../../assets/landing_page_images/landing_page_mellowhead.svg"
import "./landingPage.css"
import { Link } from "react-router-dom";


export default function LandingPage (){
    return (
        <><nav>
            <div className="nav-bar">
                <div className="left-navbar">
                    <h2><Link to="/"><span className="primary-highlight">Untz</span>Untz!</Link></h2>
                
                </div>
                <div className="search-bar flex_r">
                    <i className="search-icon fa-solid fa-magnifying-glass"></i>
                    <input
                        type="search"
                        placeholder="Search for products, brands & more" />
                </div>
                <div className="right-navbar">
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                    <Link to="/explore">Explore</Link>
                </div>
            </div>
        </nav><div className="landing-content">
                <div className="landing-text">
                    <p>Your Neighbors Will Listen To Good Music Whether They Like It Or Not</p>
                    <Link to="/signup"><button className="btn-getstarted">Get Started</button></Link>
                </div>
                <div className="landing-image">
                    <img src={landing_image_mellowhead} alt="Error loading" />
                </div>

            </div></>
    )
}