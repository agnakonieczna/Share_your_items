import React from 'react';
import decoration from '../../../assets/Decoration.svg';
import { HashRouter as Router} from 'react-router-dom';
import HomeNavigationAuthContainer from '../../Home/containers/HomeNavigationAuthContainer';

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
            <h1 className="form-banner__content__title">Wystarczą 4 proste kroki:</h1>
            <div className="form-banner__steps">
              <div className="form-banner__step">
                <p className="form-banner__step__text"><span>1</span><br></br>Wybierz<br></br>rzeczy</p>
              </div>
              <div className="form-banner__step">
                <p className="form-banner__step__text"><span>2</span><br></br>Spakuj je<br></br>w worki</p>
              </div>
              <div className="form-banner__step">
                <p className="form-banner__step__text"><span>3</span><br></br>Wybierz<br></br>fundację</p>
              </div>   
              <div className="form-banner__step">
                <p className="form-banner__step__text"><span>4</span><br></br>Zamów<br></br>kuriera</p>
              </div>
            </div>
          </div>
        </Router>
      </section>
    );
  }
}

export default FormBanner;