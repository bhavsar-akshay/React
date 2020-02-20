import React, { Component } from 'react'
import axios from 'axios';

class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            userId:'',
             title:'',
             body:''
        }
    }
    
    changeHandler = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(res => {
            console.log(res);
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit} autoComplete="off">
                    <div className="form-group">
                        <label >User Id</label> &nbsp;&nbsp;
                        <input type="text" name="userId" value={this.state.userId} onChange={this.changeHandler}></input>
                    </div>
                    <div className="form-group">
                        <label >Title</label> &nbsp;&nbsp;
                        <input type="text" name="title" value={this.state.title} onChange={this.changeHandler}></input>
                    </div>

                    <div className="form-group">
                        <label >Body</label>&nbsp;&nbsp;
                        <input type="text" name="body" value={this.state.body} onChange={this.changeHandler}></input>
                    </div>

                    <div className="form-group">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default PostForm
