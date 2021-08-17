import React, { Component } from 'react'
export default class classinfo extends Component {

render() {
    const className = this.props.className;
    return (
        <tr>
          
            <td>{className.className.FirstName}</td>
            <td>{className.className.LastName}</td>
            
        </tr>
    )
}
}
