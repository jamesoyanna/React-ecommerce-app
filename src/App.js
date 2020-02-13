import React from 'react';
//import {Provider} from 'react-redux';
//import {createStore} from 'redux';
//import rootReducer from './';
import Home from "../src/containers/Home";
import About from "../src/containers/About";
import Contact from "../src/containers/Contact";

import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import logo from './jumia-logo.svg';
import './App.css';

function App() {
  return (
    <Switch>
     <Route path="/" component={Home} exact/>
    <Route path="/about" component={About}/>
    <Route path="/contact-us" component={Contact}/>
      
    </Switch>
  );
}

export default App;
