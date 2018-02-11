import React from 'react';
import PropTypes from 'prop-types';

const Comment = (props) => {
    let timestamp = new Date(props.timestamp).toString();
    return (
        <div>
            <div>
                <div>{props.body}</div>
                <div>{props.author}</div>
                <div>{timestamp}</div>
                <div>{props.voteScore}</div>
            </div>
        </div>
    );
}
Comment.propTypes = {
    body: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    voteScore: PropTypes.number.isRequired,
};

const Comments = ({comments}) => {
    if (comments === undefined) {
        return <div>No comments</div>
    }
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
Comments.defaultProps = {
    comments: [],
}
Comments.propTypes = {
    comments: PropTypes.array,
}
export default Comments;
