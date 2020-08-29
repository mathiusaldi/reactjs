import React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './index.css';

import store from './redux/store';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Provider store={store}>
        <Navigation />
        <Footer/>
      </Provider>
    
    </>
  );
}

export default App;
