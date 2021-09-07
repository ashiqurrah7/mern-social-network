import {
    GET_POST,
    GET_POSTS,
    POST_ERROR,
    UPDATE_POST
} from '../actions/types';

const initialState = {
    posts: [],
    post: null,
    loading: true,
    error: {}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action){
    const {type, payload} = action;

    switch(type){
        case GET_POST:
        case UPDATE_POST:
            return{
                ...state,
                post: payload,
                loading: false
            }
        case GET_POSTS:
            return{
                ...state,
                posts: payload,
                loading: false
            } 
        case POST_ERROR:
            return {
                ...state,
                error:payload,
                loading:false
            }
        default:
            return state;
    }
}