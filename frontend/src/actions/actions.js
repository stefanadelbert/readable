import * as API from '../utils/api';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';

export function receiveCategories(categories) {
	return {
		type: RECEIVE_CATEGORIES,
		categories
	}
}

export function receivePosts(posts) {
	return {
		type: RECEIVE_POSTS,
		posts
	}
}

export function receiveComments(postId, comments) {
	return {
		type: RECEIVE_COMMENTS,
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

export function newPost(title, body, author, category) {
    console.log('newPost');
    let timestamp = Date.now();
    let id = String(timestamp);
    return dispatch => API.newPost(id, timestamp, title, body, author, category)
        .then(post => dispatch(receivePosts([post])))
}

export function editPost(id, title, body) {
    return dispatch => API.editPost(id, title, body)
}
