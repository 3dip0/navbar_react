import React from 'react';
import './App.css';
import Navbar from './components/Navbar/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Monitor from './pages/monitor';
import SignIn from './pages/signin';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route path='/monitor' component={Monitor} />
        <Route path='/signin' component={SignIn} />
      </Switch>
    </Router>
  );
}

export default App;
