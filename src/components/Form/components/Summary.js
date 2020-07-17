import React from "react";

class Summary extends React.Component {
  handleClickBack = (e) => {
    this.props.changeDisplayBack(e)
  }

  render() {
    return (
      <div className="form__step__content">
        <div className="form__step__content__wrapper">
          <h1 className="form__step__content__title">
            Podsumowanie Twojej darowizny
          </h1>
          <p>Oddajesz</p>
          <p>Adres odbioru</p>
          <p>Termin odbioru</p>
        </div>
        <button onClick={this.handleClickBack} className="form__step__btn form__step__btn-back">Wstecz</button>
        <input
          className="form__step__btn form__step__btn-next"
          type="submit"
          value="Potwierdzam"
        />
      </div>
    );
  }
}

export default Summary;
