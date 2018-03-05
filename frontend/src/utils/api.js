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

export const addPost = (id, timestamp, title, body, author, category) =>
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
        `${api}/posts/:${id}`,
        {
            method: 'PUT',
            headers,
            body: {
                title,
                body,
            }
        },
    ).then(
        res => res.json(),
        error => console.error(error)
    )
