var React = require('react');
import { Link } from 'react-router'; 

const Introduction = React.createClass({
    render() {
        return (
            <div>
                <h1>Introduction page</h1>
                <button Link to="/component">Go to App</button>
            </div>
        )
    }
});

module.exports = Introduction;