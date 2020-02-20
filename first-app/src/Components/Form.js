import React, { Component } from 'react'
import $ from 'jquery'; 

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            comments:'',
            topic:''
        }
    }

    userNamehandler = event =>{
        this.setState({
            userName:event.target.value
        })
    }

    commentHandler = event =>{
        this.setState({
            comments : event.target.value
        })
    }

    topicHandler = event =>{
        this.setState({
            topic : event.target.value
        })
    }
    
    submitForm = event =>{
        event.preventDefault();

        if(`${this.state.userName}` &&  `${this.state.comments}` && `${this.state.topic}`){
            $('.resetBtn').removeAttr('disabled');
            $('.submitBtn').attr('disabled','disabled');
            $('.result').html(`User Name: ${this.state.userName} <br /> Comments: ${this.state.comments} 
            <br /> Selected Topic: ${this.state.topic}`);
        }else{
            alert('plese fill the details & select the topic ')
        }
    }

    resetForm = event =>{
        $('.resetBtn').attr('disabled','disabled');
        $('.submitBtn').removeAttr('disabled');
        $('.result').html('')
        this.setState({
            userName: '',
            comments:'',
            topic:''
        })
    }

    render() {
        return (
            <form onSubmit={this.submitForm} onReset={this.resetForm}>
                <div>
                    <lable>User Name</lable> &nbsp;
                    <input type="text" value={this.state.userName} onChange={this.userNamehandler} />
                </div>
                <br />
                <div>
                    <lable> Comments </lable>&nbsp;
                    <textarea value={this.state.comments} onChange={this.commentHandler}></textarea>
                </div>
                <br />
                <div>
                    <lable>Topic</lable> &nbsp;
                    <select value={this.state.topic} onChange={this.topicHandler}>
                        <option defaultValue="" >Select The Topic</option>
                        <option value="angular">Angular</option>
                        <option value="react">React</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <br/>
                <div>
                    <button type="submit" className="submitBtn">Submit</button> &nbsp; &nbsp;   
                    <button type="reset" disabled className="resetBtn">Reset</button>
                </div><br />
                <div className="result">
                    
                </div>
            </form>
        )
    }
}

export default Form
