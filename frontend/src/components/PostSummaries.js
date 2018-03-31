import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Button, Card, CardTitle, CardSubtitle, CardBody} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

import Author from './Author';
import Timestamp from './Timestamp';
import VoteScore from './VoteScore';
import CommentCount from './CommentCount';

const PostHeader = (props) => {
    return (
        <Card>
            <CardBody>
                <CardTitle>{props.title}</CardTitle>
                <CardSubtitle>
                    <div className=".d-flex .flex-row-reverse">
                        <Author author={props.author}/>
                        <Timestamp timestamp={props.timestamp}/>
                        <VoteScore voteScore={props.voteScore}/>
                        <CommentCount commentCount={props.commentCount}/>
                    </div>
                </CardSubtitle>
                {props.children}
            </CardBody>
        </Card>
    );
}
PostHeader.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    voteScore: PropTypes.number.isRequired,
    commentCount: PropTypes.number.isRequired,
};

const PostSummaries = (props) => {
    console.log('PostSummaries', props.posts);
    return (
        <div>
        {props.posts.map(post => 
            <div key={post.id}>
                <PostHeader
                    title={post.title}
                    body={post.body}
                    author={post.author}
                    timestamp={post.timestamp}
                    voteScore={post.voteScore}
                    commentCount={post.commentCount}
                >
                    <Button tag={Link} to={`/posts/${post.id}`}>Go</Button>
                </PostHeader>
            </div>
        )}
        </div>
    );
};
PostSummaries.defaultProps = {
    posts: [],
};
PostSummaries.propTypes = {
    posts: PropTypes.array,
};
export default PostSummaries;
