import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import logo from './logo.svg';
import './App.css';

import rootReducer from './rootReducer';

import MovieList from './MovieList';
import MovieDetail from './MovieDetail';

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store} >
    <Router>
      <div className="App">
        <header className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        </header>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route path="/:id" component={MovieDetail} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
