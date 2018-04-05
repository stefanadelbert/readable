import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Comment from './Comment';
import {voteComment, editComment, deleteComment} from '../actions/actions';

const Comments = ({comments, deleteComment, voteComment, editComment}) => {
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
                        onEdit={(body) => editComment(comment.id, body)}
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
        editComment: (id, body) => dispatch(editComment(id, body)),
        deleteComment: (parentId, id) => dispatch(deleteComment(parentId, id)),
        voteComment: (id, option) => dispatch(voteComment(id, option)),
    };
} 

export default connect(null, mapDispatchToProps)(Comments);
