import React from 'react';
import HomeBanner from './HomeBanner';
import HomeThreeColumns from './HomeThreeColumns';
import HomeAboutApp from './HomeAboutApp';
import HomeAboutUs from './HomeAboutUs';
import HomeWhoWeSupport from './HomeWhoWeSupport';
import Footer from './Footer';

class Home extends React.Component {
    render() {
        return(
            <div className="container">
                <HomeBanner />
                <HomeThreeColumns />
                <HomeAboutApp />
                <HomeAboutUs />
                <HomeWhoWeSupport />
                <Footer />
            </div>
        )
    }
}

export default Home;