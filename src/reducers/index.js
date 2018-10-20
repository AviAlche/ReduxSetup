import { combineReducers } from 'redux';
import postReducers from './postReducer.js';


export default combineReducers({
    posts: postReducers
})