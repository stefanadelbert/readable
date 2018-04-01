import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';

import {Post} from './Post';

const PostSummaries = (props) => {
    console.log('PostSummaries', props.posts);
    return (
        <div>
        {props.posts.map(post => 
            <div key={post.id}>
                <Post
                    title={post.title}
                    body={post.body}
                    author={post.author}
                    timestamp={post.timestamp}
                    voteScore={post.voteScore}
                    commentCount={post.commentCount}
                    deleted={post.deleted}
                >
                    <Button tag={Link} to={`/posts/${post.id}`}>Go</Button>
                </Post>
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
