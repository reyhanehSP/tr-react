import React from "react";
import Menu from "./view/layaout/SidebarMenu/index"
import Department from "./view/departments/index";
import axios from "axios";
import history from "./history";


class App extends React.Component {

    render() {
        return (
            <div className="App">
                <Menu/>
                <Department/>
            </div>
        )
    }
}

export default App;
