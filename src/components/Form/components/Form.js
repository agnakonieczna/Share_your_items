import React from "react";
import Step4 from "./Step4";
import Summary from "./Summary";
import ThankYou from "./ThankYou";
import Step1Container from "../containers/Step1Container";
import Step2Container from "../containers/Step2Container";
import Step3Container from "../containers/Step3Container";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayStep1: "block",
      displayStep2: "none",
      displayStep3: "none",
      displayStep4: "none",
      displaySummary: "none",
      displayThankYou: "none",
    };
  }

  handleClickNext1 = (e) => {
    e.preventDefault();

    this.setState({
      displayStep1: "none",
      displayStep2: "block",
    });
  };

  handleClickBack2 = (e) => {
    e.preventDefault();

    this.setState({
      displayStep1: "block",
      displayStep2: "none",
    });
  };

  handleClickNext2 = (e) => {
    e.preventDefault();

    this.setState({
      displayStep2: "none",
      displayStep3: "block",
    });
  };

  handleClickBack3 = (e) => {
    e.preventDefault();

    this.setState({
      displayStep2: "block",
      displayStep3: "none",
    });
  };

  handleClickNext3 = (e) => {
    e.preventDefault();

    this.setState({
      displayStep3: "none",
      displayStep4: "block",
    });
  };

  handleClickBack4 = (e) => {
    e.preventDefault();

    this.setState({
      displayStep3: "block",
      displayStep4: "none",
    });
  };

  handleClickNext4 = (e) => {
    e.preventDefault();

    this.setState({
      displayStep4: "none",
      displaySummary: "block",
    });
  };

  handleClickBack5 = (e) => {
    e.preventDefault();

    this.setState({
      displayStep4: "block",
      displaySummary: "none",
    });

  }

  handleSubmit = () => {
    console.log("submit");
    this.setState({
      displaySummary: "none",
      displayThankYou: "block"
    })
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div style={{ display: this.state.displayStep1 }}>
          <Step1Container changeDisplayNext={this.handleClickNext1} />
        </div>
        <div style={{ display: this.state.displayStep2 }}>
          <Step2Container
            changeDisplayNext={this.handleClickNext2}
            changeDisplayBack={this.handleClickBack2}
          />
        </div>
        <div style={{ display: this.state.displayStep3 }}>
          <Step3Container
            changeDisplayNext={this.handleClickNext3}
            changeDisplayBack={this.handleClickBack3}
          />
        </div>
        <div style={{ display: this.state.displayStep4 }}>
          <Step4
            changeDisplayNext={this.handleClickNext4}
            changeDisplayBack={this.handleClickBack4}
          />
        </div>
        <div style={{ display: this.state.displaySummary }}>
          <Summary 
            changeDisplayBack={this.handleClickBack5}
          />
        </div>
        <div style={{display: this.state.displayThankYou}}>
          <ThankYou />
        </div>
      </form>
    );
  }
}

export default Form;
