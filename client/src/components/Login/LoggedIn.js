import React, { Component } from 'react';
import fire from '../../config/Fire'

class LoggedIn extends Component {
    
    logg = () => {
        fire.auth().signOut();
    }

    render(){
        return (
            <div style={{paddingTop: '200px', textAlign: 'center'}}>
                <h2>You have sucessfully logged in.</h2>
                <p>This is where your downloads or any other hidden information will be set.</p>
                <p>Once I have what I need for this page, I'll also spice it up a little bit.</p>
                <button onClick={this.logg}>Logout</button>
            </div>
        )
    }
}

export default LoggedIn;