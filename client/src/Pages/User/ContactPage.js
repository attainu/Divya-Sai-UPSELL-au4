import React, { Component } from 'react'

class ContactPage extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="container contactwrapper">
                <div class="google-map">
                <iframe 
                title="Address" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2610.18959437125!2d-122.89173038431552!3d49.14002457931595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d9666e89f7d3%3A0x3bc08aaf3e16d0b2!2sJust%20Cakes%20Bakeshop!5e0!3m2!1sen!2sin!4v1587562382315!5m2!1sen!2sin"
                 width="100%" height="450" frameborder="0" style={{"border":"0"}} allowfullscreen="" aria-hidden="false" tabindex="0">
                 </iframe>
                 </div>
                 
                 <div className="contact-form">
                     <h1>Leave Us a Message!!!</h1>
                     <form>
                         
                         <input type="text" style={{margin:"10px"}} className="form-control" placeholder="Name" required />
                         
                         
                         <input type="email" style={{margin:"10px"}} className="form-control" placeholder="Email" required />
                         

                         <textarea rows="5" style={{margin:"10px"}} className="form-control" columns="8">Message</textarea>
                     
                        <input type="button" className="btn btn-primary pull-right" value="Submit"/>
                     
                     </form>
                     </div>
                 </div>
            </React.Fragment>
        )
    }
}

export default ContactPage