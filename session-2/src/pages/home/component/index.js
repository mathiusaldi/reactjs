import React from "react";
import Homecategory from "../../category/component/Homecategory";

const Footer = () => {
  return <p>footer</p>;
};

const HomePage = () => {
  return (
    <div className="home container">
        <div className="banner-top"><img src="/images/banner.jpg" alt=""/></div>
        <Homecategory id="11" showitem="4" />
        <Homecategory id="12" showitem="2" />
    </div>
  );
};

export default HomePage;
