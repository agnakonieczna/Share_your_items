// import React from 'react';
// import { withFirebase } from '../../Firebase';

// class Data extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       foundations: [
//         {
//           id: 1,
//           title: "Fundacja “Dbam o Zdrowie”",
//           aims:
//             "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
//           items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
//         },
//         {
//           id: 2,
//           title: "Fundacja “Dla dzieci”",
//           aims: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
//           items: "ubrania, meble, zabawki",
//         },
//         {
//           id: 3,
//           title: "Fundacja “Bez domu”",
//           aims:
//             "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
//           items: "ubrania, jedzenie, ciepłe koce",
//         },
//         {
//           id: 4,
//           title: "Fundacja “Lorem ipsum”",
//           aims:
//             "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
//           items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
//         },
//         {
//           id: 5,
//           title: "Fundacja “Dla dzieci”",
//           aims: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
//           items: "ubrania, meble, zabawki",
//         },
//         {
//           id: 6,
//           title: "Fundacja “Bez domu”",
//           aims:
//             "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
//           items: "ubrania, jedzenie, ciepłe koce",
//         },
//       ],
    
//       organisations: [
//         {
//           id: 1,
//           title: "Magazin",
//           aims:
//             "Cel i misja: Pomoc dla samotnych matek, ofiar przemocy, uchodźców, migrantów.",
//           items: "odzież, żywność, wyposażenie",
//         },
//         {
//           id: 2,
//           title: "Stowarzyszenie na Rzecz Dzieci i Młodzieży ”Uśmiech Dziecka”",
//           aims:
//             "Cel i misja: Niesienie pomocy dzieciom zagrożonym patologiami.",
//           items: "ubrania, książki, sprzęt",
//         },
//         {
//           id: 3,
//           title: "Fundacja Family For Family",
//           aims:
//             "Cel i misja: Poprawa perspektyw rozwoju dzieci z rodzin mniej zamożnych.",
//           items: "odzież, żywność, wyposażenie",
//         },
//       ],
    
//       collections: [
//         {
//           id: 1,
//           titile: "",
//           aims: "Cel i misja: ",
//           items: "",
//         },
//       ],
//     }
//   }

//   setData = () => {
//     return this.props.firebase.database().ref('data').set({
//       foundations: this.state.foundations,
//       organisations: this.state.organisations,
//       collections: this.state.collections
//     })
//   }
// }


const data = {
  foundations: [
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
      title: "Fundacja “Lorem ipsum”",
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

  organisations: [
    {
      id: 1,
      title: "Magazin",
      aims:
        "Cel i misja: Pomoc dla samotnych matek, ofiar przemocy, uchodźców, migrantów.",
      items: "odzież, żywność, wyposażenie",
    },
    {
      id: 2,
      title: "Stowarzyszenie na Rzecz Dzieci i Młodzieży ”Uśmiech Dziecka”",
      aims:
        "Cel i misja: Niesienie pomocy dzieciom zagrożonym patologiami.",
      items: "ubrania, książki, sprzęt",
    },
    {
      id: 3,
      title: "Fundacja Family For Family",
      aims:
        "Cel i misja: Poprawa perspektyw rozwoju dzieci z rodzin mniej zamożnych.",
      items: "odzież, żywność, wyposażenie",
    },
  ],

  collections: [
    {
      id: 1,
      titile: "",
      aims: "Cel i misja: ",
      items: "",
    },
  ],
};


export default data;
