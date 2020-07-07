import React from 'react';
import { HashRouter as Router, Switch, Link, Route } from 'react-router-dom'; 
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import Form from './components/Form';


function App() {
  return (
    <div className="container">
      <Router>
        <Link to="/">Home</Link> 
        <Link to="/logowanie">Logowanie</Link> 
        <Link to="/rejestracja">Rejestracja</Link> 
        <Link to="/wylogowano">Wylogowano</Link> 
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/logowanie" component={Login} />
          <Route path="/rejestracja" component={Register} />
          <Route path="/wylogowano" component={Logout} />
          <Route path="/oddaj-rzeczy" component={Form} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
