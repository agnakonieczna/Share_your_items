import React from "react";
import decoration from "../assets/Decoration.svg";
import HomeWhoWeSupportOne from "./HomeWhoWeSupportOne";
import data from './data';

class HomeWhoWeSupport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      foundationShow: true,
      organisationsShow: false,
      collectionsShow: false,
      foundationText:
        "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.",
      organisationText: "W naszej bazie znajdziesz listę zweryfikowanych Organizacji pozarządowych, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.",
      collectionText: "Nasza baza zawiera również spis zbiórek lokalnych. Sprawdź czy któraś z nich jest w Twojej okolicy",
    };
  }

  foundationShow = () => {
    this.setState({
      foundationShow: true,
      organisationsShow: false,
      collectionsShow: false,
    });
  };

  organisationsShow = () => {
    this.setState({
      foundationShow: false,
      organisationsShow: true,
      collectionsShow: false,
    });
  };

  collectionsShow = () => {
    this.setState({
      foundationShow: false,
      organisationsShow: false,
      collectionsShow: true,
    });
  };

  render() {
    return (
      <section className="who-we-support" id="fundacje-i-organizacje">
        <h1 className="who-we-support__title">Komu pomagamy?</h1>
        <img className="decoration" src={decoration} alt="decoration" />
        <div className="who-we-support__btns">
          <button
            className={
              this.state.foundationShow
                ? "who-we-support__btn who-we-support__btn-border"
                : "who-we-support__btn"
            }
            id="foundations"
            onClick={this.foundationShow}
          >
            Fundacjom
          </button>
          <button
            className={
              this.state.organisationsShow
                ? "who-we-support__btn who-we-support__btn-border"
                : "who-we-support__btn"
            }
            id="organisations"
            onClick={this.organisationsShow}
          >
            Organizacjom<br></br>pozarządowym
          </button>
          <button
             className={
              this.state.collectionsShow
                ? "who-we-support__btn who-we-support__btn-border"
                : "who-we-support__btn"
            }
            id="collections"
            onClick={this.collectionsShow}
          >
            Lokalnym<br></br> zbiórkom
          </button>
        </div>
        {this.state.foundationShow && (
          <HomeWhoWeSupportOne
            text={this.state.foundationText}
            data={this.state.data.foundations}
          />
        )}
        {this.state.organisationsShow && (
          <HomeWhoWeSupportOne
            text={this.state.organisationText}
            data={this.state.data.organisations}
          />
        )}
        {this.state.collectionsShow && (
          <HomeWhoWeSupportOne
            text={this.state.collectionText}
            data={this.state.data.collections}
          />
        )}
      </section>
    );
  }
}

export default HomeWhoWeSupport;
