import React from "react";

class Step3 extends React.Component {
  render() {
    return (
      <section className="form__step">
        <div className="form__step__info">
          <h2 className="form__step__info__title">Ważne!</h2>
          <p>
            Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w
            wyszukiwarce. Możesz też filtrować organizacje<br></br> po ich
            lokalizacji bądź celu pomocy.
          </p>
        </div>
        <div className="form__step__content">
          <div className="form__step__content__wrapper">
          <h2 className="form__step__content__step">Krok 3/4</h2>
          <h1 className="form__step__content__title">Lokalizacja:</h1>
          <select className="form__step__content__select">
            <option>-wybierz-</option>
            <option>Poznań</option>
            <option>Warszawa</option>
            <option>Kraków</option>
            <option>Wrocław</option>
            <option>Katowice</option>
          </select>
          <h2 className="form__step__content__title">Komu chcesz pomóc?</h2>
          <label className="form__step__content__label" htmlFor="kids">dzieciom
            <input type="checkbox" id="kids"></input>
           </label>
           <label htmlFor="single-mothers">samotnym matkom
            <input type="checkbox" id="single-mothers"></input>
            </label>
            <label htmlFor="homeless">bezdomnym
            <input type="checkbox" id="homeless"></input>
            </label>
            <label htmlFor="disabled">niepełnosprawnym
            <input type="checkbox" id="disabled"></input>
            </label>
            <label htmlFor="elderly">osobom starszym
            <input type="checkbox" id="elderly"></input>
            </label>
          <label className="form__step__content__title" htmlFor="specific-organisation">
            Wpisz nazwę konkretnej organizacji
          <input type="text" id="specific-organisation"></input>
          </label>
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

export default Step3;
