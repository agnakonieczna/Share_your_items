import React from "react";

export default function HomeAboutAppColumn({ img, text1, text2 }) {
  return (
    <div className="about-app__col">
      <img className="about-app__col__img" src={img} alt="icon"></img>
      <p className="about-app__col__text-1">{text1}</p>
      <p className="about-app__col__text-2">{text2}</p>
    </div>
  );
}
