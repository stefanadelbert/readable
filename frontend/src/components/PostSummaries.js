import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import {PostHeader} from './Post';

const PostSummariesWrapper = styled.div``;
const PlainLink = styled(Link)`
    color: black;
    text-decoration: none;
`;

const PostSummaries = (props) => {
    return (
        <PostSummariesWrapper>
            {props.posts.map(post =>
                <PlainLink key={post.id} to={`/posts/${post.id}`}>
                    <PostHeader
                        title={post.title}
                        body={post.body}
                        author={post.author}
                        timestamp={post.timestamp}
                        voteScore={post.voteScore}
                        commentCount={post.commentCount}
                    />
                </PlainLink>
            )}
        </PostSummariesWrapper>
    );
};
PostSummaries.defaultProps = {
    posts: [],
};
PostSummaries.propTypes = {
    posts: PropTypes.array,
};
export default PostSummaries;
