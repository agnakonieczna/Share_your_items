import React from 'react';

class HomeWhoWeSupportOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      itemsPerPage: 3,
    };
    this.pagination = (number) => {
      if(this.props.data.length > this.state.itemsPerPage) {
        return (
          <button className={this.state.currentPage === number ? "page-number page-number-border" : "page-number"} key={number} id={number} onClick={this.handleClick}>
            {number}
          </button>
        )
    }
  }
  }

  handleClick = (e) => {
    this.setState({
      currentPage: Number(e.target.id),
    });
  };

  render() {
    const { currentPage, itemsPerPage } = this.state;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = this.props.data.slice(
      indexOfFirstItem,
      indexOfLastItem
    );

    const pageNumbers = [];
    for (
      let i = 1;
      i <= Math.ceil(this.props.data.length / itemsPerPage);
      i++
    ) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map((number) => {
      return this.pagination(number)
    })

    return (
      <div className="who-we-support-one">
        <div className="who-we-support-one__text">
          <p>{this.props.text}</p>
        </div>
        <div className="who-we-support-one__list">
          <ul>
            {currentItems.map((el, index) => {
              return (
                <li key={index} className="who-we-support-one__list__item">
                  <div>
                    <h1 className="who-we-support-one__list__item__title">
                      {el.title}
                    </h1>
                    <p className="who-we-support-one__list__item__aims">
                      {el.aims}
                    </p>
                  </div>
                  <p className="who-we-support-one__list__item__items">
                    {el.items}
                  </p>
                </li>
              );
            })}
          </ul>
          <ul className="page-numbers-list">{renderPageNumbers}</ul>
        </div>
      </div>
    );
  }
}

export default HomeWhoWeSupportOne;
