import React, { Component } from 'react';
import axios from 'axios';
import LazyLoad from 'react-lazyload';
import './App.css';
import Search from './Search';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route // for later
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {


  render() {
    return (
      <div>
         <Router>
            <div>

            <Route name="App" path="/" component={Search} />
              <Route name="App" path="/key/?:query" component={Search} />
            </div>
          </Router>
      </div>
    );
  }
}

export default App;

