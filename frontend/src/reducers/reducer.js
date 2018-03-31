import {combineReducers} from 'redux';
import {schema, normalize} from 'normalizr';

import {UPDATE_POST, RECEIVE_CATEGORIES, RECEIVE_POSTS, RECEIVE_COMMENTS} from '../actions/actions';

const postSchema = new schema.Entity('posts');
const postListSchema = [postSchema];

function categories(state = [], action) {
	switch(action.type) {
		case RECEIVE_CATEGORIES:
			return [...state, ...action.categories];
		default:
			return state;
	}
}

function posts(state = {result: [], entities: {posts: {}}}, action) {
	switch(action.type) {
		case RECEIVE_POSTS:
            var normalizedPosts = normalize(action.posts, postListSchema);
			return Object.assign(state, normalizedPosts);
		case UPDATE_POST:
            console.log('UPDATE_POST');
            var normalizedPost = normalize(action.post, postSchema);
			return Object.assign(state, normalizedPost);
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

