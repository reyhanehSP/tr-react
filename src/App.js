import React from "react";
import Menu from "./view/layaout/SidebarMenu/index"
import Department from "./view/departments/index";
import Dashboard from "./view/dashboard/index";


class App extends React.Component {

    render() {
        return (
            <div className="App">
                <Menu/>
                <Dashboard/>
            </div>
        )
    }
}

export default App;
