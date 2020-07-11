import React from "react";
import decoration from "../assets/Decoration.svg";
import aboutUsImg from "../assets/People.jpg";
import signature from "../assets/Signature.svg";

class HomeAboutUs extends React.Component {
  render() {
    return (
      <section className="about-us" id="o-nas">
        <div className="about-us__wrapper">
          <h1 className="about-us__title">O nas</h1>
          <img
            className="decoration"
            src={decoration}
            alt="decoration"
          />
          <p className="about-us__text">
            Nori grape silver beet broccoli kombu beet<br></br>greens fava bean
            potato quandong celery.<br></br>Bunya nuts black-eyed pea prairie
            turnip leek<br></br>lentil turnip greens parsnip.
          </p>
          <img className="about-us__signature" src={signature} alt="signature"></img>
        </div>
        <img
          className="about-us__img"
          src={aboutUsImg}
          alt="Smiling people"
        ></img>
      </section>
    );
  }
}

export default HomeAboutUs;
