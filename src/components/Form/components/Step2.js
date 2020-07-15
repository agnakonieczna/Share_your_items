import React from "react";

class Step2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "",
    };
  }

  handleChange = (e) => {
    this.setState(
      {
        selected: e.target.value,
      },
      () => {
        console.log(this.state.selected);
      }
    );
  };

  handleClick1 = (e) => {
    this.props.changeDisplay2(e);
  };

  handleClick2 = (e) => {
    this.props.changeDisplay3(e);
  };

  render() {
    return (
      <section className="form__step">
        <div className="form__step__info">
          <h2 className="form__step__info__title">Ważne!</h2>
          <p>
            Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję
            jak spakować rzeczy znajdziesz <a href="/">TUTAJ</a>
          </p>
        </div>
        <div className="form__step__content">
          <div className="form__step__content__wrapper">
          <h2 className="form__step__content__step">Krok 2/4</h2>
          <h1 className="form__step__content__title">
            Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
          </h1>
          <label className="form__step__content__label" htmlFor="bags-select">
            Liczba 60l worków:
          </label>
          <select
            className="form__step__content__select"
            id="bags-select"
            value={this.state.selected}
            onChange={this.handleChange}
          >
            <option>- wybierz -</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          </div>
          <div className="form__step__btns">
            <button className="form__step__btn" id="2" onClick={this.handleClick1}>
              Wstecz
            </button>
            <button className="form__step__btn" id="3" onClick={this.handleClick2}>
              Dalej
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default Step2;
