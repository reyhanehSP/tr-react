import React from 'react';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import Login from "../view/Auth/login";
import App from "../App";
import About from "../view/Pages/About";
import Contact from  "../view/Pages/Contact"

class Routes extends React.Component {
    render() {
        let tokenUsers = localStorage.getItem("token");
        return <Switch>
            <Route exact path="/home" component={App}/>
            {tokenUsers && <Route path="/home" component={App}/>}
            <Route exact path="/login" component={Login}/>
            {tokenUsers ?
                <Redirect from={'*'} to="/home"/> :
                <Redirect from={'*'} to="/login"/>}
            <Route component={About} path="/about" />
            <Route component={Contact} path="/contact" />
        </Switch>
    }
}

// export default Routes;
export default withRouter(Routes);
