import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'; 
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import Form from './components/Form';


function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/logowanie" component={Login} />
          <Route path="/rejestracja" component={Register} />
          <Route path="/wylogowano" component={Logout} />
          <Route path="/oddaj-rzeczy" component={Form} />
        </Switch>
      </Router>
  );
}

export default App;
