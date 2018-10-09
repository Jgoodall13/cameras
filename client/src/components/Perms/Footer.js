import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Footer extends Component {
    render(){
        return (
            <div className="footer">
               <h1>I'm a footer!!</h1>
            </div>
        )
    }
}

//This is the font awesome only being able to take on one css so inline are necessary

const footerIcons = {
    color: "#ef7521",
    fontSize: "2.2em",
    marginLeft: "35px"
}

export default Footer;