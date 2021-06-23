import React from 'react';
import data from "../../../config/sidebar";

class Menu extends React.Component {

    render() {
        return (
            <div className="row">
                <nav className="menu-desktop">
                    <ul className="main-menu scroll-menu">
                        <li className="level-1">
                            <a href="/">داشبورد</a>
                        </li>
                        {renderChild(data)}
                    </ul>
                </nav>
            </div>
        )
    }
}

class Children extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activation: 'close-submenu'
        };
        this.stateMenu = React.createRef();
    }

    subMenu = () => (

        this.state.activation === 'close-submenu' ?
            this.setState({
                activation: 'open-submenu'
            })
            :
            this.setState({
                activation: 'close-submenu'
            })
    );

    render() {
        return (
            <li>
                <a onClick={this.subMenu}
                   className={this.props.children.level === 'level-1' ? this.props.children.level : ''}>{this.props.children.name}</a>
                {console.log(this.props.children.children)}
                {this.props.children.sub && (
                    <ul ref={this.stateMenu} className={this.state.activation}>{renderChild(this.props.children.sub)}</ul>
                )}
            </li>
        )
    }
}


const renderChild = item => item.map(it => <Children children={it}/>);

export default Menu
