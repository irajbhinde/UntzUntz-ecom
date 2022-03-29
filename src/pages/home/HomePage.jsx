import { Link } from "react-router-dom";
import React from "react";

import "./homePage.css"
import Nav from "../../components/Nav/Nav";
import HomePageCard from "../../components/HomePage/HomePageCard/HomePageCard";
import HomePageHero from "../../components/HomePage/HomePageHero/HomePageHero";

export default function HomePage() {
    return (
        <><Nav /><div class="doc-home">
            <HomePageCard />
            <HomePageHero />
            <a href="/Pages/product_listing/product_listing.html">
                <div class="bottom-container">
                    <div class="cards horizontal">
                        <div class="img_txt_onside">
                            <div class="image_div">
                                <img src="/Images/bottom_2.jpg" />
                            </div>
                            <div class="cards-title-horizontal">
                                <p class="horizontal-card-title">New Arrivals</p>
                                <small>
                                    All the latest music releases from around the world as soon as
                                    they drop!
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
            <a href="/Pages/product_listing/product_listing.html">
                <div class="bottom-container">
                    <div class="cards horizontal">
                        <div class="img_txt_onside">
                            <div class="image_div">
                                <img src="/Images/bottom_1.jpg" />
                            </div>
                            <div class="cards-title-horizontal">
                                <p class="horizontal-card-title">Trending</p>
                                <small>
                                    Viral, trending & taking off! A combination of top chart &
                                    viral trends, all your favorites in one place.
                                </small>
                            </div>
                        </div>
                        <label for=""></label>
                    </div>
                </div>
            </a>
        </div></>
    )
}