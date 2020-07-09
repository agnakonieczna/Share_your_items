import React from 'react';
import decoration from "../assets/Decoration.svg";

class HomeWhoWeSupport extends React.Component {
    render() {
        return(
            <section>
                <h1>Komu pomagamy?</h1>
                <img src={decoration} alt="decoration" />
                <div>
                    <button>Fundacjom</button>
                    <button>Organizacjom pozarządowym</button>
                    <button>Lokalnym zbiórkom</button>
                </div>
            </section>
        )
    }
}

export default HomeWhoWeSupport;