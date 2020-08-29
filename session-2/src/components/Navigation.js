import React from "react";
import '../index.css';

import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Home from '../pages/home/component';
import CategoryPage from '../pages/category/component';
import ProductPage from "../pages/product/component";
import CartPage from "../pages/cart/component";
import { useDispatch, useSelector } from "react-redux";
import UserPage from "../pages/user";



function Navigation() {
  const dataCart = useSelector((state) => state.cart);
  const totalItem = dataCart.cart.reduce((item, product) => item + product.qty , 0);
    return (
      <>
        <Router> 
          <div className="header">
              <div className="header-link">
                <div className="logo-wrap">
                  <img className="logo" src="/images/logo.svg" alt="Logo"/>
                </div>
                <span className="home-link"><Link to="/">Home</Link></span>
                <span className="cart-link"><Link to="/cart"><img src="/images/supermarket.svg" alt="Cart"/></Link><span className="counter">{totalItem}</span></span>
                 <span className="account-link"><Link to="/user"><img src="/images/user.svg" alt="Cart"/></Link></span>
              </div>
          </div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/category/:categoryId">
                <CategoryPage />
              </Route>
              <Route path="/product">
                <ProductPage/>
              </Route>
              <Route path="/cart">
                <CartPage/>
              </Route>
              <Route path="/user">
                <UserPage/>
              </Route>
            </Switch> 
        </Router>
      </>
    )
  } 
  
  export default Navigation;