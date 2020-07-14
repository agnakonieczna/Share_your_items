import React from 'react';
import HomeFooter from './HomeFooter';
import FormBanner from './FormBanner';

class Form extends React.Component {
    render() {
        return(
            <div>
                <FormBanner />
                <div>Form</div>
                <HomeFooter />
            </div>
        )
    }
}

export default Form;