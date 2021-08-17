import React, { Component } from 'react'
import classinfo from '../components/classinfo';

export default class Kekambas66 extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>Welcome {this.props.myName}</h1>
                <button className='btn btn-primary' onClick={this.props.updateName}>Update Name</button>
                <table class="table table-dark table-striped">
                    <thead>
                        <tr>
                            
                            <th>First Name</th>
                            <th>Last Name</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.className.map((racer, idx) => (<className Names={FirstName} key={idx} />))}
                    </tbody>
                </table>
            </div>
        )
    }
}
