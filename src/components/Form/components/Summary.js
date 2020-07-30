import React from "react";
import icon1 from "../../../assets/Icon-1.svg";
import icon4 from "../../../assets/Icon-4.svg";

class Summary extends React.Component {
  handleClickBack = (e) => {
    this.props.changeDisplayBack(e);
  };

  handleSubmit = (e) => {
    this.props.handleSubmit(e)
  }

  render() {
    const {
      bags,
      type,
      localization,
      helpGroups,
      street,
      city,
      postCode,
      phone,
      date,
      hour,
      notes
    } = this.props;

    return (
      <div className="form__step__content">
        <div className="form__step__content__wrapper">
          <h1 className="form__step__content__title">
            Podsumowanie Twojej darowizny
          </h1>
          <div className="form__step__content__summary">
            <p className="form__step__content__summary__title">Oddajesz:</p>
            <div className="form__step__content__summary__row-icons">
              <img
                className="form__step__content__summary__icons"
                src={icon1}
                alt="icon"
              ></img>
              <span>
                {bags} {bags === "1" ? "worek" : ""}
                {bags === "2" || bags === "3" ? "worki" : ""}
                {bags === "5" ? "worków" : ""}, {type},
                {helpGroups.map((el, index) => {
                  return <span key={index}>{el.name} </span>
                })}
              </span>
            </div>
            <div className="form__step__content__summary__row-icons">
              <img
                className="form__step__content__summary__icons"
                src={icon4}
                alt="icon"
              ></img>
              <span>dla lokalizacji: {localization}</span>
            </div>
            <div className="form__step__content__summary__rows-address-and-time">
              <div className="form__step__content__summary__row-address">
                <p className="form__step__content__summary__title">
                  Adres odbioru:
                </p>
                <div className="form__step__content__summary__row-address__row">
                  <span>Ulica</span>
                  <span>{street}</span>
                </div>
                <div className="form__step__content__summary__row-address__row">
                  <span>Miasto</span>
                  <span>{city}</span>
                </div>
                <div className="form__step__content__summary__row-address__row">
                  <span>Kod pocztowy</span>
                  <span>{postCode}</span>
                </div>
                <div className="form__step__content__summary__row-address__row">
                  <span>Numer telefonu</span>
                  <span>{phone}</span>
                </div>
              </div>
              <div className="form__step__content__summary__row-time">
                <p className="form__step__content__summary__title">
                  Termin odbioru:
                </p>
                <div className="form__step__content__summary__row-time__row">
                  <span>Data</span>
                  <span>{date}</span>
                </div>
                <div className="form__step__content__summary__row-time__row">
                  <span>Godzina</span>
                  <span>{hour}</span>
                </div>
                <div className="form__step__content__summary__row-time__row">
                  <span>Uwagi dla kuriera</span>
                  <span>{notes}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={this.handleClickBack}
          className="form__step__btn form__step__btn-back"
        >
          Wstecz
        </button>
        <button
          onClick={this.handleSubmit}
          className="form__step__btn form__step__btn-next"
        >  
        Potwierdzam
        </button>
      </div>
    );
  }
}

export default Summary;
