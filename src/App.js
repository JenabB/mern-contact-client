import React from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Detail from './pages/Detail';
import Home from './pages/Home';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:id" component={Detail} />
      </Switch>
    </Router>
  );
}
