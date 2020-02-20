import React, { Component } from 'react'
import { UserConsumer } from './UserContext';

export class ComponentC extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (UserName) => {
                        return <div>Component C: {UserName}</div>
                    }
                }
            </UserConsumer>
        )
    }
}

export default ComponentC
