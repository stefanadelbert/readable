import * as API from '../utils/api';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_NEW_POST = 'RECEIVE_NEW_POST';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_NEW_COMMENT = 'RECEIVE_NEW_COMMENT';
export const POST_DELETED = 'POST_DELETED';
export const DELETE_COMMENTS_FOR_PARENT = 'DELETE_COMMENTS_FOR_PARENT';
export const COMMENT_DELETED = 'COMMENT_DELETED';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';

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

export function receiveNewPost(post) {
	return {
		type: RECEIVE_NEW_POST,
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

export function receiveNewComment(comment) {
	return {
		type: RECEIVE_NEW_COMMENT,
		comment
	}
}

export function updateComment(comment) {
	return {
		type: UPDATE_COMMENT,
		comment
	}
}

export function commentDeleted(parentId, id) {
	return {
		type: COMMENT_DELETED,
        parentId,
		id,
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
    let timestamp = Date.now();
    let id = String(timestamp);
    return dispatch => API.newPost(id, timestamp, title, body, author, category)
        .then(post => dispatch(receiveNewPost(post)));
}

export function editPost(id, title, body) {
    return dispatch => API.editPost(id, title, body)
        .then(post => dispatch(receivePosts([post])));
}

export function votePost(id, option) {
    return dispatch => API.votePost(id, option)
        .then(post => dispatch(receivePosts([post])));
}

export function deletePost(id) {
    return dispatch => API.deletePost(id)
        .then(post => dispatch(postDeleted(post.id)))
        .then(post => dispatch(deleteCommentsForParent(post.id)))
}

export function deleteComment(parentId, id) {
    return dispatch => API.deleteComment(id)
        .then(post => dispatch(commentDeleted(parentId, id)))
}

export function newComment(parentId, body, author) {
    let timestamp = Date.now();
    let id = String(timestamp);
    return dispatch => API.newComment(id, parentId, timestamp, body, author)
        .then(response => dispatch(receiveNewComment({
            id,
            parentId,
            timestamp,
            body,
            author,
            ...response
        })));
}

export function voteComment(id, option) {
    console.log('actions.voteComment', id, option);
    return dispatch => API.voteComment(id, option)
        .then(comment => dispatch(updateComment(comment)));
}
