import React, { Component } from 'react';
import fire from '../../config/Fire';
import Auth from './Auth';
import LoggedIn from './LoggedIn';

class index extends Component {
    state = {
        user:{},
    }

    componentDidMount(){
        this.authListener();
    }

    authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            if(user){
                console.log(user)
                this.setState({ user })
            } else {
                this.setState({ user: null});
            }
        })
    }

    render(){
        return (
            <div>
                {this.state.user ? (<LoggedIn />) : (<Auth />)}
            </div>
        )
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

export default index;