import React from "react";

class Step3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localization: localStorage.getItem("selectedLocalization") || "",
      helpGroups: [
        { name: "dzieciom", checked: true },
        { name: "samotnym matkom", checked: false },
        { name: "bezdomnym", checked: false },
        { name: "niepełnosprawnym", checked: false },
        { name: "starszym osobom", checked: false },
      ],
      checked: JSON.parse(localStorage.getItem("selectedHelpGroups")) || ["dzieciom"],
      checkedErr: "",
      specificOrganisation: localStorage.getItem("selectedSpecificOrganisation") || "",
    };
  }

  localizactionSelect = (e) => {
    this.setState({
      localization: e.target.value,
    });
    localStorage.setItem("selectedLocalization", e.target.value);
  };

  checkboxSelection = (e) => {
    let tempArr = [...this.state.helpGroups];

    tempArr.forEach((el) => {
      if(el.name === e.target.id) {
        el.checked = el.checked ? false : true
      }
    });

    this.setState({
      helpGroups: tempArr
    })

    const checkedTempArr = tempArr.filter(el => el.checked === true)

    this.setState({
      checked: checkedTempArr
    }, () => {
      localStorage.setItem("selectedHelpGroups", JSON.stringify(checkedTempArr));
      console.log(checkedTempArr)
        if (this.state.checked.length > 0) {
          this.setState({
            checkedErr: "",
          });
        } else {
          this.setState({
            checkedErr: "Przynajmiej jedno pole musi zostać zaznaczone!",
          });
      }
    })
  };

  organisationInput = (e) => {
    this.setState({
      specificOrganisation: e.target.value,
    });
    localStorage.setItem("selectedSpecificOrganisation", e.target.value);
  };

  handleClickBack = (e) => {
    this.props.changeDisplayBack(e);
  };

  handleClickNext = (e) => {
    this.props.changeDisplayNext(e);
    this.props.addLocalization(this.state.localization);
    this.props.addHelpGroups(this.state.checked);
    this.props.addSpecificLocalization(this.state.specificOrganisation);
  };

  render() {
    return (
      <>
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
            <h2>Krok 3/4</h2>
            <h1 className="form__step__content__title">Lokalizacja:</h1>
            <select
              value={this.state.localization}
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
              {this.state.helpGroups.map((el) => {
                return (
                  <div className="form__step__content__checkbox">
                    <label htmlFor={el.name}>
                      <input
                        className="hidden"
                        type="checkbox"
                        checked={el.checked}
                        onChange={this.checkboxSelection}
                        id={el.name}
                      ></input>
                      <span>{el.name}</span>
                    </label>
                  </div>
                );
              })}
              <p className="form__step__error">{this.state.checkedErr}</p>
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
