import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Comments from './Comments';
import PostHeader from './PostHeader';

const PostBody = ({body}) => {
    return (
        <p>{body}</p>
    );
}
PostBody.propTypes = {
    body: PropTypes.string.isRequired,
}

const InvalidPost = (props) => {
    return (
        <div>
            <h3>Invalid Post</h3>
        </div>
    )
}	

class PostFull extends React.Component {
    render() {
        let filtered_posts = this.props.posts.filter(post => post.id === this.props.id);
        if (filtered_posts.length === 1) {
            let post = filtered_posts[0]
            return (
                <div>
                    <PostHeader {...post} />
                    <PostBody {...post} />
                    <Comments comments={this.props.comments[post.id]} />
                </div>
            )
        }
        return <InvalidPost />
    }
}

function mapStateToProps({posts, comments}) {
	return {
        posts,
        comments
	};
}

export default connect(mapStateToProps, null)(PostFull);
