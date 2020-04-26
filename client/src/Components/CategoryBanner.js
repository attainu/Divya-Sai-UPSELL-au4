import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class CategoryBanner extends Component {
    render () {
        return (
            <React.Fragment>

                <div className="container">
                    <div className="categorybanner">
                        
                        <Link to="/shop">
                        <div className="maincategory col-6">
                            <img src="images/wedding-cakes.jpg" alt=""/>
                            <div class="categoryContent">
                            <h3>Wedding Cakes</h3>
                            </div>
                        </div>
                        </Link>

                        <Link to="/shop">
                        <div className="maincategory col-6">
                            <img src="images/birthday-cakes.jpg" alt=""/>
                            <div class="categoryContent">
                            <h3>Birthday Cakes</h3>
                            </div>
                        </div>
                        </Link>
                        
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default CategoryBanner;