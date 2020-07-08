import React from 'react';
import HomeBanner from './HomeBanner';
import HomeThreeColumns from './HomeThreeColumns';

class Home extends React.Component {
    render() {
        return(
            <div className="container">
                <HomeBanner />
                <HomeThreeColumns />
            </div>
        )
    }
}

export default Home;