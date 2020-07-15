import React from "react";

class Step1 extends React.Component {
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

  handleClick = (e) => {
    this.props.changeDisplay1(e);
  };

  render() {
    return (
      <section className="form__step">
        <div className="form__step__info">
          <h2 className="form__step__info__title">Ważne!</h2>
          <p>
            Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy
            wiedzieć komu najlepiej je przekazać
          </p>
        </div>
        <div className="form__step__content">
          <div className="form__step__content__wrapper">
            <h2 className="form__step__content__step">Krok 1/4</h2>
            <h1 className="form__step__content__title">
              Zaznacz, co chcesz oddać:
            </h1>
            <div className="form__step__content__checkboxes">
              <label
                className="form__step__content__checkbox"
                htmlFor="clother-for-reuse"
              >
                <input
                  type="radio"
                  id="clothes-for-reuse"
                  value="clothes-for-reuse"
                  checked={this.state.selected === "clothes-for-reuse"}
                  onChange={this.handleChange}
                />
                ubrania, które nadają się do ponownego użycia
              </label>
              <label
                className="form__step__content__checkbox"
                htmlFor="clothes-to-garbage"
              >
                <input
                  type="radio"
                  id="clothes-to-garbage"
                  value="clothes-to-garbage"
                  checked={this.state.selected === "clothes-to-garbage"}
                  onChange={this.handleChange}
                />
                ubrania do wyrzucenia
              </label>
              <label className="form__step__content__checkbox" htmlFor="toys">
                <input
                  type="radio"
                  id="toys"
                  value="toys"
                  checked={this.state.selected === "toys"}
                  onChange={this.handleChange}
                />
                zabawki
              </label>
              <label className="form__step__content__checkbox" htmlFor="books">
                <input
                  type="radio"
                  id="books"
                  value="books"
                  checked={this.state.selected === "books"}
                  onChange={this.handleChange}
                ></input>
                książki
              </label>
              <label className="form__step__content__checkbox" htmlFor="others">
                <input
                  type="radio"
                  id="others"
                  value="others"
                  checked={this.state.selected === "others"}
                  onChange={this.handleChange}
                ></input>
                inne
              </label>
            </div>
          </div>
          <div className="form__step__btns">
            <button
              className="form__step__btn"
              id="1"
              onClick={this.handleClick}
            >
              Dalej
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default Step1;
