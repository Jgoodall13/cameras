import React, { Component } from 'react';
import '../../styles/login.css'

class Auth extends Component {
    render(){
        return (
            <div style={{paddingTop: '200px', textAlign: 'center'}}>
                <form className="auth-form">
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" />
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default Auth;