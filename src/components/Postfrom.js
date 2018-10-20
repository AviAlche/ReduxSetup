import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../actions/postAction.js'


class Postfrom extends Component {
    
    constructor(props){
        super(props);
        this.state ={
            title: '',
            body: ''
        };

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
  
    render() {
        return (
        <div>
            <h1>Add posts</h1>
            <form onSubmit={this.onSubmit}>
                <div>
                    <label>Title:</label>
                    <input type='text' name='title' value={this.state.title} onChange={this.handleTitleChange}></input>
                </div>
                <br/>
                <div>
                    <label>Body:</label>
                    <textarea type='text' name='textarea' value={this.state.body} onChange={this.handleBodyChange}></textarea>
                </div>
                <br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
        )
    }

    handleTitleChange(event){
        this.setState({title: event.target.value});
    }

    handleBodyChange(event){
        this.setState({body: event.target.value});
    }

    //user interation and creates an action
    onSubmit(event){
        event.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        }

        this.props.createPost(post);    //creating the action
    }
}

Postfrom.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, {createPost} )(Postfrom);
