import React from "react";
import decoration from "../assets/Decoration.svg";
import Foundations from "./Foundations";

class HomeWhoWeSupport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foundationShow: false,
      organisationsShow: false,
      collectionsShow: false,
      foundationText:
        "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.",
      foundationsData: [
        {
          id: 1,
          title: "Fundacja “Dbam o Zdrowie”",
          aims:
            "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
          items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
        },
        {
          id: 2,
          title: "Fundacja “Dla dzieci”",
          aims: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
          items: "ubrania, meble, zabawki",
        },
        {
          id: 3,
          title: "Fundacja “Bez domu”",
          aims:
            "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
          items: "ubrania, jedzenie, ciepłe koce",
        },
        {
          id: 4,
          title: "Fundacja “Dbam o Zdrowie”",
          aims:
            "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
          items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
        },
        {
          id: 5,
          title: "Fundacja “Dla dzieci”",
          aims: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
          items: "ubrania, meble, zabawki",
        },
        {
          id: 6,
          title: "Fundacja “Bez domu”",
          aims:
            "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
          items: "ubrania, jedzenie, ciepłe koce",
        },
      ],
      oragisationText: "",
      organisationsData: [],
      collectionText: "",
      collectionsData: [],
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
      <section className="who-we-support">
        <h1 className="who-we-support__title">Komu pomagamy?</h1>
        <img
          className="who-we-support__decoration"
          src={decoration}
          alt="decoration"
        />
        <div className="who-we-support__btns">
          <button className="who-we-support__btn" onClick={this.foundationShow}>
            Fundacjom
          </button>
          <button
            className="who-we-support__btn"
            onClick={this.organisationsShow}
          >
            Organizacjom<br></br>pozarządowym
          </button>
          <button
            className="who-we-support__btn"
            onClick={this.collectionsShow}
          >
            Lokalnym<br></br> zbiórkom
          </button>
        </div>
        {this.state.foundationShow && (
          <Foundations
            foundationText={this.state.foundationText}
            foundationsData={this.state.foundationsData}
          />
        )}
        {this.state.organisationsShow && <p>Organizacje</p>}
        {this.state.collectionsShow && <p>Zbiórki</p>}
      </section>
    );
  }
}

export default HomeWhoWeSupport;
