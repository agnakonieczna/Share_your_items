import React from "react";
import ThankYou from "./ThankYou";
import Step1Container from "../containers/Step1Container";
import Step2Container from "../containers/Step2Container";
import Step3Container from "../containers/Step3Container";
import Step4Container from "../containers/Step4Container";
import SummaryContainer from "../containers/SummaryContainer";
import { withFirebase } from "../../Firebase";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     currentStep: 1
    };
  }

  handleClickNext = (e) => {
    e.preventDefault();

    this.setState({
      currentStep: this.state.currentStep + 1
    });
  };

  handleClickBack = (e) => {
    e.preventDefault();

    this.setState({
      currentStep: this.state.currentStep - 1
    });
  };


  handleSubmit = (e) => {
    e.preventDefault(e)

    this.setState({
      currentStep: "thanks"
    })

    const {
      user,
      bags,
      type,
      localization,
      helpGroups,
      street,
      city,
      postCode,
      phone,
      date,
      hour,
    } = this.props;

    this.props.firebase.form(user.uid).set({
      bags: bags,
      type: type,
      localization: localization,
      helpGroups: helpGroups,
      street: street,
      city: city,
      postCode: postCode,
      phone: phone,
      date: date,
      hour: hour
    })

    localStorage.removeItem('selectedType');
    localStorage.removeItem('selectedBags');
    localStorage.removeItem('selectedLocalization');
    localStorage.removeItem('selectedSpecificOrganisation');

  };

  render() {
    const {currentStep} = this.state;
    return (
      <form>
        {currentStep === 1 && (
          <Step1Container changeDisplayNext={this.handleClickNext} />
        )}
        {currentStep === 2 && (
          <Step2Container
            changeDisplayNext={this.handleClickNext}
            changeDisplayBack={this.handleClickBack}
          />
        )}
        {currentStep === 3 && (
          <Step3Container
            changeDisplayNext={this.handleClickNext}
            changeDisplayBack={this.handleClickBack}
          />
        )}
        {currentStep === 4 && (
          <Step4Container
            changeDisplayNext={this.handleClickNext}
            changeDisplayBack={this.handleClickBack}
          />
        )}
        {currentStep === 5 && (
          <SummaryContainer
            changeDisplayBack={this.handleClickBack}
            handleSubmit={this.handleSubmit}
          />
        )}
        {currentStep === "thanks" &&  <ThankYou /> }
      </form>
    );
  }
}

export default withFirebase(Form);
