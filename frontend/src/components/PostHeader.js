import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PostHeader = (props) => {
    let formattedTimestamp = new Date(props.timestamp).toString();
    return (
        <div>
            <div>
                <div>{props.title}</div>
                <div>{props.voteScore}</div>
                <div>{props.author}</div>
                <div>{formattedTimestamp}</div>
                <div>{props.commentCount}</div>
            </div>
        </div>
    );
}
PostHeader.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    voteScore: PropTypes.number.isRequired,
    commentCount: PropTypes.number.isRequired,
};
export default PostHeader;
