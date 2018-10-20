import { FETCH_POSTS, NEW_POST } from './types.js';


export const fetchPosts = () => dispatch => {
    console.log('postAction: fetching posts');
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => dispatch({       //dipatching the data to the reducer
        type: FETCH_POSTS,
        payload: posts
    }));
 
}

export const createPost = (postData) => dispatch => {
    console.log('postAction: creating post');
    fetch('http://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(post => dispatch({       //dipatching the data to the reducer
        type: NEW_POST,
        payload: post
    }))
}