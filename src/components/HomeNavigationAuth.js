import React from "react";
import { HashRouter as Router, NavLink, Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { withFirebase } from '../components/Firebase';

function HomeNavigationAuth(props) {
  return (
    <Router>
      <header className="header">
        <nav className="header__nav-login">
          <span className="header__nav-login__name">Cześć, {props.authUser.email}!</span>
          <Link className="header__nav-login__share-items" to="/oddaj-rzeczy">Oddaj rzeczy</Link>
          <Link className="header__nav-login__logout" to="/wylogowano" onClick={props.firebase.doSignOut}>Wyloguj</Link>
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

export default withFirebase(HomeNavigationAuth);
