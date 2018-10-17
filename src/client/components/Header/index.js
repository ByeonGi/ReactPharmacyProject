import React from 'react';
import './Header.css';
import PropsTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Header extends React.Component{
    render(){
        const signin = (
            <li>
                <Link to ="/signin">
                    LOGIN
                </Link>
            </li>
        )
        const signout = (
            <li>
                <a>
                    LOGOUT
                </a>
            </li>
        )

        return (
            <nav className = 'navbar'>
                <li className = 'navbar-brand'>
                    <Link to = "/">변기네 약국</Link>
                </li>
                {this.props.isLoggedIn?signout:signin}
                <li>
                    <a>MAP</a>
                </li>
                <li>
                    <a>ABOUT</a>
                </li>
            </nav>
            
        )
    }
}

Header.propTypes = {
    isLoggedIn : PropsTypes.bool,
    onLogout : PropsTypes.func
}

Header.defaultProps = {
    isLoggedIn : false,
    onLogout : () =>{console.error("logout function not defined")}
}

export default Header;