const api = "http://localhost:3001";
const token = "12356";
const headers = {
	'Authorization': token
};

export const fetchPosts = () =>
	fetch(`${api}/posts`, {headers})
        .then(
            res => res.json(),
            error => console.error(error)
        )

export const fetchCategories = () =>
	fetch(`${api}/categories`, {headers})
        .then(
            res => res.json(),
            error => console.error(error)
        )
        .then(
            data => data.categories,
            error => console.error(error)
        )

export const fetchComments = (id) =>
    fetch(`${api}/posts/${id}/comments`, {headers})
        .then(
            res => res.json(),
            error => console.error(error)
        )

export const newPost = (id, timestamp, title, body, author, category) =>
    fetch(
        `${api}/posts`,
        {
            method: 'POST',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    id,
                    timestamp,
                    title,
                    body,
                    author,
                    category,
                }
            )
        },
    )
    .then(
        res => res.json(),
        error => console.error(error)
    )

export const editPost = (id, title, body) =>
    fetch(
        `${api}/posts/${id}`,
        {
            method: 'PUT',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    title,
                    body,
                }
            )
        },
    ).then(
        res => res.json(),
        error => console.error(error)
    )

export const votePost = (id, option) =>
    fetch(
        `${api}/posts/${id}`,
        {
            method: 'POST',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    option,
                }
            )
        },
    ).then(
        res => res.json(),
        error => console.error(error)
    )

export const deletePost = (id) =>
    fetch(
        `${api}/posts/${id}`,
        {
            method: 'DELETE',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
        },
    ).then(
        res => res.json(),
        error => console.error(error)
    )

export const deleteComment = (id) =>
    fetch(
        `${api}/comments/${id}`,
        {
            method: 'DELETE',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
        },
    ).then(
        res => res.json(),
        error => console.error(error)
    )

export const newComment = (id, parentId, timestamp, body, author) =>
    fetch(
        `${api}/comments`,
        {
            method: 'POST',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    id,
                    parentId,
                    timestamp,
                    body,
                    author,
                }
            )
        },
    )
    .then(
        res => res.json(),
        error => console.error(error)
    )

export const editComment = (id, timestamp, body) =>
    fetch(
        `${api}/comments/${id}`,
        {
            method: 'PUT',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    timestamp,
                    body,
                }
            )
        },
    ).then(
        res => res.json(),
        error => console.error(error)
    )
export const voteComment = (id, option) =>
    fetch(
        `${api}/comments/${id}`,
        {
            method: 'POST',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    option,
                }
            )
        },
    ).then(
        res => res.json(),
        error => console.error(error)
    )

