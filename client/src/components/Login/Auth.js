import React, { Component } from 'react';
import '../../styles/login.css';
import fire from '../../config/Fire';

class Auth extends Component {

    state = {
        email: '',
        password: ''
    }

    login = (e) => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).catch((error) => {
            console.log(error);
            alert("Incorrect Credentials")
        })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render(){
        return (
            <div style={{paddingTop: '200px', textAlign: 'center'}}>
                <form className="auth-form">
                <div className="form-group">
                    <label>Email</label>
                    <input value={this.state.email} onChange={this.handleChange} type="text" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button type="submit" onClick={this.login} className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default Auth;