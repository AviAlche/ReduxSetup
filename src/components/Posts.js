import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postAction.js'
import PropTypes from 'prop-types';


class Posts extends Component {

    componentWillMount(){
        this.props.fetchPosts();
    }

    //run when it recieves a new props from the state
    componentWillReceiveProps(nextProps){ 
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost);    //adding the new post to all the posts
        }
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        return (
        <div>
            <h1>posts</h1>
            {postItems}
        </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object.isRequired
}

const mapStateToProps = state => ({ 
    posts: state.posts.items ,   //referencing the posts in the root reducer (/reducer/index.js) 
    newPost: state.posts.item
})     
    
export default connect(mapStateToProps, { fetchPosts })(Posts);  //first arg is where we map the state to the props, then the fetch posts funtion(the action) and finally the posts obj 