const api = "http://localhost:3001";
const token = "12356";
const headers = {
	'Authorization': token
};

export const fetchPosts = () =>
	fetch(`${api}/posts`, {headers})
        .then(
            res => res.json(),
            error => console.log(error)
        )

export const fetchCategories = () =>
	fetch(`${api}/categories`, {headers})
        .then(
            res => res.json(),
            error => console.log(error)
        )
        .then(
            data => data.categories,
            error => console.log(error)
        )

export const fetchComments = (id) =>
    fetch(`${api}/posts/${id}/comments`, {headers})
        .then(
            res => res.json(),
            error => console.log(error)
        )
