import React from 'react';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import Login from "../view/Auth/login";
import App from "../App";
import About from "../view/Pages/About";
import Contact from  "../view/Pages/Contact";
import Department from  "../view/departments/index";
import Users from  "../view/users/index";

class Routes extends React.Component {
    render() {
        let tokenUsers = localStorage.getItem("token");
        return <Switch>
            {/*<Route exact path="/home" component={App}/>*/}
            {tokenUsers && <Route path="/" component={App}/>}
            <Route exact path="/login" component={Login}/>
            {tokenUsers ? <Redirect from={'*'} to="/"/> : <Redirect from={'*'} to="/login"/>}
            {tokenUsers && <Route path="/department" to="/department" component={Department}/> }
            {tokenUsers && <Route path="/users" to="/users" component={Users}/> }
            <Route component={About} path="/about" />
            <Route component={Contact} path="/contact" />
        </Switch>
    }
}

// export default Routes;
export default withRouter(Routes);
