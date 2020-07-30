import React from "react";

class Step3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localization: localStorage.getItem("selectedLocalization") || " – wybierz – ",
      localizationErr: "",
      localizations: [{value: "Poznań", id: 1}, {value: "Kraków", id: 2}, {value: "Warszawa", id: 3}, {value: "Kraków", id: 4}, {value: "Katowice", id: 5}, {value: "Wrocław", id: 6}], 
      isShow: false,
      helpGroups: [
        { name: "dzieciom", checked: true, id: 1 },
        { name: "samotnym matkom", checked: false, id: 2 },
        { name: "bezdomnym", checked: false, id: 3 },
        { name: "niepełnosprawnym", checked: false, id: 4 },
        { name: "starszym osobom", checked: false, id: 5 },
      ],
      checked: JSON.parse(localStorage.getItem("selectedHelpGroups")) || ["dzieciom"],
      checkedErr: "",
      specificOrganisation: localStorage.getItem("selectedSpecificOrganisation") || "",
    };
  }

  localizactionSelect = (localization) => {
    this.setState({
      localization: localization.value,
      isShow: false,
      localizationErr: ""
    });
    localStorage.setItem("selectedLocalization", localization.value);
  };

  dropDown = () => {
    this.setState({
      isShow: this.state.isShow ? false : true,
      localizationErr: ""
    })
  }

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
    if(this.state.localization === " – wybierz – ") {
      this.setState({
        localizationErr: "Pole musi być wybrane!"
      })
    } else {
      this.setState({
        localizationErr: ""
      })
      this.props.changeDisplayNext(e);
      this.props.addLocalization(this.state.localization);
      this.props.addHelpGroups(this.state.checked);
      this.props.addSpecificLocalization(this.state.specificOrganisation);
    };
  }
    

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
            <div className="form__step__content__select-step-3">
                <div className="form__step__content__select__input">
                  <div>{this.state.localization}</div>
                  <div
                    className="form__step__content__select__arrow"
                    onClick={this.dropDown}
                  >
                    <span
                      className={
                        this.state.isShow
                          ? "form__step__content__select__arrow-up"
                          : "form__step__content__select__arrow-down"
                      }
                    ></span>
                  </div>
                </div>
                <div
                  className="form__step__content__select__drop-down-list-step-3"
                  style={{ display: this.state.isShow ? "block" : "none" }}
                >
                  {this.state.localizations.map((localization) => {
                    return (
                      <div
                        key={localization.id}
                        onClick={() => this.localizactionSelect(localization)}
                        className="form__step__content__select__drop-down-list__item-step-3"
                      >
                        {localization.value}
                      </div>
                    );
                  })}
                </div>
              </div>
              <p className="form__step__error">{this.state.localizationErr}</p>
            <h2 className="form__step__content__title-step-3">
              Komu chcesz pomóc?
            </h2>
            <div className="form__step__content__checkboxes">
              {this.state.helpGroups.map((el) => {
                return (
                  <div key={el.id} className="form__step__content__checkbox">
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
