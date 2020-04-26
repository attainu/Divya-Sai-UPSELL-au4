import React, { Component } from 'react';


class Banner extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="banner">
                    {console.log(this.props)}
                    <img src={process.env.PUBLIC_URL+`../images/${this.props.imgName}`} alt={`${this.props.imgName}`} />
                    </div>
            </React.Fragment>
        )
    }
}

export default Banner;