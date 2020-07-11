import React from 'react';
import { HashRouter as Router, Link, NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import decoration from "../assets/Decoration.svg";


function Logout() {
        return(
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
          <div className="logout">
              <h1 className="logout__title">Wylogowanie nastąpiło<br></br>pomyślnie!</h1>
              <img
              className="decoration"
              src={decoration}
              alt="decoration"
            />
            <Link className="logout__link" to="/">Strona główna</Link>
          </div>
          </Router>
        )
}

export default Logout;