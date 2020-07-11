import React from "react";
import HomeColumn from "./HomeColumn";

class HomeThreeColumns extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      content: [
        {
          id: 1,
          number: 10,
          title: "oddanych worków",
        },
        {
          id: 2,
          number: 5,
          title: "wspartych organizacji",
        },
        {
          id: 3,
          number: 7,
          title: "zorganizowanych zbiórek",
        },
      ],
    };
  }

  render() {
    return (
      <section className="three-columns">
        {this.state.content.map((el) => {
          return (
            <HomeColumn
              key={el.id}
              number={el.number}
              title={el.title}
              text={this.state.text}
            />
          );
        })}
      </section>
    );
  }
}

export default HomeThreeColumns;
