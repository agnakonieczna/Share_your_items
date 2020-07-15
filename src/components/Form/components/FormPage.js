import React from 'react';
import HomeFooter from '../../Home/components/HomeFooter';
import FormBanner from './FormBanner';
import Form from './Form';

class FormPage extends React.Component {
    render() {
        return(
            <div>
                <FormBanner />
                <Form />
                <HomeFooter />
            </div>
        )
    }
}

export default FormPage;