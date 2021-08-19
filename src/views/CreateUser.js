import React, { Component } from 'react'

export default class CreateUser extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        console.log(username, email, password, confirmPassword);
        if (password === confirmPassword) {
            console.log("These passwords don't match")
            return
        }
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Accept", "+/")


        const requestBody = JSON.stringify({
            "username": username,
            "email": email,
            "password": password
        })

        fetch('http://localhost:5000/create-user', {
            method: 'POST',
            headers: myHeaders,
            body: requestBody
    }).then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))
            


    }
    
    render() {
        return (
            <div>
                This is the Create User Page
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <fieldset>
                            <label htmlFor='username'></label>
                            <input type='text' className='form-control'name='username' placeholder='Username' />
                        </fieldset>
                        <fieldset>
                            <label htmlFor='email'></label>
                            <input type='text' className='form-control'name='email' placeholder='Email' />
                        </fieldset>
                        <fieldset>
                            <label htmlFor='password'></label>
                            <input type='password' className='form-control'name='password' placeholder='Password' />
                        </fieldset>
                        <fieldset>
                            <label htmlFor='confirmPassword'></label>
                            <input type='password' className='form-control'name='confirmPassword' placeholder='Confirm Password' />
                        </fieldset>
                        <button type='submit'className='btn btn-outline-primary mt-3'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
