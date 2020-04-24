import React, { Component } from 'react'

class TrackOrder extends Component {
    render () {
        return (
            <div className="container" style={{margin:"50px auto"}}>
                <form style={{width:"50%"}}>
                    <div className="form-group">
                        <label>ORDER ID</label>
                        <input className="form-control" type="text" required/>
                    </div>

                    <div className="form-group">
                        <label>EMAIL </label>
                        <input className="form-control" type="email" required/>
                    </div>

                    <button type="button" className="btn btn-block">TRACK YOUR ORDER</button>
                </form>
            </div>
        )
    }
}

export default TrackOrder