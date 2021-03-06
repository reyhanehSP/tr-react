import React from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import {create} from 'jss';
import rtl from 'jss-rtl';
import {StylesProvider, jssPreset} from '@material-ui/core/styles';
import {/*createMuiTheme*/ createTheme,withStyles, ThemeProvider } from '@material-ui/core/styles';
import Menu from "./view/layaout/SidebarMenu/index";
import Dashboard from "./view/dashboard/index";
import Login from "./view/Auth/login";
import Departmants from "./view/departments/index";
import Suppliers from "./view/suppliers/index";
import SuppliersEdit from "./view/suppliers/form";
import Users from "./view/users/index";
import UsersEdit from "./view/users/form";
import Products from "./view/products/index";
import ProductsEdit from "./view/products/form";
import Roles from "./view/roles/index";
import RolesEdit from "./view/roles/form";
import Shops from "./view/shops/index";
import ShopsEdit from "./view/shops/form";
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';

const jss = create({plugins: [...jssPreset().plugins, rtl()]});

const theme = createTheme({

    direction: 'rtl',
    typography: {
        fontFamily: ['"sans"'].join(','),
        fontSize: 12,
        subtitle1: {
            fontSize: 14,
            fontWeight: 'bold'
        },
    },

    palette: {

        primary: {
            light: '#7e89b4',
            main: '#4c5782',
            dark: '#3d4977',
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            light: '#ffee33',
            main: '#ffea00',
            dark: '#b2a300',
            contrastText: '#ffcc00',
        },
        info:{
            light : '#9ae4d2',
            main : '#48cfad',
            dark : '#2ba184',

        },
        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        contrastThreshold: 3,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
    },
});



class App extends React.Component {
    render() {
        return (
            <Router>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <ThemeProvider theme={theme}>
                <StylesProvider jss={jss}>
                        <div className="App">
                            <Switch>
                                <Route exact path="/(login)" component={LoginContainer}/>
                                <Route component={DefaultContainer}/>
                            </Switch>
                        </div>
                </StylesProvider>
                </ThemeProvider>
                </MuiPickersUtilsProvider>
            </Router>
        )
    }
}
class LoginContainer extends React.Component {
    render() {
        return (
            <div>
                <Route exact path="/" render={() => <Redirect to="/login"/>}/>
                <Route path="/login" component={Login}/>
            </div>
        )
    }
}
class DefaultContainer extends React.Component {
    render() {
        let tokenUsers = localStorage.getItem("token");

        return (

            <div>
                <Menu/>
                <Switch>
                {tokenUsers && <Route path="/dashboard" component={Dashboard}/>}
                <Route exact path="/login" component={Login}/>

                /* departman */
                {tokenUsers ? <Redirect from="/departments.index" to="/departments"/> :
                    <Redirect from={'*'} to="/login"/>}
                {tokenUsers && <Route path="/departments" component={Departmants}/>}

                {tokenUsers ? <Redirect from="/suppliers.create" to="/suppliersForm"/> :
                    <Redirect from={'*'} to="/login"/>}
                {tokenUsers && <Route path="/suppliersForm" component={SuppliersEdit}/>}

                /* Supplier */
                {tokenUsers ? <Redirect from="/suppliers.index" to="/suppliers"/> :
                    <Redirect from={'*'} to="/login"/>}
                {tokenUsers && <Route path="/suppliers" component={Suppliers}/>}

                {tokenUsers ? <Redirect from="/suppliers.create" to="/suppliersForm"/> :
                    <Redirect from={'*'} to="/login"/>}
                {tokenUsers && <Route path="/suppliersForm" component={SuppliersEdit}/>}

                /* Users */
                {tokenUsers ? <Redirect from="/users.index" to="/users"/> :
                    <Redirect from={'*'} to="/login"/>}
                {tokenUsers && <Route path="/users" component={Users}/>}

                {tokenUsers ? <Redirect from="/users.create" to="/usersForm"/> :
                    <Redirect from={'*'} to="/login"/>}
                {tokenUsers && <Route path="/usersForm" component={UsersEdit}/>}

                /* Products */
                {tokenUsers ? <Redirect from="/products.index" to="/products"/> :
                    <Redirect from={'*'} to="/login"/>}
                {tokenUsers && <Route path="/products" component={Products}/>}

                {tokenUsers ? <Redirect from="/products.add" to="/productsForm"/> :
                    <Redirect from={'*'} to="/login"/>}
                {tokenUsers && <Route path="/productsForm" component={ProductsEdit}/>}

                /* roles */
                {tokenUsers ? <Redirect from="/roles.index" to="/roles"/> :
                    <Redirect from={'*'} to="/login"/>}
                {tokenUsers && <Route path="/roles" component={Roles}/>}

                {tokenUsers ? <Redirect from="/roles.create" to="/rolesForm"/> :
                    <Redirect from={'*'} to="/login"/>}
                {tokenUsers && <Route path="/rolesForm" component={RolesEdit}/>}

                /* shops */
                {tokenUsers ? <Redirect from="/shops.index" to="/shops"/> :
                    <Redirect from={'*'} to="/login"/>}
                {tokenUsers && <Route path="/shops" component={Shops}/>}

                {tokenUsers ? <Redirect from="/shops.create" to="/shopsForm"/> :
                    <Redirect from={'*'} to="/login"/>}
                {tokenUsers && <Route path="/shopsForm" component={ShopsEdit}/>}
                </Switch>
            </div>
        )
    }
}
export default App;
