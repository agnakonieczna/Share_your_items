import React from "react";
import decoration from "../assets/Decoration.svg";
import { HashRouter as Router, Link } from "react-router-dom";
import HomeNavigationNonAuth from './HomeNavigationAuth';

class HomeBanner extends React.Component {
  render() {
    return (
      <section className="banner">
       <div className="banner__img-wrapper"></div>
       <Router>
         <HomeNavigationNonAuth />
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
