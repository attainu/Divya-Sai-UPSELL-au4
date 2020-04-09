import React, { Component } from 'react';


class Banner extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="banner">
                    <img src={`./images/${this.props.imgName}`} alt="" />
                    </div>
            </React.Fragment>
        )
    }
}

export default Banner;