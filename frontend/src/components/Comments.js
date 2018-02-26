import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Author from './Author';
import Timestamp from './Timestamp';
import VoteScore from './VoteScore';

const CommentContainer = styled.div`
    padding: 1rem;
    margin: 0.20rem;
`;
const CommentDetailsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
`;
const Comment = (props) => {
    return (
        <CommentContainer>
            <div style={{flex: 1}}>{props.body}</div>
            <CommentDetailsWrapper>
                <Author author={props.author}/>
                <Timestamp timestamp={props.timestamp} />
                <VoteScore voteScore={props.voteScore}/>
            </CommentDetailsWrapper>
        </CommentContainer>
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
                <div key={comment.id}>
                    <Comment
                        body={comment.body}
                        author={comment.author}
                        timestamp={comment.timestamp}
                        voteScore={comment.voteScore}
                    />
                </div>
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
