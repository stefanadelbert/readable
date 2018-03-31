import {combineReducers} from 'redux';
import {schema, normalize} from 'normalizr';
import merge from 'lodash/merge';

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

const postsDefaultState = {result: [], entities: {posts: {}}} ;
function posts(state = postsDefaultState, action) {
	switch(action.type) {
		case RECEIVE_POSTS:
            let normalizedPosts = normalize(action.posts, postListSchema);
            var newState = merge({}, state, normalizedPosts);
			return newState;
        case UPDATE_POST:
            console.log('UPDATE_POST');
            var normalizedPost = normalize(action.post, postSchema);
            var newState = merge({}, state, normalizedPost);
			return newState;
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

