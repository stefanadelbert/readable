import * as API from '../utils/api';

export const ADD_CATEGORIES = 'ADD_CATEGORIES';
export const ADD_POSTS = 'ADD_POSTS';
export const ADD_COMMENTS = 'ADD_COMMENTS';

export function addCategories(categories) {
	return {
		type: ADD_CATEGORIES,
		categories
	}
}

export function addPosts(posts) {
	return {
		type: ADD_POSTS,
		posts
	}
}

export function addComments(postId, comments) {
	return {
		type: ADD_COMMENTS,
        postId,
		comments
	}
}

export function fetchCategories() {
    return dispatch => API.fetchCategories().then(
        categories => dispatch(addCategories(categories))
    )
}

export function fetchPosts() {
    return dispatch => API.fetchPosts().then(
        posts => {
            dispatch(addPosts(posts))
            posts.map(post => dispatch(fetchComments(post)))
        }
    )
}

export function fetchComments(post) {
    return dispatch => API.fetchComments(post.id).then(
        comments => dispatch(addComments(post.id, comments))
    )
}
