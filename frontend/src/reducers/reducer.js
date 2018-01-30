import {combineReducers} from 'redux';

import {ADD_CATEGORIES, ADD_POSTS} from '../actions/categories';

const initialStateCategories = []
const initialStatePosts = []

function categories(state = initialStateCategories, action) {
	switch(action.type) {
		case ADD_CATEGORIES:
			return [...state, ...action.categories];
		default:
			return state;
	}
}

function posts(state = initialStatePosts, action) {
	switch(action.type) {
		case ADD_POSTS:
			return [...state, ...action.posts];
		default:
			return state;
	}
}

export default combineReducers({
	categories,
	posts
});

