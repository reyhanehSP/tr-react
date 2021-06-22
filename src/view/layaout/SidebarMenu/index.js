import React from 'react';

class Menu extends React.Component {

    render() {
        console.log(this.props.listMenu)
        return (
            <div className="row nav-org">
                <div className="container-menu-desktop">
                    <div className="wrap-header-mobile">
                        <div className="btn-show-menu-mobile">
					<span className="hamburger-box">
					</span>
                        </div>
                    </div>
                    <div className="wrap-main-nav">
                        <div className="main-nav">
                            <nav className="menu-desktop">
                                <ul className="main-menu scroll-menu">
                                    <li className="level-1">
                                        <a href="/">داشبورد</a>
                                    </li>
                                    {this.props.listMenu.map((listMenu,index) => (
                                        <li  key={index}>
                                            <a href="">{listMenu.sections[index].title.name} </a>
                                        </li>
                                    ))
                                    }
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Menu
