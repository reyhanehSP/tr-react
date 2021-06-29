import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import history from "./history";
import Routes from './boot/Router';
import axios from "axios";

let token;
let panel_token = localStorage.getItem("token");

if (panel_token) {
    token = localStorage.getItem("token");
}
//
axios.defaults.baseURL = "http://localhost:8000";

if (token) {
    axios.defaults.headers['Authorization'] = `${token}`;
}
ReactDOM.render(
    <Router history={history}>
        <React.StrictMode>
            <React.Fragment>
                <Routes>
                    <App/>
                </Routes>
            </React.Fragment>
        </React.StrictMode>
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
