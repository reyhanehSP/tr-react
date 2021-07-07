import React from 'react';

import data from "../../../config/sidebar";
import logo from "./150-150.png";


class Menu extends React.Component {
    logout = () => {
        localStorage.clear();
        window.location.href = '/login';
    };

    render() {
        return (
            <header className="header">
                <div className="col-md-12">
                    <div className="top-header">
                        <div className="col-md-2 section-one">
                            <div id="container-anim">
                                <div id="flip-calendar">
                                    <div>
                                        <div className="dateTypeBody">
                                            <span>دوشنبه - ۰۷ تیر ۱۴۰۰</span>
                                            <span>۱۴۰۰/۰۴/۰۷</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="dateTypeBody">
                                            <span id="hejri-day-week">۱۸ ذی القعده ۱۴۴۲</span>
                                            <span id="hejri-date">۱۴۴۲/۱۱/۱۸</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="dateTypeBody">
                                            <span className="date">Mon - 2021 28 Jun</span>
                                            <span className="numeral">2021/06/28</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 text-center">
                            <img src={logo} className="logo-header mx-auto"/>

                        </div>
                        <div className="col-md-2">
                        </div>
                    </div>
                </div>
                <nav className="menu-desktop">
                    <ul className="main-menu scroll-menu">
                        <li className="level-1">
                            <a href="/">داشبورد</a>
                        </li>
                        {renderChild(data.data.routes)}

                    </ul>
                    <button className="logout-section button button-salmon" onClick={this.logout}>
                        <span>خروج</span>
                    </button>
                </nav>
            </header>

        )
    }
}

class Children extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: [this.props.id, false],
            activeId: null,
            isActive : false
        };
    }
    subMenu = (id) => {
        this.setState({isActive : true })
    };
    render() {
        return (
                <li url ={this.props.url} liKeys={this.state.isOpen}>
                    <a  onClick={this.subMenu.bind(this)}>{this.props.children.name}</a>
                    {this.props.children.sub && (
                        <ul className={this.state.isActive ? 'open-submenu' : 'close-submenu'}>{renderChild(this.props.children.sub)}</ul>
                    )}
                </li>

        )
    }
}

const renderChild = (item) => Object.keys(item).map((it, index) => <Children url={it} id={index} children={item[it]}/>);

export default Menu
