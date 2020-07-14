import React from "react";
import decoration from "../assets/Decoration.svg";
import { HashRouter as Router} from "react-router-dom";
import HomeNavigationAuthContainer from './HomeNavigationAuthContainer';

class FormBanner extends React.Component {
  render() {
    return (
      <section className="form-banner">
       <div className="form-banner__img-wrapper"></div>
       <Router>
         <HomeNavigationAuthContainer />
          <div className="form-banner__content">
            <h1 className="form-banner__content__title">
              Oddaj rzeczy, których już nie chcesz<br></br><span>potrzebującym</span>
            </h1>
            <img
              className="decoration"
              src={decoration}
              alt="decoration"
            />
            <h1>Wystarczą 4 proste kroki:</h1>
            <div className="form-banner__steps">
              <p className="form-banner__step">1 Wybierz rzeczy</p>
              <div className="form-banner__step-border form-banner__step-border-1"></div>
              <p className="form-banner__step">2 Spakuj to w worki</p>
              <div className="form-banner__step-border form-banner__step-border-2"></div>
              <p className="form-banner__step">3 Wybierz fundację</p>
              <div className="form-banner__step-border form-banner__step-border-3"></div>
              <p className="form-banner__step">4 Zamów kuriera</p>
              <div className="form-banner__step-border form-banner__step-border-4"></div>
            </div>
          </div>
        </Router>
      </section>
    );
  }
}

export default FormBanner;