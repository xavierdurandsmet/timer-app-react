import React from 'react';
import { Link, IndexLink } from 'react-router';
import TodoAPI from 'TodoAPI';

const Nav = React.createClass({
    getInitialState() {
        return TodoAPI.mainState
    },
    handleAddNewProject () {
        const id = this.state.countdowns.length;
        this.setState({
            countdowns: [...this.state.countdowns, {
                title: `Countdown ${id}`,
                id: id,
                count: 10
            }]
        }, () => {
          TodoAPI.mainState = this.state;    
        })
    },
    render() {
        const countdownsList = () => {
            return this.state.countdowns.map((countdown, index) => {
                const path = `/countdown/?id=${countdown.id}`;
                return <li key={index}><Link to={path} activeClassName="active-link">{countdown.title}</Link></li>
            })
        } 
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="dropdown menu" data-dropdown-menu>
                        <li className="menu-text">React Timer App</li>
                        <li><Link to="/tweets" activeClassName="active-link">Tweets</Link></li>
                        <li><IndexLink to="/" activeClassName="active-link">Timer</IndexLink></li>
                        {countdownsList()}
                        <li className="menu-text"> <button onClick={this.handleAddNewProject}>Add New Project</button></li>
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
})

export default Nav;