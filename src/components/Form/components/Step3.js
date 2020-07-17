import React from "react";

class Step3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "",
      kids: false,
      singleMothers: false,
      homeless: false,
      disabled: false,
      elderly: false,
      checked: [],
      checkedErr: "Przynajmiej jedno pole musi zostać zaznaczone!",
      specificOrganisation: "",
    };
  }

  localizactionSelect = (e) => {
    this.setState({
      selected: e.target.value,
    });
  };

  checkboxSelection = (e) => {
    this.setState({
      [e.target.id]: e.target.checked,
    });

    const checkedTempArr = [...this.state.checked];
    let index;

    if (e.target.checked) {
      checkedTempArr.push(e.target.id);
    } else {
      index = checkedTempArr.indexOf(e.target.id);
      checkedTempArr.splice(index, 1);
    }

    this.setState(
      {
        checked: checkedTempArr,
      },
      () => {
        if (this.state.checked.length > 0) {
          this.setState({
            checkedErr: "",
          });
        } else {
          this.setState({
            checkedErr: "Przynajmiej jedno pole musi zostać zaznaczone!",
          });
        }
      }
    );
  };

  organisationInput = (e) => {
    this.setState({
      specificOrganisation: e.target.value,
    });
  };

  handleClickBack = (e) => {
    this.props.changeDisplayBack(e);
  };

  handleClickNext = (e) => {
    this.props.changeDisplayNext(e);
    this.props.addLocalization(this.state.selected);
    this.props.addHelpGroups(this.state.checked);
  };

  render() {
    return (
      <>
        <div className="form__step__info">
          <h1 className="form__step__info__title">Ważne!</h1>
          <p>
            Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w
            wyszukiwarce. Możesz też filtrować organizacje<br></br> po ich
            lokalizacji bądź celu pomocy.
          </p>
        </div>
        <div className="form__step__content">
          <div className="form__step__content__wrapper">
            <h2>Krok 3/4</h2>
            <h1 className="form__step__content__title">Lokalizacja:</h1>
            <select
              value={this.state.selected}
              onChange={this.localizactionSelect}
              className="form__step__content__select"
            >
              <option>-wybierz-</option>
              <option value="Poznań">Poznań</option>
              <option value="Warszawa">Warszawa</option>
              <option value="Kraków">Kraków</option>
              <option value="Wrocław">Wrocław</option>
              <option value="Katowice">Katowice</option>
            </select>
            <h2 className="form__step__content__title-step-3">
              Komu chcesz pomóc?
            </h2>
            <div className="form__step__content__checkboxes">
              <div className="form__step__content__checkboxes__row">
              <label className="form__step__content__checkbox" htmlFor="kids">dzieciom
                <input
                  className="hidden"
                  type="checkbox"
                  checked={this.state.kids}
                  onChange={this.checkboxSelection}
                  id="kids"
                ></input>
              </label>
              <label className="form__step__content__checkbox" htmlFor="singleMothers">
                samotnym matkom
                <input
                  className="hidden"
                  type="checkbox"
                  checked={this.state.singleMothers}
                  onChange={this.checkboxSelection}
                  id="singleMothers"
                ></input>
              </label>
              <label className="form__step__content__checkbox" htmlFor="homeless">
                bezdomnym
                <input
                  className="hidden"
                  type="checkbox"
                  checked={this.state.homeless}
                  onChange={this.checkboxSelection}
                  id="homeless"
                ></input>
              </label>
              </div>
              <div>
              <label className="form__step__content__checkbox" htmlFor="disabled">
                niepełnosprawnym
                <input
                  className="hidden"
                  type="checkbox"
                  checked={this.state.disabled}
                  onChange={this.checkboxSelection}
                  id="disabled"
                ></input>
              </label>
              <label className="form__step__content__checkbox" htmlFor="elderly">
                osobom starszym
                <input
                  className="hidden"
                  type="checkbox"
                  checked={this.state.elderly}
                  onChange={this.checkboxSelection}
                  id="elderly"
                ></input>
              </label>
              <p className="form__step__error">{this.state.checkedErr}</p>
              </div>
            </div>
            <label
              className="form__step__content__title"
              htmlFor="specific-organisation"
            >
              Wpisz nazwę konkretnej organizacji (opcjonalnie)
            </label>
            <br></br>
            <input
              className="form__step__content__input"
              type="text"
              id="specific-organisation"
              value={this.state.specificOrganisation}
              onChange={this.organisationInput}
            ></input>
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
              disabled={!this.state.checked.length}
            >
              Dalej
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Step3;
