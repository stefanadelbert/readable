import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FaCommentO from 'react-icons/lib/fa/comment-o';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 0.2rem;
`
const Content = styled.span``;
const CommentCount = (props) => {
    return (
        <Wrapper>
            <FaCommentO/>
            <Content>{props.commentCount}</Content>
        </Wrapper>
    );
}
CommentCount.propTypes = {
    commentCount: PropTypes.number.isRequired,
};
export default CommentCount;