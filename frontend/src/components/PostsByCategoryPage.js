import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import PostSummaries from './PostSummaries';
import {votePost} from '../actions/actions';

const PostsByCategoryPage = ({posts, category, onVote}) => {
    let filtered_posts = Object.keys(posts).reduce(
        (filtered_posts, id) => {
            if (posts[id].category === category) {
                filtered_posts.push(posts[id])
            }
            return filtered_posts;
        },
        []
    )
    return (
        <div>
            Posts for <strong>{category}</strong>
            <PostSummaries onVote={votePost} posts={filtered_posts} />
        </div>
    )
}
PostsByCategoryPage.propTypes = {
    posts: PropTypes.object.isRequired,
    category: PropTypes.string.isRequired,
}
function mapStateToProps({posts}) {
    return {
        posts: posts.entities.posts
    };
}

function mapDispatchToProps(dispatch) {
    return {
        votePost: (id, option) => dispatch(votePost(id, option)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsByCategoryPage);
