import React, { Component } from 'react';
import fire from '../../config/Fire'
import Mon1 from '../../downloads/libroyale-3.11.1.0-LINUX-x86-64Bit.zip';
import Mon2 from '../../downloads/libroyale-3.11.1.0-WINDOWS-x86-64Bit.zip';
import Hydra1 from '../../downloads/royale_remote_viewer_linux_x64_20181130.zip';
import Hydra2 from '../../downloads/royale_remote_viewer_win_x64_20181130.zip';

class LoggedIn extends Component {
    
    logg = () => {
        fire.auth().signOut();
    }

    render(){
        return (
            <div style={{paddingTop: '200px', textAlign: 'center'}}>
                <h2>You have sucessfully logged in.</h2>
                <h3>Monstar and Maxx Downloads:</h3>
                <a href={Mon1} download>libroyale-3.11.1.0-LINUX-x86-64Bit.zip</a><br />
                <a href={Mon2} download>libroyale-3.11.1.0-WINDOWS-x86-64Bit.zip</a>
                <h3>Hydra Downloads:</h3>
                <a href={Hydra1} download>royale_remote_viewer_linux_x64_20181130.zip</a><br />
                <a href={Hydra2} download>royale_remote_viewer_win_x64_20181130.zip</a><br />
                <button style={{margin: '20px', backgroundColor: '#150DD6', color: 'white', border: '1px solid #150DD6', fontSize: '20px'}} onClick={this.logg}>Logout</button>
            </div>
        )
    }
}

export default LoggedIn;