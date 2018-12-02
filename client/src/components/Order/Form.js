import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select'
import '../../styles/order.css'
// import 'react-select/dist/react-select.css';

class Form extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        quantity: '',
        message: '',
        selectedOption: '',
        selectedOption2: '',
        selectedOption3: '',
        form: true
    }

    handleChange = (e) => {
        switch (e.target.name){
            case 'name':
                this.setState({name: e.target.value})
                break;
            case 'phone':
                this.setState({phone: e.target.value})
                break;
            case 'email':
                this.setState({email: e.target.value})
                break;
            case 'quantity':
                this.setState({quantity: e.target.value})
                break;
            case 'message':
                this.setState({message: e.target.value})
                break;
            default:
                break;
       }
    }

    handleChange1 = (selectedOption) => {
        this.setState({selectedOption: selectedOption.value});
      };

      handleChange2 = (selectedOption) => {
        this.setState({selectedOption2: selectedOption.value});
      };

      handleChange3 = (selectedOption) => {
        this.setState({selectedOption3: selectedOption.value});
      };

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/contact', {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            quantity: this.state.quantity,
            message: this.state.message,
            selectedOption: this.state.selectedOption,
            selectedOption2: this.state.selectedOption2,
            selectedOption3: this.state.selectedOption3
        })
        .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        this.setState({name: '',
            email: '',
            phone: '',
            quantity: '',
            message: '',
            selectedOption: '',
            selectedOption2: '',
            selectedOption3: '',
            form: false
        })
    }
    render(){

        const options1 = [
            {value: 'maxx', label: 'Maxx - $650'},
            {value: 'monstar', label: 'Monstar - $1,200'},
            {value: 'hydra', label: 'Hydra - $1,950'},
          ];

          const options2 = [
            {value: '100x85', label: '100x85'},
            {value: '80x60', label: '80x60'},
            {value: '60x45', label: '60x45'}
          ];

          const options3 = [
            {value: 'indoor', label: 'Indoor use'},
            {value: 'outdoor', label: 'Outdoor use'}
          ];
    
        return (
            <div className="form-div container">
            {this.state.form === false
                        ? <div className="col-md-12">
                            <div className="confirm-box">
                                <h4 className="confirm-title">Thank you for contacting us!</h4>
                                <p className="confirm-p">We will contact you within one business day. We look forward to speaking with you then.</p>
                            </div>
                          </div>
                        :
                <div className="col-md-12">
                        <form onSubmit={this.handleSubmit} className="contact-form row">
                            <div className="col-xs-12 col-md-6 contact-inputs-box">
                                <input className="contact-inputs" type='text' name="name" placeholder="Name*" required value={this.state.name} onChange={this.handleChange} />
                            </div>
                            <div className="col-xs-12 col-md-6 contact-inputs-box">
                                <input className="contact-inputs" type='text' name="phone" placeholder="Phone" value={this.state.phone} onChange={this.handleChange} />
                            </div> 
                            <div className="col-xs-12 col-md-6 contact-inputs-box">
                                <input className="contact-inputs" type='email' name="email" placeholder="Email*" required value={this.state.email} onChange={this.handleChange} />
                            </div> 
                            <div className="col-xs-12 col-md-6 contact-inputs-box">
                                <input className="contact-inputs" type='text' name="quantity" placeholder="Quantity" value={this.state.quantity} onChange={this.handleChange} />
                            </div>  
                            <div className="col-xs-12 contact-inputs-box">
                                <textarea className="contact-inputs text-area-contact" type='text' name="message" placeholder="Message" value={this.state.message} onChange={this.handleChange} />
                            </div>
                            <div className="col-xs-12 contact-inputs-box">
                            <p>Model</p>
                                <Select
                                name="form-field-name"
                                value={this.state.selectedOption.value}
                                onChange={this.handleChange1}
                                options={options1}
                                />
                            </div>
                            <div className="col-xs-12 contact-inputs-box">
                            <p>Field of View</p>
                                <Select
                                name="form-field-name"
                                value={this.state.selectedOption2.value}
                                onChange={this.handleChange2}
                                options={options2}
                                />
                            </div>
                            <div className="col-xs-12 contact-inputs-box">
                            <p>Optimzed for</p>
                                <Select
                                name="form-field-name"
                                value={this.state.selectedOption3.value}
                                onChange={this.handleChange3}
                                options={options3}
                                />
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