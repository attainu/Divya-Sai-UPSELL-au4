import React, { Component } from 'react';
import TrackOrder from  '../../Components/TrackOrder';


class TrackYourOrderPage extends Component {
    render () {
        return (
            <div>
            <TrackOrder />

            <div id="gallery">
            <img src="images/Product_Images/Birthday-Cake1.jpg" alt="Birthday Cake"/>
            <img src="images/Product_Images/Birthday-Cake2.jpg" alt="Birthday Cake"/>
            <img src="images/Product_Images/Birthday-Cake3.jpg" alt="Birthday Cake"/>
            <img src="images/Product_Images/Birthday-Cake4.jpg" alt="Birthday Cake"/>
            <img src="images/Product_Images/Birthday-Cake5.jpg" alt="Birthday Cake"/>
            <img src="images/Product_Images/Birthday-Cake6.jpg" alt="Birthday Cake"/>
            <img src="images/Product_Images/Birthday-Cake7.jpg" alt="Birthday Cake"/>
            <img src="images/Product_Images/Birthday-Cake8.jpg" alt="Birthday Cake"/>
            <img src="images/Product_Images/Birthday-Cake9.jpg" alt="Birthday Cake"/>
            <img src="images/Product_Images/Birthday-Cake10.jpg" alt="Birthday Cake"/>
            
            <img src="images/Product_Images/Wedding-Cake1.jpg" alt="Wedding Cake"/>
            <img src="images/Product_Images/Wedding-Cake2.jpg" alt="Wedding Cake"/>
            </div>
            </div>
        )
    }
}

export default TrackYourOrderPage;