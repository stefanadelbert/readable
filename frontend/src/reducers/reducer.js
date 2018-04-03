import {combineReducers} from 'redux';
import {schema, normalize} from 'normalizr';
import union from 'lodash/union';
import difference from 'lodash/difference';
import omit from 'lodash/omit';
import omitBy from 'lodash/omitBy';

import {RECEIVE_CATEGORIES, RECEIVE_POSTS, RECEIVE_COMMENTS, POST_DELETED, DELETE_COMMENTS_FOR_PARENT, COMMENT_DELETED} from '../actions/actions';

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
            let normalizedPosts = normalize(action.posts, postListSchema);
            let newState = {
                result: union(state.result, normalizedPosts.result),
                entities: {
                    posts: {...state.entities.posts, ...normalizedPosts.entities.posts},
                },
            }
			return newState;
        }
        case POST_DELETED: {
            let newState = {
                result: difference(state.result, [action.id]),
                entities: {
                    posts: omit(state.entities.posts, action.id),
                },
            }
			return newState;
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
        case COMMENT_DELETED:
            return {
                ...state,
                [action.parentId]: state[action.parentId].filter((item) => item.id !== action.id)
            }
		case DELETE_COMMENTS_FOR_PARENT:
            return omit(state, [action.id]);
		default:
			return state;
	}
}

export default combineReducers({
	categories,
    posts,
    comments
});

