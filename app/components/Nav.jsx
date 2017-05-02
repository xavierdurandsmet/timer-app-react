import React from 'react';
import { Link, IndexLink } from 'react-router';

const Nav = () => {
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="dropdown menu" data-dropdown-menu>
                    <li className="menu-text">React Timer App</li>
                    <li><IndexLink to="/" activeClassName="active-link">Timer</IndexLink></li>
                    <li><Link to="/" activeClassName="active-link">CountDown</Link></li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li className="menu-text">
                        Created By Xavier Durand-Smet
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;