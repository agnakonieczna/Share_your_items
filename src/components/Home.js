import React from 'react';
import HomeBanner from './HomeBanner';
import HomeThreeColumns from './HomeThreeColumns';
import HomeAboutApp from './HomeAboutApp';
import HomeAboutUs from './HomeAboutUs';

class Home extends React.Component {
    render() {
        return(
            <div className="container">
                <HomeBanner />
                <HomeThreeColumns />
                <HomeAboutApp />
                <HomeAboutUs />
            </div>
        )
    }
}

export default Home;