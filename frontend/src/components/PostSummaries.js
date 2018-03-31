import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import Author from './Author';
import Timestamp from './Timestamp';
import VoteScore from './VoteScore';
import CommentCount from './CommentCount';

const PostHeaderContainer = styled.div`
    padding: 1rem;
    margin: 0.20rem;
    &:hover {
        background-color: #eeeeee;
    }
`;
const PostHeaderDetailsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
`;
const Title = styled.div`flex: 1;`;
const PostHeader = (props) => {
    return (
        <PostHeaderContainer>
            <Title><strong>{props.title}</strong></Title>
            <PostHeaderDetailsWrapper>
                <Author author={props.author}/>
                <Timestamp timestamp={props.timestamp}/>
                <VoteScore voteScore={props.voteScore}/>
                <CommentCount commentCount={props.commentCount}/>
            </PostHeaderDetailsWrapper>
        </PostHeaderContainer>
    );
}
PostHeader.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    voteScore: PropTypes.number.isRequired,
    commentCount: PropTypes.number.isRequired,
};

const PostSummariesWrapper = styled.div``;
const PlainLink = styled(Link)`
    color: black;
    text-decoration: none;
`;
const PostSummaries = (props) => {
    console.log(props.posts);
    console.log(props.posts.result);
    return (
        <PostSummariesWrapper>
            {props.ids.map(id => {
                const post = props.posts[id];
                return <PlainLink key={id} to={`/posts/${id}`}>
                    <PostHeader
                        title={post.title}
                        body={post.body}
                        author={post.author}
                        timestamp={post.timestamp}
                        voteScore={post.voteScore}
                        commentCount={post.commentCount}
                    />
                </PlainLink>;
            })}
        </PostSummariesWrapper>
    );
};
PostSummaries.defaultProps = {
    ids: [],
    posts: {},
};
PostSummaries.propTypes = {
    ids: PropTypes.array,
    posts: PropTypes.object,
};
export default PostSummaries;
