import * as API from '../utils/api';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const UPDATE_POST = 'UPDATE_POST';
export const POST_DELETED = 'POST_DELETED';
export const DELETE_COMMENTS_FOR_PARENT = 'DELETE_COMMENTS_FOR_PARENT';

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

export function updatePost(post) {
	return {
		type: UPDATE_POST,
		post
	}
}

export function postDeleted(id) {
	return {
		type: POST_DELETED,
		id
	}
}

export function deleteCommentsForParent(id) {
	return {
		type: DELETE_COMMENTS_FOR_PARENT,
		id
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
    return dispatch => API.fetchComments(post.id)
        .then(
            comments => dispatch(receiveComments(post.id, comments))
        )
}

export function newPost(title, body, author, category) {
    console.log('newPost');
    let timestamp = Date.now();
    let id = String(timestamp);
    return dispatch => API.newPost(id, timestamp, title, body, author, category)
        .then(post => dispatch(receivePosts([post])));
}

export function editPost(id, title, body) {
    console.log('actions.editPost', id, title, body);
    return dispatch => API.editPost(id, title, body)
        .then(post => dispatch(receivePosts([post])));
}

export function votePost(id, option) {
    console.log('Voting');
    return dispatch => API.votePost(id, option)
        .then(post => dispatch(receivePosts([post])));
}

export function deletePost(id) {
    return dispatch => API.deletePost(id)
        .then(post => dispatch(postDeleted(post.id)))
        .then(post => dispatch(deleteCommentsForParent(post.id)))
}
