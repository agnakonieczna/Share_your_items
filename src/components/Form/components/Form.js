import React from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Summary from './Summary';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        display1: "block",
        display2: "none",
        display3: "none",
        display4: "none",
        displaySummary: "none" 
    };
  }

  handleClick1 = (e) => {
    e.preventDefault()

    this.setState({
        display1: "none",
        display2: "block"
    })
  }

  handleClick2 = (e) => {
    e.preventDefault()

      this.setState({
          display1: "block",
          display2: "none"
      })
  }

  handleClick3 = (e) => {
    e.preventDefault()

      this.setState({
          display2: "none",
          display3: "block"
      })
  }

  handleClick4 = (e) => {
    e.preventDefault()

      this.setState({
          display2: "block",
          display3: "none"
      })
  }

  handleClick5 = (e) => {
    e.preventDefault()

      this.setState({
        display3: "none",
        display4: "block"
      })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form__step-wrapper" style={{display:this.state.display1}}>
          <Step1 changeDisplay1={this.handleClick1}/>
        </div>
        <div className="form__step-wrapper" style={{display:this.state.display2}}>
          <Step2 changeDisplay2={this.handleClick2} changeDisplay3={this.handleClick3}/>    
        </div>
        <div className="form__step-wrapper" style={{display:this.state.display3}}>
            <Step3 changeDisplay4={this.handleClick2} changeDisplay5={this.handleClick3}/>
        </div>
        <div className="form__step-wrapper" style={{display:this.state.display4}}>
            <Step4 />
          <button id="6">
            Wstecz
          </button>
          <button id="7">Dalej</button>
        </div>
        <div className="form__summary-wrapper" style={{display:this.state.displaySummary}}>
        <Summary />
          <button id="8">
            Wstecz
          </button>
          <input type="submit" value="Potwierdzam"></input>
        </div>
      </form>
    );
  }
}

export default Form;
