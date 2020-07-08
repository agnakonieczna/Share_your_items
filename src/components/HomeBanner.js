import React from "react";
import homeImg from "../assets/Home-Hero-Image.jpg";
import decoration from "../assets/Decoration.svg";
import { HashRouter as Router, NavLink as Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

class HomeBanner extends React.Component {
  render() {
    return (
      <section className="banner">
        <img
          className="banner__img"
          height="10rem"
          src={homeImg}
          alt="home-img"
        ></img>
        <Router>
          <header className="header">
            <nav className="header__nav-login">
              <Link to="/logowanie">Zaloguj się</Link>
              <Link to="/rejestracja">Załóż konto</Link>
            </nav>
            <nav className="header__nav-page">
              <Link activeClassName="active-link" exact to="/">Start</Link>
              <ScrollLink
                to="o-co-chodzi"
                activeClass="active-link"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                O co chodzi?
              </ScrollLink>
              <ScrollLink
                to=""
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                O nas
              </ScrollLink>
              <ScrollLink
                to=""
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Fundacja i organizacje
              </ScrollLink>
              <ScrollLink
                to=""
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Kontakt
              </ScrollLink>
            </nav>
          </header>
          <div className="banner__content">
            <h1 className="banner__content__title">
              Zacznij pomagać!<br></br>Oddaj niechciane rzeczy w zaufane ręce
            </h1>
            <img
              className="banner__content__img"
              src={decoration}
              alt="decoration"
            />
            <div className="banner__content__btns">
              <button className="banner__content__btn"><Link to="/logowanie">Oddaj<br></br>rzeczy</Link></button>
              <button className="banner__content__btn"><Link to="/logowanie">Zorganizuj<br></br>zbiórkę</Link></button>
            </div>
          </div>
        </Router>
      </section>
    );
  }
}

export default HomeBanner;
