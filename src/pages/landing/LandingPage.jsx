import React from "react";
import { Link } from "react-router-dom";

import landing_image_mellowhead from "../../assets/landing_page_images/landing_page_mellowhead.svg"
import "./landingPage.css"

import Nav from "../../components/Nav/Nav";


export default function LandingPage (){
    return (
        <>
        <Nav />
        <div className="landing-content">
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