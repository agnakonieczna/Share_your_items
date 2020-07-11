import React from "react";
import decoration from "../assets/Decoration.svg";
import fbImg from "../assets/Facebook.svg";
import InstImg from "../assets/Instagram.svg";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      nameErr: "",
      emailErr: "",
      messageErr: "",
      successMsg: "",
    };
  }

  validate = () => {
    let nameErr = "";
    let emailErr = "";
    let messageErr = "";

    const { name, email, message } = this.state;

    if (!name.length || name.indexOf(" ") !== -1) {
      nameErr = "Podane imię jest nieprawidłowe!";
    }

    const emailValidation = function validateEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    };

    if (emailValidation(email) === false) {
      emailErr = "Podany email jest nieprawidłowy!";
    }

    if (message.length < 119) {
      messageErr = "Wiadomość musi mieć conajmniej 120 znaków!";
    }

    if (nameErr || emailErr || messageErr) {
      this.setState({
        nameErr,
        emailErr,
        messageErr,
      });

      return false;
    }

    return true;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let isValid = this.validate();

    if (isValid) {
      fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json" 
        },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          message: this.state.message,
        }),
      })
      .then((resp) => resp.json())

      this.setState({
        name: "",
        email: "",
        message: "",
        nameErr: "",
        emailErr: "",
        messageErr: "",
        successMsg: "Wiadomość została wysłana! Wkrótce się skontaktujemy.",
      });
    }
  };

  render() {
    return (
      <footer className="footer" id="kontakt">
        <div className="footer__img-wrapper"></div>
        <div className="footer__content">
          <h1 className="footer__title">Skontaktuj się z nami</h1>
          <img className="decoration" src={decoration} alt="decoration" />
          <p className="success">{this.state.successMsg}</p>
          <form className="form" onSubmit={this.handleSubmit}>
            <div className="form_row-1">
              <div className="form_row-1__name">
                <label htmlFor="name">Wpisz swoje imię</label>
                <br></br>
                <input
                  className={
                    this.state.nameErr
                      ? "form__name error-border"
                      : "form__name"
                  }
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Imię"
                  value={this.state.name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                ></input>
                <p className="error">{this.state.nameErr}</p>
              </div>
              <div className="form_row-1__email">
                <label htmlFor="email">Wpisz swój email</label>
                <br></br>
                <input
                  className={
                    this.state.emailErr
                      ? "form__email error-border"
                      : "form__email"
                  }
                  name="email"
                  id="email"
                  type="text"
                  placeholder="E-mail"
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                ></input>
                <p className="error">{this.state.emailErr}</p>
              </div>
            </div>
            <div className="form__row-2">
              <label htmlFor="message">Wpisz swoją wiadomość</label>
              <br></br>
              <textarea
                rows="5"
                className={
                  this.state.messageErr
                    ? "form__message error-border"
                    : "form__message"
                }
                id="message"
                placeholder="Wpisz wiadomosć"
                value={this.state.message}
                onChange={(e) => this.setState({ message: e.target.value })}
              />
              <p className="error">{this.state.messageErr}</p>
            </div>
            <input
              className="form__submit"
              type="submit"
              value="Wyślij"
            ></input>
          </form>
        </div>
        <div className="footer__copyrights">
          <p>Copyright by Coders Lab</p>
        </div>
        <div className="footer__icons">
        <img src={fbImg} alt="facebook-icon"></img>
          <img src={InstImg} alt="instagram-icon"></img>
        </div>
      </footer>
    );
  }
}

export default Footer;
