import React from 'react';
import PropTypes from 'prop-types';
import FaCommentO from 'react-icons/lib/fa/comment-o';

const CommentCount = (props) => {
    return (
        <div className="d-flex align-items-center">
            <FaCommentO/>{props.commentCount}
        </div>
    );
}
CommentCount.propTypes = {
    commentCount: PropTypes.number.isRequired,
};
export default CommentCount;
