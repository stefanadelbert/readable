import {combineReducers} from 'redux';
import {schema, normalize} from 'normalizr';
import union from 'lodash/union';
import difference from 'lodash/difference';
import omit from 'lodash/omit';

import {RECEIVE_CATEGORIES, RECEIVE_POSTS, RECEIVE_NEW_POST, RECEIVE_COMMENTS, POST_DELETED, DELETE_COMMENTS_FOR_PARENT, COMMENT_DELETED, RECEIVE_NEW_COMMENT, UPDATE_COMMENT} from '../actions/actions';

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
        case RECEIVE_NEW_POST: {
            let newState = {
                result: [...state.result, action.post.id],
                entities: {
                    posts: {
                        ...state.entities.posts,
                        [action.post.id]: action.post
                    }
                },
            }
			return newState;
        }
        case RECEIVE_NEW_COMMENT: {
            const {parentId} = action.comment;
            let newState = {
                result: [...state.result],
                entities: {
                    posts: {
                        ...state.entities.posts,
                        [parentId]: {
                            ...state.entities.posts[parentId],
                            commentCount: state.entities.posts[parentId].commentCount + 1
                        }
                    }
                },
            }
			return newState;
        }
        case COMMENT_DELETED: {
            const parentId = action.parentId;
            let newState = {
                result: [...state.result],
                entities: {
                    posts: {
                        ...state.entities.posts,
                        [parentId]: {
                            ...state.entities.posts[parentId],
                            commentCount: state.entities.posts[parentId].commentCount - 1
                        }
                    }
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
		case RECEIVE_NEW_POST:
            return {
                ...state,
                [action.post.id]: [],
            }
        case RECEIVE_NEW_COMMENT: {
            const {parentId} = action.comment;
            return {
                ...state,
                [parentId]: [
                    ...state[parentId].filter(comment => comment.id !== action.comment.id),
                    action.comment
                ]
            }
        }
		case UPDATE_COMMENT: {
            const {parentId, id} = action.comment;
            return {
                ...state,
                [parentId]: state[parentId].map(
                    comment => {
                        return comment.id === id? action.comment : comment;
                    }
                )
            }
        }
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

