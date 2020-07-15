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
      [e.target.id]: e.target.value
    })
  }

  render() {
    return (
      <section className="form__step-4">
        <div>
          <h2>Ważne!</h2>
          <p>Podaj adres oraz termin odbioru rzeczy.</p>
        </div>
        <div>
          <p>Krok 4/4</p>
          <h1>Podaj adres oraz termin odbioru rzeczy przez kuriera</h1>
          <div>
            <p>Adres odbioru:</p>
            <label htmlFor="street">Ulica
              <input
                type="text"
                id="street"
                value={this.state.street}
                onChange={this.handleChange}
              ></input>
            </label>
            <label htmlFor="city">Miasto
              <input
                type="text"
                id="city"
                value={this.state.city}
                onChange={this.handleChange}
              ></input>
            </label>
            <label htmlFor="postalCode">Kod pocztowy
              <input
                type="text"
                id="postalCode"
                value={this.state.postalCode}
                onChange={this.handleChange}
              ></input>
            </label>
            <label htmlFor="telephone">Numer telefonu
              <input
                type="text"
                id="telephone"
                value={this.state.telephone}
                onChange={this.handleChange}
              ></input>
            </label>
          </div>
          <div>
            <p>Termin odbioru:</p>
            <label htmlFor="date">Data
              <input
                type="text"
                id="date"
                value={this.state.date}
                onChange={this.handleChange}
              ></input>
            </label>
            <label htmlFor="hour">Godzina
              <input
                type="text"
                id="hour"
                value={this.state.hour}
                onChange={this.handleChange}
              ></input>
            </label>
            <label htmlFor="notes">Uwagi dla kiriera
              <input
                type="text"
                id="notes"
                value={this.state.notes}
                onChange={this.handleChange}
              ></input>
            </label>
          </div>
        </div>
      </section>
    );
  }
}

export default Step4;
