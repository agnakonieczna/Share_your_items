import React from "react";

class Foundations extends React.Component {
  render() {
    return (
      <div className="foundation">
        <div className="foundation__text">
          <p>{this.props.foundationText}</p>
        </div>
        <div className="foundation__list">
          <ul>
            {this.props.foundationsData.map((foundation) => {
              return (
                <li className="foundation__list__item">
                  <div>
                    <h1 className="foundation__list__item__title">{foundation.title}</h1>
                    <p className="foundation__list__item__aims">{foundation.aims}</p>
                  </div>
                  <p className="foundation__list__item__items">{foundation.items}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Foundations;
