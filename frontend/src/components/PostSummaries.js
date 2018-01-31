import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import PostHeader from './PostHeader';

const PostSummaries = (props) => {
    return (
        <ul>
            {props.posts.map(post =>
                <li key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        <PostHeader
                            title={post.title}
                            body={post.body}
                            author={post.author}
                            timestamp={post.timestamp}
                            voteScore={post.voteScore}
                            commentCount={post.commentCount}
                        />
                    </Link>
                </li>
            )}
        </ul>
    );
};
PostSummaries.defaultProps = {
    posts: [],
};
PostSummaries.propTypes = {
    posts: PropTypes.array,
};
export default PostSummaries;
