import * as API from '../utils/api';

export const ADD_CATEGORIES = 'ADD_CATEGORIES';
export const ADD_POSTS = 'ADD_POSTS';
export const ADD_COMMENTS = 'ADD_COMMENTS';

export function receiveCategories(categories) {
	return {
		type: ADD_CATEGORIES,
		categories
	}
}

export function receivePosts(posts) {
	return {
		type: ADD_POSTS,
		posts
	}
}

export function receiveComments(postId, comments) {
	return {
		type: ADD_COMMENTS,
        postId,
		comments
	}
}

export function fetchCategories() {
    return dispatch => API.fetchCategories().then(
        categories => dispatch(receiveCategories(categories))
    )
}

export function fetchPosts() {
    return dispatch => API.fetchPosts().then(
        posts => {
            dispatch(receivePosts(posts))
            posts.map(post => dispatch(fetchComments(post)))
        }
    )
}

export function fetchComments(post) {
    return dispatch => API.fetchComments(post.id).then(
        comments => dispatch(receiveComments(post.id, comments))
    )
}

export function addPost(title, body, author, category) {
    let timestamp = Date.now();
    let id = timestamp;
    return dispatch => API.addPost(id, timestamp, title, body, author, category)
        .then(post => console.log(post));
}

export function editPost(id, title, body) {
    return dispatch => API.editPost(id, title, body)
}
