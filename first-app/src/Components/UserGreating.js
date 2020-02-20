import React, { Component } from 'react'

class UserGreating extends Component {
    constructor(props){
        super(props);

        this.state ={ 
            isLoggedIn : true,
        }
    }
    render() {
        if(this.state.isLoggedIn){
            return (
                <div>
                    Welcome Akshay
                </div>
            )
        }else{
            return (
                <div>
                    welcome Guest
                </div>
            )
        }
    }
}

export default UserGreating
