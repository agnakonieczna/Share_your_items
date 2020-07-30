import React from "react";

class Step1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: localStorage.getItem('selectedType') || "",
      typeErr: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      type: e.target.value,
      typeErr: ""
    });
    localStorage.setItem('selectedType', e.target.value)
  };

  handleClick = (e) => {
    if(!this.state.type) {
      this.setState({
        typeErr: "Jedno pole musi być wybrane!",
      })
    } else {
      this.props.changeDisplayNext(e);
      this.props.addType(this.state.type);
    }
  };

  render() {
    return (
      <>
        <div className="form__step__info">
          <h2 className="form__step__info__title">Ważne!</h2>
          <p>
            Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy
            wiedzieć komu najlepiej je przekazać
          </p>
        </div>
        <div className="form__step__content">
          <div className="form__step__content__wrapper">
            <h2>Krok 1/4</h2>
            <h1 className="form__step__content__title">
              Zaznacz, co chcesz oddać:
            </h1>
            <label
              className="form__step__content__radio"
              htmlFor="clothes-for-reuse"
            >
              <input
                className="form__step__content__radio__input"
                type="radio"
                id="clothes-for-reuse"
                value="ubrania, które nadają się do ponownego użycia"
                checked={this.state.type === "ubrania, które nadają się do ponownego użycia"}
                onChange={this.handleChange}
              />
              <span className="form__step__content__radio__control"></span>
              <span>ubrania, które nadają się do ponownego użycia</span>
            </label>
            <label
              className="form__step__content__radio"
              htmlFor="clothes-to-garbage"
            >
              <input
                className="form__step__content__radio__input"
                type="radio"
                id="clothes-to-garbage"
                value="ubrania do wyrzucenia"
                checked={this.state.type === "ubrania do wyrzucenia"}
                onChange={this.handleChange}
              />
              <span className="form__step__content__radio__control"></span>
              <span>ubrania do wyrzucenia</span>
            </label>
            <label className="form__step__content__radio" htmlFor="toys">
              <input
                className="form__step__content__radio__input"
                type="radio"
                id="toys"
                value="zabawki"
                checked={this.state.type === "zabawki"}
                onChange={this.handleChange}
              />
              <span className="form__step__content__radio__control"></span>
              <span>zabawki</span>
            </label>
            <label className="form__step__content__radio" htmlFor="books">
              <input
                className="form__step__content__radio__input"
                type="radio"
                id="books"
                value="książki"
                checked={this.state.type === "książki"}
                onChange={this.handleChange}
              ></input>
              <span className="form__step__content__radio__control"></span>
              <span>książki</span>
            </label>
            <label className="form__step__content__radio" htmlFor="others">
              <input
                className="form__step__content__radio__input"
                type="radio"
                id="others"
                value="inne"
                checked={this.state.type === "inne"}
                onChange={this.handleChange}
              ></input>
              <span className="form__step__content__radio__control"></span>
              <span>inne</span>
            </label>
            <p className="form__step__error">{this.state.typeErr}</p>
          </div>
          <div>
            <button
              className="form__step__btn form__step__btn-back"
              onClick={this.handleClick}
            >
              Dalej
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Step1;
