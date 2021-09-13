import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import data from "../../../config/sidebar";
import logo from "./150-150.png";
import IconButton from '@material-ui/core/IconButton';
import ExitToApp from '@material-ui/icons/ExitToApp';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import Security from '@material-ui/icons/Security';
import Alarm from '@material-ui/icons/Alarm'


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
                        <div>
                            <p className="text-white mb-0">به پنل فروشگاه های زنجیره ای تونل خوش آمدید.</p>
                        </div>
                        <div className="col-md-2 text-lg-end">
                            <IconButton color="secondary" aria-label="add an alarm">
                                <ExitToApp/>
                            </IconButton>
                            <IconButton color="secondary" aria-label="add an alarm">
                                <ShoppingBasket/>
                            </IconButton>
                            <IconButton color="secondary" aria-label="add an alarm">
                                <Security/>
                            </IconButton>
                            <IconButton color="secondary" aria-label="add an alarm">
                                <Alarm/>
                            </IconButton>
                        </div>
                    </div>
                </div>
                <nav className="menu-desktop">
                    <ul className="main-menu scroll-menu">
                        <li className="level-1">
                            <Link to="/dashboard">داشبورد</Link>
                        </li>
                        {renderChild(data.data.routes)}

                    </ul>
                    <div className="text-center d-flex align-items-center">
                        <img src={logo} className="logo-header"/>
                    </div>

                </nav>
            </header>
        )
    }
}

class Children extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: null,
            isActive: false,
        };
    }

    subMenu = (id) => {
        let isActive = !this.state.isActive;
        this.setState({
            open: id.currentTarget.getAttribute('keys'),
            isActive: isActive,
        })
    };

    render() {
        return (
            this.props.children.sub ?
                <li url={this.props.url} Keys={this.props.id} onClick={this.subMenu} className='hasSub'>
                    <a linkUrl={this.props.url}>{this.props.children.name}</a>

                    {/*{(this.state.open == this.props.id) && (*/}
                        <ul className='open-submenu'>
                            {renderChild(this.props.children.sub)}
                        </ul>
                        {/*)*/}
                    {/*}*/}

                </li>
                :
                <li url={this.props.url} Keys={this.state.isOpen} className='noSub'>
                    <Link activeClassName="selected" to={this.props.url}>{this.props.children.name}</Link>
                </li>


        )
    }
}

const renderChild = (item) => Object.keys(item).map((it, index) => <Children url={it} id={index} children={item[it]}/>);

export default Menu
