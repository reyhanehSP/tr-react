import React from "react";
import listMenu from "./config/sidebar";
import Menu from "./view/layaout/SidebarMenu/index"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ListMenu: [listMenu]
        }
    }

    render() {

        return (
            <div className="App">
                <Menu listMenu={this.state.ListMenu}/>
            </div>
        )
    }
}

export default App;
