import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'; 
import Home from './components/Home';
import Logout from './components/Logout';
import Form from './components/Form';
import store from './redux/store';
import { Provider } from "react-redux";
import LoginContainer from './components/LoginContainer';
import RegisterContainer from './components/RegisterContainer';

function App() {
  return (
    <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/logowanie" component={LoginContainer} />
            <Route path="/rejestracja" component={RegisterContainer} /> 
            <Route path="/wylogowano" component={Logout} />
            <Route path="/oddaj-rzeczy" component={Form} />
          </Switch>
        </Router>
      </Provider>
  );
}

export default App;
