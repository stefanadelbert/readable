import React from 'react';
import PropTypes from 'prop-types';

import PostSummary from './PostSummary';

export default class Posts extends React.Component {
    static defaultProps = {
        posts: [],
    }
    static propTypes = {
        posts: PropTypes.array,
    }
	render() {
		return (
			<div>
                <ul>
                    {this.props.posts.map(post =>
                        <li key={post.id}>
                            <PostSummary
                                id={post.id}
                                title={post.title}
                                body={post.body}
                                author={post.author}
                                timestamp={post.timestamp}
                                voteScore={post.voteScore}
                                commentCount={post.commentCount}
                            />
                        </li>
                    )}
                </ul>
			</div>
		);
	}
}
