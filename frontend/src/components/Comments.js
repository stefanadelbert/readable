import React from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';

const Comments = ({comments}) => {
    return (
        <div>
            {comments.map(comment => (
                <div key={comment.id}>
                    <Comment
                        id={comment.id}
                        body={comment.body}
                        author={comment.author}
                        timestamp={comment.timestamp}
                        voteScore={comment.voteScore}
                    />
                </div>
            ))}
        </div>
    )
}
Comments.defaultProps = {
    comments: [],
}
Comments.propTypes = {
    comments: PropTypes.array,
}
export default Comments;
