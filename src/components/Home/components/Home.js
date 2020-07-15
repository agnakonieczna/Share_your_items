import React from 'react';
import HomeThreeColumns from './HomeThreeColumns';
import HomeAboutApp from './HomeAboutApp';
import HomeAboutUs from './HomeAboutUs';
import HomeWhoWeSupport from './HomeWhoWeSupport';
import HomeFooter from './HomeFooter';
import HomeBannerContainer from '../containers/HomeBannerContainer';

class Home extends React.Component {
    render() {
        return(
            <>
                <HomeBannerContainer />
                <HomeThreeColumns />
                <HomeAboutApp />
                <HomeAboutUs />
                <HomeWhoWeSupport />
                <HomeFooter />
            </>
        )
    }
}

export default Home;