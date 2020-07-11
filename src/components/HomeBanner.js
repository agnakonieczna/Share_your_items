import React from "react";
import homeImg from "../assets/Home-Hero-Image.jpg";
import decoration from "../assets/Decoration.svg";
import { HashRouter as Router, NavLink, Link } from "react-router-dom";
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
              <NavLink activeClassName="active" exact to="/">Start</NavLink>
              <ScrollLink
                to="o-co-chodzi"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
              >
                O co chodzi?
              </ScrollLink>
              <ScrollLink
                to="o-nas"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
              >
                O nas
              </ScrollLink>
              <ScrollLink
                to="fundacje-i-organizacje"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
              >
                Fundacje i organizacje
              </ScrollLink>
              <ScrollLink
                to="kontakt"
                activeClass="active"
                spy={true}
                smooth={true}
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
              className="decoration"
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
