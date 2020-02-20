import React, { Component } from 'react';

class Message extends Component{
    constructor(){
        super();
        this.state = {  
            Message: "welcome to state",
            welcome:"welcome"
        }
    }

    changeMessage(){
        this.setState({
            Message:"thank you for subscribe"
        })
    }

    changeWelcome(){
        this.setState({
            welcome:"Bye Bye Unsubscribe"
        })
    }

    render(){
       return (
            <div>
                <h3>Message {this.props.message}</h3>
                <h3>{this.state.Message}</h3>
                <h3>{this.state.welcome}</h3>
                <button onClick={() => this.changeMessage()}> Subscribe </button> 
                <button onClick={() => this.changeWelcome()}> Unsubscribe </button>
            </div>
       );
    }
}

export default Message;