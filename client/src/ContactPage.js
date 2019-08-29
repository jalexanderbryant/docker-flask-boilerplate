import React, { Component } from 'react';
import App from './App';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class ContactPage extends Component
{
    constructor(props){
        super(props);
        this.state={
            email: '',
            username: '',
            message: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        console.log('keystroke');
        const target = event.target
        const value = target.value
        const name = target.name
        
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event){
        alert('A message was submitted from: ' + this.state.username);
        event.preventDefault();
    }



    render(){
        return(
            <div className="page">
                <div>
                    <h2>Contact Page</h2>
                </div>

                <form onSubmit={ this.handleSubmit }>
                    <div> 
                        <label>
                            Name:
                            <input type="text"
                                name="username"
                                value={this.state.username}
                                onChange={this.handleChange} />
                        </label>
                        <br />
                        
                        <label>
                            Email:
                            <input type="text" 
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange} />
                        </label>
                        <br />
                        
                        <label>
                            Message: 
                            <textarea 
                                name="message"
                                value={this.state.message}
                                onChange={this.handleChange} />
                        </label>
                        <br />
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        );
    }
}

