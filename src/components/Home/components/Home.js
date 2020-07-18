import React from 'react';
import HomeThreeColumns from './HomeThreeColumns';
import HomeAboutUs from './HomeAboutUs';
import HomeWhoWeSupport from './HomeWhoWeSupport';
import HomeFooter from './HomeFooter';
import HomeBannerContainer from '../containers/HomeBannerContainer';
import HomeAboutAppContainer from '../containers/HomeAboutAppContainer'

class Home extends React.Component {
    render() {
        return(
            <>
                <HomeBannerContainer />
                <HomeThreeColumns />
                <HomeAboutAppContainer />
                <HomeAboutUs />
                <HomeWhoWeSupport />
                <HomeFooter />
            </>
        )
    }
}

export default Home;