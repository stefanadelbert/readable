import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {fetchComments} from '../utils/api';
import Comments from './Comments';

const Post = ({title, body}) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
}
Post.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
}

const InvalidPost = (props) => {
    return (
        <div>
            <h3>Invalid Post</h3>
        </div>
    )
}	

class PostWithComments extends React.Component {
    state = {
        comments: [],
    }
    componentDidMount() {
        fetchComments(this.props.id)
            .then(comments => this.setState({comments}))
            .catch(error => console.log(error))
    }
    render() {
        let filtered_posts = this.props.posts.filter(post => post.id === this.props.id);
        if (filtered_posts.length === 1) {
            let post = filtered_posts[0]
            return (
                <div>
                    <Post
                        title={post.title}
                        body={post.body}
                        comments={this.state.comments}
                    />
                    <Comments comments={this.state.comments} />
                </div>
            )
        }
        return <InvalidPost />
    }
}

function mapStateToProps({posts}) {
	return {
		posts
	};
}

export default connect(mapStateToProps, null)(PostWithComments);
