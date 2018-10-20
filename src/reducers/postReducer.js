import { FETCH_POSTS, NEW_POST } from '../actions/types.js';

const initialState = {
    items: [],
    item: {}
}

//getting the actions from the postAction and returning acording to the type
export default function(state=initialState, action){
    switch (action.type){
        case FETCH_POSTS:
            console.log('in postReducer FETCH_POSTS case')
            return {
                ...state,
                items: action.payload       //all the posts
            }

        case NEW_POST:
            console.log('in postReducer NEW_POST case')
            return {
                ...state,
                item: action.payload        //a single post (the chosen one)
            }
        default:
            return state; 
    }
    
}