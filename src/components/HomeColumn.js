import React from 'react';

class HomeColumn extends React.Component {
    render() {
        const {number, title, text} = this.props;
        return(
            <div className="three-columns__col">
                <h1 className="three-columns__col__number">{number}</h1>
                <h2 className="three-columns__col__title">{title}</h2>
                <p className="three-columns__col__text">{text}</p>
            </div>
        )
    }
}

export default HomeColumn;