import {combineReducers} from 'redux';

import {RECEIVE_CATEGORIES, RECEIVE_POSTS, RECEIVE_COMMENTS} from '../actions/actions';

function categories(state = [], action) {
	switch(action.type) {
		case RECEIVE_CATEGORIES:
			return [...state, ...action.categories];
		default:
			return state;
	}
}

function posts(state = [], action) {
	switch(action.type) {
		case RECEIVE_POSTS:
			return [...state, ...action.posts];
		default:
			return state;
	}
}

function comments(state = {}, action) {
	switch(action.type) {
		case RECEIVE_COMMENTS:
            return {
                ...state,
                [action.postId]: action.comments
            };
		default:
			return state;
	}
}

export default combineReducers({
	categories,
    posts,
    comments
});

