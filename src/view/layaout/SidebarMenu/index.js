import React from 'react';
import ReactDOM from 'react-dom';
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
            activation: 'close-submenu',
            activation_li : 'de-active'
        };
        this.stateMenu = React.createRef();
    }

    subMenu = (e) => {
        console.log(e.target);
        if(this.state.activation_li === 'de-active' && this.state.activation === 'close-submenu'){
            this.setState({
                activation: 'open-submenu',
                activation_li : 'active'
            })
        }
        else{
            this.setState({
                activation: 'close-submenu',
                activation_li : 'de-active'
            })
        }

    };

    render() {
        return (
            <li onClick={this.subMenu}  className={this.state.activation_li}>
                <a>{this.props.children.name}</a>
                {this.props.children.sub && (
                    <ul ref={this.stateMenu} className={this.state.activation}>{renderChild(this.props.children.sub)}</ul>

                )}
            </li>
        )
    }
}


const renderChild = (item) => Object.keys(item).map((it) => <Children children={item[it]}/>);


export default Menu
