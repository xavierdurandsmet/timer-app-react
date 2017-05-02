import React from 'react';
import Clock from 'Clock';
import CountDownForm from 'CountDownForm';

const CountDown = React.createClass({
    getInitialState() {
        return {
            count: 0
        }
    },
    handleSetCountDown(seconds) {
        this.setState({
            count: seconds
        })
    },
    render() {
        const {count} = this.state;
        return (
            <div>
                <Clock totalSeconds={count} />
                <CountDownForm onSetCountDown={this.handleSetCountDown} />
            </div>
        )
    }
})

module.exports = CountDown;