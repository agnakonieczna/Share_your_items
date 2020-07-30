import React from "react";

class Step2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          value: 1,
          id: 1,
        },
        {
          value: 2,
          id: 2,
        },
        {
          value: 3,
          id: 3,
        },
        {
          value: 4,
          id: 4,
        },
        {
          value: 5,
          id: 5,
        },
      ],
      isShow: false,
      bags: localStorage.getItem("selectedBags") || "– wybierz –",
      bagsErr: "",
    };
  }

  dropDown = () => {
    this.setState({
      isShow: this.state.isShow ? false : true,
      bagsErr: ""
    });
  };

  selectItem = (item) => {
    this.setState({
      bags: item.value,
      isShow: false,
    });
    console.log("selected", this.state.bags);
    localStorage.setItem("selectedBags", item.value);
  };

  handleClickBack = (e) => {
    this.props.changeDisplayBack(e);
  };

  handleClickNext = (e) => {
    if (this.state.bags === "– wybierz –") {
      this.setState({
        bagsErr: "Jedno pole musi być wybrane!",
      });
    } else {
      this.setState({
        bagsErr: "",
      });
      this.props.changeDisplayNext(e);
      this.props.addBags(this.state.bags);
    }
  };

  render() {
    return (
      <>
        <div className="form__step__info">
          <h2 className="form__step__info__title">Ważne!</h2>
          <p>
            Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję
            jak spakować rzeczy znajdziesz <a href="/">TUTAJ</a>
          </p>
        </div>
        <div className="form__step__content">
          <div className="form__step__content__wrapper">
            <h2>Krok 2/4</h2>
            <h1 className="form__step__content__title">
              Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
            </h1>
            <div className="form__step__content__select__wrapper">
              <label
                className="form__step__content__label"
                htmlFor="bags-select"
              >
                Liczba 60l worków:
              </label>
              <div className="form__step__content__select-step-2">
                <div className="form__step__content__select__input">
                  <div>{this.state.bags}</div>
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
                  className="form__step__content__select__drop-down-list-step-2"
                  style={{ display: this.state.isShow ? "block" : "none" }}
                >
                  {this.state.items.map((item) => {
                    return (
                      <div
                        key={item.id}
                        onClick={() => this.selectItem(item)}
                        className="form__step__content__select__drop-down-list__item-step-2"
                      >
                        {item.value}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <p className="form__step__error">{this.state.bagsErr}</p>
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

export default Step2;
