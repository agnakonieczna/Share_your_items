import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'; 
import Home from './components/Home/components/Home';
import Logout from './components/Logout/Logout';
import store from './redux/store';
import { Provider } from "react-redux";
import LoginContainer from './components/Login/LoginContainer';
import RegisterContainer from './components/Register/RegisterContainer';
import FormPage from './components/Form/components/FormPage';

function App() {
  return (
    <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/logowanie" component={LoginContainer} />
            <Route path="/rejestracja" component={RegisterContainer} /> 
            <Route path="/wylogowano" component={Logout} />
            <Route path="/oddaj-rzeczy" component={FormPage} />
          </Switch>
        </Router>
      </Provider>
  );
}

export default App;
