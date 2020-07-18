import React from 'react';
import HomeFooter from '../../Home/components/HomeFooter';
import FormBanner from './FormBanner';
import FormContainer from '../containers/FormContainer';

class FormPage extends React.Component {
    render() {
        return(
            <div>
                <FormBanner />
                <FormContainer />
                <HomeFooter />
            </div>
        )
    }
}

export default FormPage;