import React from 'react';
import Clock from 'Clock';

const CountDown = React.createClass({
    render () {
        return (
            <div>
                <Clock totalSeconds={129}/>
            </div>
        )
    }
})

module.exports = CountDown;