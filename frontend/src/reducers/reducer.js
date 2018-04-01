import {combineReducers} from 'redux';
import {schema, normalize} from 'normalizr';
import union from 'lodash/union';

import {UPDATE_POST, RECEIVE_CATEGORIES, RECEIVE_POSTS, RECEIVE_COMMENTS} from '../actions/actions';

const postSchema = new schema.Entity('posts');
const postListSchema = [postSchema];

function categories(state = [], action) {
	switch(action.type) {
		case RECEIVE_CATEGORIES:
			return union(state, action.categories);
		default:
			return state;
	}
}

const postsDefaultState = {result: [], entities: {posts: {}}} ;
function posts(state = postsDefaultState, action) {
	switch(action.type) {
        case RECEIVE_POSTS: {
            console.log('reducer.posts.RECEIVE_POSTS', action);
            let normalizedPosts = normalize(action.posts, postListSchema);
            let newState = {
                result: union(state.result, normalizedPosts.result),
                entities: {
                    posts: {...state.entities.posts, ...normalizedPosts.entities.posts},
                },
            }
			return newState;
        }
        case UPDATE_POST: {
            console.error('Shouldn\'t get here');
			return state;
        }
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

