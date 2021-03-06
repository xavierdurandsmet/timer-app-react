var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Timer = require('Timer');
var CountDown = require('CountDown');
import Tweets from 'Tweets';
import Authenticate from 'Authenticate';

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Authenticate} />
    <Route path="/dashboard" component={Main}>
      <Route path="countdown" component={CountDown} />
      <Route path="tweets" component={Tweets} />
      <IndexRoute component={Timer} />
    </Route>
  </Router>,
  document.getElementById('app')
);
