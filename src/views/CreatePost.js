import React, { Component } from 'react'

export default class CreatePost extends Component {
    handlePostSubmit = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const body = e.target.body.value;

        console.log(title,body)
        


        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");


        const requestBody = JSON.stringify({
            "title": title,
            "body": body,
            
        })

        fetch('http://localhost:5000/create-post', {
            method: 'POST',
            headers: myHeaders,
            body: requestBody
    }).then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))
            

    }
    
    
    render(){
        return (
            // <div>
            //     <div className='row'>
            //         {this.state.posts.map((post) =><CreatePost post={post} />)}
            //     </div>
                <form onSubmit={this.handlePostSubmit}>
                    <div className='form-group'>
                        <fieldset>
                            <label htmlFor='title'>Title</label>
                            <input type='text' className='form-control'name='title' placeholder='Title' />
                        </fieldset>
                        <fieldset>
                            <label htmlFor='body'>Body</label>
                            <input type='text' className='form-control'name='body' placeholder='Body' />
                        </fieldset>
                        
                        <button type='submit'className='btn btn-outline-success mt-3'>Create Post</button>
                    </div>
                </form>
            // </div>
            
        )
    }


//     render() {
//         return (
//         <div>
//             <div>
//                 <Link to='/create-post' className='btn btn-success'> Create Post</Link>
//                 <div className='row'>
//                     {this.state.posts.map((post) =><Create-Post post={post} />)}
//                 </div>
//         </div>
//             </div>
//     )
// }
}
