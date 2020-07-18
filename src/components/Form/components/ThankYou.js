import React from "react";
import decoration from '../../../assets/Decoration.svg';

function ThankYou() {
  return (
    <div className="form__step__content">
      <div className="form__step__content__thank-you">
      <h1 className="form__step__content__thank-you__title">
        Dziękujemy za przesłanie formularza.<br></br>Na maila prześlemy wszelkie
        <br></br>informacje o odbiorze.
      </h1>
      <img className="decoration" src={decoration} alt="decoration" />
      </div>
    
    </div>
  );
}

export default ThankYou;
