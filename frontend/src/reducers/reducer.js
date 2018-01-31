import {combineReducers} from 'redux';

import {ADD_CATEGORIES, ADD_POSTS, ADD_COMMENTS} from '../actions/actions';

function categories(state = [], action) {
	switch(action.type) {
		case ADD_CATEGORIES:
			return [...state, ...action.categories];
		default:
			return state;
	}
}

function posts(state = [], action) {
	switch(action.type) {
		case ADD_POSTS:
			return [...state, ...action.posts];
		default:
			return state;
	}
}

function comments(state = {}, action) {
	switch(action.type) {
		case ADD_COMMENTS:
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

