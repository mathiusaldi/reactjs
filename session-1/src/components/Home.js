import React from "react";
import '../index.css';

import CategoryList from './CategoryList';


function Home() {
  return (
    <div className="home container">
        <div className="banner-top"><img src="/images/banner.jpg" alt=""/></div>
       <CategoryList/>
    </div>
  );
}

export default Home;
