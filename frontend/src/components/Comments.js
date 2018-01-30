import React from 'react';
import PropTypes from 'prop-types';

const Comment = (props) => {
    let timestamp = new Date(props.timestamp).toString();
    return (
        <div>
            <div>
                {props.body}-
                <strong>{props.author}</strong>
                {timestamp}
            </div>
        </div>
    )
}
Comment.propTypes = {
    body: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    voteScore: PropTypes.number.isRequired,
}

const Comments = ({comments}) => {
    return (
        <ul>
            {comments.map(comment => (
                <li key={comment.id}>
                    <Comment
                        body={comment.body}
                        author={comment.author}
                        timestamp={comment.timestamp}
                        voteScore={comment.voteScore}
                    />
                </li>
            ))}
        </ul>
    );
}
Comments.propTypes = {
    comments: PropTypes.array.isRequired,
}
export default Comments;
