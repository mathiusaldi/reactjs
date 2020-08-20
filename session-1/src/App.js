import React from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './index.css';
import Home from './components/Home';
import CategoryPage from './components/CategoryPage'
import ProductPage from './components/ProductPage'
import CartPage from './components/CartPage'

function Navigation() {
  return (
    <>
      <Router> 
        <div className="header">
            <div className="header-link">
              <div className="logo-wrap">
                <img className="logo" src="/images/logo.svg" alt="Logo"/>
              </div>
              <span className="home-link"><Link to="/">Home</Link></span>
              <span className="cart-link"><Link to="/cart"><img src="/images/supermarket.svg" alt="Cart"/></Link></span>
            </div>
        </div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/cart">
              <CartPage/>
            </Route>
            <Route path="/category/:categoryId">
              <CategoryPage />
            </Route>
            <Route path="/product">
              <ProductPage/>
            </Route>
          </Switch> 
      </Router>
    </>
  )
} 

function Footer() {
  return (
        <div className="footer">
            <div className="logo">
            <img src="/images/logo.svg" alt="Logo"/>
            </div>
            <div className="footer-link">
              <span className="link">Tentang Kami</span>
              <span className="link">Kontak Kami</span>
            </div>
        </div>
  )
} 

function App() {
  return (
    <>
      <Navigation />
      <Footer/>
    </>
  );
}

export default App;
