import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Comment from './Comment';
import {voteComment, deleteComment} from '../actions/actions';

const Comments = ({comments, deleteComment, voteComment}) => {
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
                        onDelete={() => deleteComment(comment.parentId, comment.id)}
                        onVote={(option) => voteComment(comment.id, option)}
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

function mapDispatchToProps(dispatch) {
    return {
        deleteComment: (parentId, id) => dispatch(deleteComment(parentId, id)),
        voteComment: (id, option) => dispatch(voteComment(id, option)),
    };
} 

export default connect(null, mapDispatchToProps)(Comments);
