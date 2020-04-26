import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Guest extends Component {
    render () {
        return (
            <div>  
               <Link to="/checkout">
                   <button className="btn btn-color btn-block">Continue as a Guest</button>
                </Link>
            </div>
        )
    }
}

export default Guest