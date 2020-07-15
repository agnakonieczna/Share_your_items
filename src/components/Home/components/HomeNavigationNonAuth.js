import React from 'react';
import { HashRouter as Router, NavLink, Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

function HomeNavigationNonAuth() {
  return (
    <Router>
      <header className="header">
        <nav className="header__nav-login">
          <Link className="header__nav-login__login" to="/logowanie">Zaloguj się</Link>
          <Link className="header__nav-login__register" to="/rejestracja">Załóż konto</Link>
        </nav>
        <nav className="header__nav-page">
          <NavLink activeClassName="active" exact to="/">
            Start
          </NavLink>
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
    </Router>
  );
}

export default HomeNavigationNonAuth;
