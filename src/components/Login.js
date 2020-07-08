import React from 'react';
import { HashRouter as Router, NavLink as Link } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll";

class Login extends React.Component {
    render() {
        return(
            <Router>
            <header className="header">
                <nav className="header__nav-login">
                    <Link to="/logowanie">Zaloguj się</Link> 
                    <Link to="/rejestracja">Załóż konto</Link> 
                </nav>
                <nav className="header__nav-page">
                    <Link to="/">Start</Link>
                    <ScrollLink to="o-co-chodzi"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>O co chodzi?
                    </ScrollLink>
                    <ScrollLink to="">O nas</ScrollLink>
                    <ScrollLink to="">Fundacja i organizacje</ScrollLink>
                    <ScrollLink to="">Kontakt</ScrollLink>
                </nav>
            </header>
            </Router>
        )
    }
}

export default Login;