import React from 'react';
import decoration from '../assets/Decoration.svg';
import { Link } from 'react-router-dom';
import icon1 from '../assets/Icon-1.svg';
import icon2 from '../assets/Icon-2.svg';
import icon3 from '../assets/Icon-3.svg';
import icon4 from '../assets/Icon-4.svg';
import HomeAboutAppColumn from './HomeAboutAppColumn';

class HomeAboutApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: [
        {
          id: 1,
          img: icon1,
          text1: "Wybierz rzeczy",
          text2: "ubrania, zabawki, sprzęt i inne"
        },
        {
          id: 2,
          img: icon2,
          text1: "Spakuj je",
          text2: "skorzystaj z worków na śmieci"
        },
        {
          id: 3,
          img: icon3,
          text1: "Zdecyduj komu chcesz pomóc",
          text2: "wybierz zaufane miejsce"
        },
        {
          id: 4,
          img: icon4,
          text1: "Zamów kuriera",
          text2: "kurier przyjedzie w dogodnym terminie"
        }
      ]
    }
  }

  render() {
    return (
         <section className="about-app" id="o-co-chodzi">
        <h1 className="about-app__title">Wystarczą 4 proste kroki</h1>
        <img
          className="decoration"
          src={decoration}
          alt="decoration"
        />
        <div className="about-app__container">
          <div className="about-app__columns">
            {
              this.state.content.map(el => {
                return <HomeAboutAppColumn key={el.id} img={el.img} text1={el.text1} text2={el.text2} /> 
              })

            }
          </div>
        </div>
        <button className="about-app__btn">
          <Link to="/logowanie">
            Oddaj<br></br>rzeczy
          </Link>
        </button>
      </section>
    );
  }
}

export default HomeAboutApp;
