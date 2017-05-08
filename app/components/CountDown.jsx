import React from 'react';
import Clock from 'Clock';
import CountDownForm from 'CountDownForm';
import Controls from 'Controls';
import TodoAPI from 'TodoAPI';

const CountDown = React.createClass({
    getInitialState() {
        return {
            count: 0,
            countDownStatus: 'stopped'
        }
    },
    componentDidUpdate(prevProps, prevState) {
        if (this.state.countDownStatus !== prevState.countDownStatus) {
            switch (this.state.countDownStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({
                        count: 0
                    });
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
            }
        }
    },

    // when countDown already loaded, switching from one countDown to another
    componentWillReceiveProps(nextProps) {
        const countDownId = nextProps.location.query.id;
        this.setState({
            ...TodoAPI.mainState.countdowns[countDownId]
        })
    },

    // first time a countDown is mounted
    componentWillMount() {
        const countDownId = this.props.location.query.id;
        this.setState({
            ...TodoAPI.mainState.countdowns[countDownId]
        })
    },

    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = undefined;
    },
    startTimer() {
        this.timer = setInterval(() => {
            const newCount = this.state.count - 1;
            this.setState({
                count: newCount >= 0 ? newCount : 0
            })
            if (newCount === 0) {
                this.setState({
                    countDownStatus: 'stopped'
                })
            }
        }, 1000)
    },
    handleSetCountDown(seconds) {
        this.setState({
            count: seconds,
            countDownStatus: 'started'
        })
    },
    handleStatusChange(newStatus) {
        this.setState({
            countDownStatus: newStatus
        })
    },
    render() {
        const id = this.props.location.query.id;
        const {count, countDownStatus} = this.state;
        const renderControlArea = () => {
            if (countDownStatus !== 'stopped') {
                return <Controls countDownStatus={countDownStatus} onStatusChange={this.handleStatusChange} />
            } else {
                return <CountDownForm onSetCountDown={this.handleSetCountDown} />
            }
        }
        return (
            <div>
                <h1>{this.state.title}</h1>
                <Clock totalSeconds={count} />
                {renderControlArea()}
            </div>
        )
    }
})

module.exports = CountDown;