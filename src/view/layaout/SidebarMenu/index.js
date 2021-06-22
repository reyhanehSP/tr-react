import React from 'react';
import data from "../../../config/sidebar";
import SingleMenu from "./singleMenu";
import MultiMenu from "./multiMenu";

class Menu extends React.Component {
    render() {
        return (
            <div className="row">
                <nav className="menu-desktop">
                    <ul className="main-menu scroll-menu">
                        <li className="level-1">
                            <a href="/">داشبورد</a>
                        </li>
                        {data.map((obj , index) => (
                            obj.title.sub === "" ?
                                <SingleMenu name={obj.title.name}/>
                                :
                                <MultiMenu  key={index} name={obj.title.name} ulClasses={obj.title.ulClasses}
                                           level-1={obj.title.level-1} urls={obj.title.urls}
                                           sub={obj.title.sub}
                                />

                        ))
                        }
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Menu
