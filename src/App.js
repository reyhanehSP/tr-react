import React from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import {create} from 'jss';
import rtl from 'jss-rtl';
import {StylesProvider, jssPreset} from '@material-ui/core/styles';
import {/*createMuiTheme*/ createTheme,withStyles, ThemeProvider } from '@material-ui/core/styles';
import Menu from "./view/layaout/SidebarMenu/index";
import Dashboard from "./view/dashboard/index";
import Login from "./view/Auth/login";
import Suppliers from "./view/suppliers/index";
import SuppliersEdit from "./view/suppliers/form";

const jss = create({plugins: [...jssPreset().plugins, rtl()]});

const theme = createTheme({
    direction: 'rtl',
    typography: {
        fontFamily: ['"sans"'].join(','),
        fontSize: 12,
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
        let tokenUsers = localStorage.getItem("token");
        return (
            <Router>
                <ThemeProvider theme={theme}>
                <StylesProvider jss={jss}>
                        <div className="App">
                            <Menu/>
                            <Switch>
                                {tokenUsers && <Route path="/dashboard" component={Dashboard}/>}
                                <Route exact path="/login" component={Login}/>
                                {tokenUsers ? <Redirect from="/suppliers.index" to="/suppliers"/> :
                                    <Redirect from={'*'} to="/login"/>}
                                {tokenUsers ? <Redirect from="/suppliers.index" to="/suppliers"/> :
                                    <Redirect from={'*'} to="/login"/>}
                                {tokenUsers && <Route path="/suppliers" component={Suppliers}/>}
                                {tokenUsers ? <Redirect from="/suppliers.create" to="/suppliersForm"/> :
                                    <Redirect from={'*'} to="/login"/>}
                                {tokenUsers && <Route path="/suppliersForm" component={SuppliersEdit}/>}
                            </Switch>
                        </div>
                </StylesProvider>
                </ThemeProvider>
            </Router>
        )
    }
}

export default App;
