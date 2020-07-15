import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import HomeNavigationNonAuth from './Home/components/HomeNavigationNonAuth';
import decoration from "../assets/Decoration.svg";

function Logout() {
  return (
    <Router>
      <HomeNavigationNonAuth />
      <div className="logout">
        <h1 className="logout__title">
          Wylogowanie nastąpiło<br></br>pomyślnie!
        </h1>
        <img className="decoration" src={decoration} alt="decoration" />
        <Link className="logout__link" to="/">
          Strona główna
        </Link>
      </div>
    </Router>
  );
}

export default Logout;
