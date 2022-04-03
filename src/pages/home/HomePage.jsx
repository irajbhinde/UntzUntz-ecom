import { Link } from "react-router-dom";
import React from "react";

import "./homePage.css";
import Nav from "../../components/Nav/Nav";
import HomePageCard from "../../components/HomePage/HomePageCard/HomePageCard";
import HomePageHero from "../../components/HomePage/HomePageHero/HomePageHero";
import HomePageContainer from "../../components/HomePage/HomeBottomContainer/HomePageContainer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <div class="doc-home">
        <div className="home-cards">
          <HomePageCard />
        </div>
        <HomePageHero />
        <HomePageContainer />
      </div>
    </>
  );
}
