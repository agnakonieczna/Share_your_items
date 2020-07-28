import React from 'react';
import Select from 'react-select';

class Step2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bags: localStorage.getItem('selectedBags') || "",
      error: "",
      options: [{
        label: 1,
        value: 1
      },
      {
        label: 2,
        value: 2
      },
      {
        label: 3,
        value: 3
      },
      {
        label: 4,
        value: 4
      },
      {
        label: 5,
        value: 5
      }]
    };
  }

  handleChange = (e) => {
    this.setState({
      bags: this.state.options.value,
    });
    localStorage.setItem('selectedBags', e.target.value)
  };

  handleClickBack = (e) => {
    this.props.changeDisplayBack(e);
  };

  handleClickNext = (e) => {
    if(!this.state.bags) {
      this.setState({
        error: "Jedno pole musi być wybrane!"
      })
    } else if(this.state.bags) {
      this.props.changeDisplayNext(e);
      this.props.addBags(this.state.bags);
    }
  };

  render() {
    const customStyles = {
      control: (base, state) => ({
        ...base,
        background: "transparent",
        borderColor: "black",
        borderRadius: "none"
      }),
      valueContainer: (base, state) => ({
        ...base,
        background: "transparent",
        borderColor: "black"
      }),
      multiValue: (base, state) => ({
        ...base,
        background: "lightYellow",
        maxWidth: "100px"
      })
    };

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
            <label className="form__step__content__label" htmlFor="bags-select">
              Liczba 60l worków:
            </label>
            <Select
              styles={customStyles}
              className="form__step__content__select"
              id="bags-select"
              value={this.state.bags}
              onChange={this.handleChange}
              options={this.state.options}
            />
            <p className="form__step__error">{this.state.error}</p>
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
