import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
 
    <App />
  ,
  document.getElementById("root")
);

serviceWorker.unregister();
