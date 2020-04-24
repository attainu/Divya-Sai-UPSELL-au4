import React, { Component } from 'react';
import Banner from '../../Components/Banner';
import CheckOutForm from '../../Components/CheckOutForm';

class CheckoutPage extends Component {
    render () {
        return (
            <React.Fragment>
                <CheckOutForm />
            </React.Fragment>
        )
    }
}

export default CheckoutPage;