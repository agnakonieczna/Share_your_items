import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import decoration from "../assets/Decoration.svg";
import { withFirebase } from "./Firebase";
import { withRouter } from 'react-router-dom';
import HomeNavigationNonAuth from './Home/components/HomeNavigationNonAuth';


class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordRepeat: "",
      emailErr: "",
      passwordErr: "",
      passwordRepeatErr: "",
      error: null
    };
  }

  validate = () => {
    let emailErr = "";
    let passwordErr = "";
    let passwordRepeatErr = "";

    const { email, password, passwordRepeat } = this.state;

    const emailValidation = function validateEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    };

    if (emailValidation(email) === false) {
      emailErr = "Podany email jest nieprawidłowy!";
    }

    if (password.length < 5) {
      passwordErr = "Podane hasło jest za krótkie!";
    }

    if(password.length < 5 || passwordRepeat !== password) {
        passwordRepeatErr = "Powtórzone hasło się nie zgadza!"
    }

    if (emailErr || passwordErr) {
      this.setState({
        emailErr,
        passwordErr,
        passwordRepeatErr
      });
      return false;
    }

    return true;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let isValid = this.validate();

    if (isValid) {
      const {email, password} = this.state;

      this.props.firebase.doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState({
          email: "",
          password: "",
          passwordRepeat: "",
          emailErr: "",
          passwordErr: "",
          passwordRepeatErr: ""
        });
        console.log('redirect?');
        this.props.history.push("/");
       
      })
      .catch(error => {
        this.setState({ error });
      });

      this.props.firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? this.props.userLoggedIn(authUser)
          : this.props.userLoggedOut()
      });

    }
  };

  render() {
    return (
      <Router>
        <HomeNavigationNonAuth />
        <div className="login">
          <h1 className="login__title">Załóż konto</h1>
          <img src={decoration} className="decoration" alt=""></img>
          <form className="login__form" onSubmit={this.handleSubmit}>
            <div className="login__register__content">
              <label htmlFor="email">Email</label>
              <br></br>
              <input
                className={
                  this.state.emailErr
                    ? "login__input login-error"
                    : "login__input"
                }
                id="email"
                type="text"
                value={this.state.email}
                onChange={(e) => {
                  this.setState({ email: e.target.value });
                }}
              ></input>
              <p className="error">{this.state.emailErr}</p>
              <label htmlFor="password">Hasło</label>
              <br></br>
              <input
                className={
                  this.state.passwordErr
                    ? "login__input login-error"
                    : "login__input"
                }
                id="password"
                type="password"
                value={this.state.password}
                onChange={(e) => {
                  this.setState({ password: e.target.value });
                }}
              ></input>
              <p className="error">{this.state.passwordErr}</p>
              <label htmlFor="passwordRepeat">Powtórz hasło</label>
              <br></br>
              <input
                className={
                  this.state.passwordRepeatErr
                    ? "login__input login-error"
                    : "login__input"
                }
                id="passwordRepeat"
                type="password"
                value={this.state.passwordRepeat}
                onChange={(e) => {
                  this.setState({ passwordRepeat: e.target.value });
                }}
              ></input>
              <p className="error">{this.state.passwordRepeatErr}</p>
            </div>
            <div className="login__links">
              <Link to="/logowanie">Zaloguj się</Link>
              <input type="submit" value="Załóż konto"></input>
            </div>
          </form>
        </div>
      </Router>
    );
  }
}

const Register = withRouter(withFirebase(RegisterForm))

export default Register;
