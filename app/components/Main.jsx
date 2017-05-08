var React = require('react');
import Nav from 'Nav';

const Main = React.createClass({
  // getInitialState() {
  //   return {
  //     countdowns: [
  //       {
  //         title: 'countdowns 0',
  //         id: '0'
  //       },
  //       {
  //         title: 'countdowns 1',
  //         id: '1'
  //       },
  //       {
  //         title: 'countdowns 2',
  //         id: '2'
  //       }
  //     ]
  //   }
  // },
  render () {
    return (
      <div >
        <Nav />
        <div className="row">
          <div className="column small-centered medium-6 large-4">
            {this.props.children}
          </div>
        </div>
      </div >
    );
  }
})

module.exports = Main;
