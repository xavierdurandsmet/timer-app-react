import React from 'react';
import PropTypes from 'prop-types';

const Controls = React.createClass({
    propTypes: {
        countDownStatus: PropTypes.string.isRequired,
        onStatusChange: PropTypes.func.isRequired
    },
    onStatusChange (newStatus) {
        return () => {
            this.props.onStatusChange(newStatus);
        }
    },
    render () {
        const { countDownStatus } = this.props;
        const renderStartStopButton = () => {
            if (countDownStatus === 'started') {
                return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
            } else if (countDownStatus === 'paused') {
                return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
            }
        }
        return (
            <div className="controls">
                {renderStartStopButton()}
                <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
            </div>
        )
    }
})

export default Controls;