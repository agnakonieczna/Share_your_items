import React from "react";

class Step4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      street: localStorage.getItem("street") || "",
      streetErr: "",
      city: localStorage.getItem("city") || "",
      cityErr: "",
      postCode: localStorage.getItem("postCode") || "",
      postCodeErr: "",
      phone: localStorage.getItem("phone") || "",
      phoneErr: "",
      date: localStorage.getItem("date") || "",
      dateErr: "",
      hour: localStorage.getItem("hour") || "",
      hourErr: "",
      notes: localStorage.getItem("notes") || "",
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

  validate = () => {
    let streetErr = "";
    let cityErr = "";
    let postCodeErr = "";
    let phoneErr = "";
    let dateErr = "";
    let hourErr = "";

    if (this.state.street.length < 2) {
      streetErr = "Podana nazwa ulicy jest nieprawidłowa!";
    }

    if (this.state.city.length < 2) {
      cityErr = "Podana nazwa miasta jest nieprawidłowa!";
    }

    if (
      this.state.postCode.length < 6 ||
      this.state.postCode[2] !== "-"
    ) {
      postCodeErr = "Podany kod jest nieprawidłowy!";
    }

    if (!this.state.phone || typeof +this.state.phone !== "number" || this.state.phone.length > 9) {
      phoneErr = "Podany numer telefonu jest nieprawidłowy!";
    }

    if(!this.state.date) {
      dateErr = "Podana data jest nieprawidłowa!"
    }

    if(!this.state.hour) {
      hourErr = "Podana godzina jest nieprawidłowa!"
    }

    if (streetErr || cityErr || postCodeErr || phoneErr || dateErr || hourErr) {
      this.setState({
        streetErr,
        cityErr,
        postCodeErr,
        phoneErr,
        dateErr,
        hourErr
      });
      return false;
    }

    return true;
  };

  handleClickNext = (e) => {
    let isValid = this.validate()
    if(isValid) {
      this.props.changeDisplayNext(e);
      this.props.addAddressAndTime({
        street: this.state.street,
        city: this.state.city,
        postCode: this.state.postCode,
        phone: this.state.phone,
        date: this.state.date,
        hour: this.state.hour,
        note: this.state.note
      })
      localStorage.setItem("street", this.state.street);
      localStorage.setItem("city", this.state.city);
      localStorage.setItem("postCode", this.state.postCode);
      localStorage.setItem("phone", this.state.phone);
      localStorage.setItem("date", this.state.date);
      localStorage.setItem("hour", this.state.hour);
      localStorage.setItem("notes", this.state.notes);
    }
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
                <p className="form__step__content__address__title">
                  Adres odbioru:
                </p>
                <div>
                  <label htmlFor="street">Ulica </label>
                  <input
                    className="form__step__content__address__input"
                    type="text"
                    id="street"
                    value={this.state.street}
                    onChange={this.handleChange}
                  ></input>
                </div>
                <p className="form__step__error">{this.state.streetErr}</p>
                <div>
                  <label htmlFor="city">Miasto </label>
                  <input
                    className="form__step__content__address__input"
                    type="text"
                    id="city"
                    value={this.state.city}
                    onChange={this.handleChange}
                  ></input>
                </div>
                <p className="form__step__error">{this.state.cityErr}</p>
                <div>
                  <label htmlFor="postCode">Kod pocztowy</label>
                  <input
                    className="form__step__content__address__input"
                    type="text"
                    id="postCode"
                    value={this.state.postCode}
                    onChange={this.handleChange}
                  ></input>
                </div>
                <p className="form__step__error">{this.state.postCodeErr}</p>
                <div>
                  <label htmlFor="telephone">Numer telefonu</label>
                  <input
                    className="form__step__content__address__input"
                    type="text"
                    id="phone"
                    value={this.state.phone}
                    onChange={this.handleChange}
                  ></input>
                </div>
                <p className="form__step__error">{this.state.phoneErr}</p>
              </div>
              <div className="form__step__content__time">
                <p className="form__step__content__time__title">
                  Termin odbioru:
                </p>
                <div>
                  <label htmlFor="date">Data </label>
                  <input
                    className="form__step__content__time__input"
                    type="text"
                    id="date"
                    value={this.state.date}
                    onChange={this.handleChange}
                  ></input>
                </div>
                <p className="form__step__error">{this.state.dateErr}</p>
                <div>
                  <label htmlFor="hour">Godzina</label>
                  <input
                    className="form__step__content__time__input"
                    type="text"
                    id="hour"
                    value={this.state.hour}
                    onChange={this.handleChange}
                  ></input>
                </div>
                <p className="form__step__error">{this.state.hourErr}</p>
                <div>
                  <label htmlFor="notes">Uwagi dla kuriera</label>
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
