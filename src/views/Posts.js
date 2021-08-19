import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PostDetail from '../components/PostDetail';
import CreatePost from '../views/CreatePost';
import moment from 'moment';



export default class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
componentDidMount() {
    fetch('http://localhost:5000/api/posts')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                posts: data.posts
            })
        })
        .catch(err => console.error(err))
}

    render() {
        let posts = this.state.posts;
        if (posts){
            posts.sort((a,b) =>  moment(a.date_created) < moment(b.date_created) ? 1: -1)
        }
        return (
            <React.Fragment>
            <div>
            <Link to='/create-post' className='btn btn-success mt-3' > Create Post</Link>
                {/* <div className='list-group'>
                    {this.state.users.map((posts) =><CreatePost posts={posts}/>)}
                </div> */}
            </div>
            <ul>
                {posts.map((post, idx) => <PostDetail post={post} key={idx}/>)}
            </ul>
            </React.Fragment>
        )
    }
}
