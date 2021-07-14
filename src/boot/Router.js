import React from 'react';
import {Redirect , Route, Switch, withRouter } from "react-router-dom";
import Login from "../view/Auth/login";
import App from "../App";
import Suppliers from "../view/suppliers/index";

class Routes extends React.Component {
    render() {
        let tokenUsers = localStorage.getItem("token");
        return
    }
}

// export default Routes;
export default withRouter(Routes);
