import React from 'react';
import Clock from 'Clock';
import Controls from 'Controls';
// import axios from 'axios';

const Timer = React.createClass({
    getInitialState() {
        return {
            count: 0,
            countDownStatus: 'paused'
        }
    },
    handleStatusChange(newStatus) {
        this.setState({
            countDownStatus: newStatus
        })
    },
    // componentDidMount() {
    //     axios.get('/timer')
    //         .then(res => this.setState({count: res.data.count}));
    // },
    componentDidUpdate(prevProps, prevState) {
        if (this.state.countDownStatus !== prevState.countDownStatus) {
            switch (this.state.countDownStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({
                        count: 0,
                        countDownStatus: 'paused'
                    });
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
            }
        }
    },
    componentWillUnmount() {
        clearInterval(this.timer);
    },
    startTimer() {
        this.timer = setInterval(() => {
            const newCount = this.state.count + 1;
            this.setState({ count: newCount })
        }, 1000)
    },
    render() {
        const { count, countDownStatus } = this.state;
        return (
            <div>
                <Clock totalSeconds={count} />
                <Controls countDownStatus={countDownStatus} onStatusChange={this.handleStatusChange} />
            </div>
        )
    }
});

module.exports = Timer;