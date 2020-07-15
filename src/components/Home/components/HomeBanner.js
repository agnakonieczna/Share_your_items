import React from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import decoration from '../../../assets/Decoration.svg';
import HomeNavigationNonAuth from './HomeNavigationNonAuth';
import HomeNavigationAuthContainer from '../containers/HomeNavigationAuthContainer';

class HomeBanner extends React.Component {
  render() {
    return (
      <section className="banner">
        <div className="banner__img-wrapper"></div>
        <Router>
          {this.props.authUser ? (
            <HomeNavigationAuthContainer />
          ) : (
            <HomeNavigationNonAuth />
          )}
          <div className="banner__content">
            <h1 className="banner__content__title">
              Zacznij pomagać!<br></br>Oddaj niechciane rzeczy w zaufane ręce
            </h1>
            <img className="decoration" src={decoration} alt="decoration" />
            <div className="banner__content__btns">
              <button className="banner__content__btn">
                {this.props.authUser ? (
                  <Link to="/oddaj-rzeczy">
                    Oddaj<br></br>rzeczy
                  </Link>
                ) : (
                  <Link to="/logowanie">
                    Oddaj<br></br>rzeczy
                  </Link>
                )}
              </button>
              <button className="banner__content__btn">
                {this.props.authUser ? (
                  <Link to="/oddaj-rzeczy">
                    Zorganizuj<br></br>zbiórkę
                  </Link>
                ) : (
                  <Link to="/logowanie">
                    Zorganizuj<br></br>zbiórkę
                  </Link>
                )}
              </button>
            </div>
          </div>
        </Router>
      </section>
    );
  }
}

export default HomeBanner;
