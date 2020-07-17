import React from "react";

class Step4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      street: "",
      city: "",
      postalCode: "",
      telephone: "",
      date: "",
      hour: "",
      notes: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleClickBack = (e) => {
    this.props.changeDisplayBack(e);
  };

  handleClickNext = (e) => {
    this.props.changeDisplayNext(e);
  };

  render() {
    return (
      <>
        <div className="form__step__info">
          <h1 className="form__step__info__title">Ważne!</h1>
          <p>Podaj adres oraz termin odbioru rzeczy.</p>
        </div>
        <div className="form__step__content">
          <div className="form__step__content__wrapper">
            <h2>Krok 4/4</h2>
            <h1 className="form__step__content__title">
              Podaj adres oraz termin odbioru rzeczy przez kuriera
            </h1>
            <div className="form__step__content__flex">
              <div className="form__step__content__address">
                <p className="form__step__content__address__title">Adres odbioru:</p>
                <div>
                <label htmlFor="street">
                  Ulica </label>
                  <input
                    className="form__step__content__address__input"
                    type="text"
                    id="street"
                    value={this.state.street}
                    onChange={this.handleChange}
                  ></input>
                </div>
                <div>
                <label htmlFor="city">
                  Miasto   </label>
                  <input
                    className="form__step__content__address__input"
                    type="text"
                    id="city"
                    value={this.state.city}
                    onChange={this.handleChange}
                  ></input>
                </div>
               <div>
               <label htmlFor="postalCode">
                  Kod pocztowy</label>
                  <input
                    className="form__step__content__address__input"
                    type="text"
                    id="postalCode"
                    value={this.state.postalCode}
                    onChange={this.handleChange}
                  ></input>
               </div>
               <div>
               <label htmlFor="telephone">
                  Numer telefonu</label>
                  <input
                   className="form__step__content__address__input"
                    type="text"
                    id="telephone"
                    value={this.state.telephone}
                    onChange={this.handleChange}
                  ></input>
               </div>
              </div>
              <div className="form__step__content__time">
                <p className="form__step__content__time__title">Termin odbioru:</p>
                <div>
                <label htmlFor="date">
                  Data   </label>
                  <input
                  className="form__step__content__time__input"
                    type="text"
                    id="date"
                    value={this.state.date}
                    onChange={this.handleChange}
                  ></input>
                </div>
                <div>
                <label htmlFor="hour">
                  Godzina</label>
                  <input
                    className="form__step__content__time__input"
                    type="text"
                    id="hour"
                    value={this.state.hour}
                    onChange={this.handleChange}
                  ></input>
                </div>
                <div>
                <label htmlFor="notes">
                  Uwagi dla kuriera</label>
                  <textarea
                    rows="4"
                    className="form__step__content__textarea"
                    type="text"
                    id="notes"
                    value={this.state.notes}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <button
              className="form__step__btn form__step__btn-back"
              id="2"
              onClick={this.handleClickBack}
            >
              Wstecz
            </button>
            <button
              className="form__step__btn form__step__btn-next"
              id="3"
              onClick={this.handleClickNext}
            >
              Dalej
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Step4;
