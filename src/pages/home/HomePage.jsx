import { Link } from "react-router-dom";
import React from "react";

import "./homePage.css";
import Nav from "../../components/Nav/Nav";
import HomePageCard from "../../components/HomePage/HomePageCard/HomePageCard";
import HomePageHero from "../../components/HomePage/HomePageHero/HomePageHero";
import HomePageContainer from "../../components/HomePage/HomeBottomContainer/HomePageContainer";
import { useProduct } from "../../components/context/product-context";
import HomeNav from "../../components/HomePage/HomeNav/HomeNav";

export default function HomePage() {
  const {dispatch} = useProduct();
  const navigationByCategory = (categoryName) => {
    dispatch({type: "CLEAR_FILTERS"})
    dispatch({type: categoryName.split(" ").join("_").toUpperCase()});
  }
  return (
    <>
      <HomeNav />
      <div className="doc-home">
        <div className="home-cards">
          <HomePageCard navigationByCategory={navigationByCategory} />
        </div>
        <HomePageHero />
        <HomePageContainer />
      </div>
    </>
  );
}
