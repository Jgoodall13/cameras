import React, { Component } from 'react';
import axios from 'axios';
import '../../styles/order.css'

class Form extends Component {

    state = {
        name: '',
        company: '',
        email: '',
        phone: '',
        message: '',
        model: '',
        form: true
    }

    handleChange = (e) => {
        switch (e.target.name){
            case 'name':
                this.setState({name: e.target.value})
                break;
            case 'company':
                this.setState({company: e.target.value})
                break;
            case 'email':
                this.setState({email: e.target.value})
                break;
            case 'phone':
                this.setState({phone: e.target.value})
                break;
            case 'message':
                this.setState({message: e.target.value})
                break;
            default:
                break;
       }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/contact', {
            name: this.state.name,
            company: this.state.company,
            email: this.state.email,
            phone: this.state.phone,
            message: this.state.message
        })
        .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        this.setState({name: '', company: '', email: '', phone: '', message: '', form: false})
    }
    render(){
        return (
            <div className="form-div container">
            {this.state.form === false
                        ? <div className="col-md-8">
                            <div className="confirm-box">
                                <h4 className="confirm-title">Thank you for contacting us!</h4>
                                <p className="confirm-p">We will contact you within one business day. We look forward to speaking with you then.</p>
                            </div>
                          </div>
                        :
                <div className="col-md-8">
                        <form onSubmit={this.handleSubmit} className="contact-form row">
                            <div className="col-xs-12 col-md-6 contact-inputs-box">
                                <input className="contact-inputs" type='text' name="name" placeholder="Name*" required value={this.state.name} onChange={this.handleChange} />
                            </div>
                            <div className="col-xs-12 col-md-6 contact-inputs-box">
                                <input className="contact-inputs" type='text' name="company" placeholder="Phone" value={this.state.company} onChange={this.handleChange} />
                            </div> 
                            <div className="col-xs-12 col-md-6 contact-inputs-box">
                                <input className="contact-inputs" type='email' name="email" placeholder="Email*" required value={this.state.email} onChange={this.handleChange} />
                            </div> 
                            <div className="col-xs-12 col-md-6 contact-inputs-box">
                                <input className="contact-inputs" type='text' name="phone" placeholder="Model" value={this.state.phone} onChange={this.handleChange} />
                            </div>  
                            <div className="col-xs-12 contact-inputs-box">
                                <textarea className="contact-inputs text-area-contact" type='text' name="message" required placeholder="Message*" value={this.state.message} onChange={this.handleChange} />
                            </div>
                            <div className="col-xs-12">
                                <button className="contact-button-send">Send</button>
                            </div>
                        </form>
                    </div>
            }   
            </div>
        )
    }
}

export default Form;