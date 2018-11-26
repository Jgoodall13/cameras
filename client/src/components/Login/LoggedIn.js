import React, { Component } from 'react';
import fire from '../../config/Fire'

class LoggedIn extends Component {
    
    logg = () => {
        fire.auth().signOut();
    }

    render(){
        return (
            <div style={{paddingTop: '200px'}}>
                <h2>I"m the successful Logged In page.</h2>
                <button onClick={this.logg}>Logout</button>
            </div>
        )
    }
}

export default LoggedIn;