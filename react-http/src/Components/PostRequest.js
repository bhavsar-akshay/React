import React, { Component } from 'react'
import  axios from 'axios';

class PostRequest extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             getPosts:[],
             errorMsg:''
        }
    }
    
    componentDidMount(){
        axios.get('./Products.json')
        .then(response =>{
            console.log(response)
            this.setState({
                getPosts: response.data                
            });
        })
        .catch(error => {
            this.setState({
                errorMsg:"Error is Retriving Data"
            })
        })
    }

    render() {
        const posts = this.state.getPosts;

        return (
            <div>
                {/* <h2>List of Posts</h2>
                 {
                     posts.length ? posts.map( post => <div key={post.id}> {post.id} : {post.title} </div>) : <div className ="text-danger">{this.state.errorMsg} </div>
                 } */}
            </div>
        )
    }
}

export default PostRequest
