import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import PostSummaries from './PostSummaries';

const PostsByCategory = ({posts, category}) => {
    let filtered_posts = posts.filter(
        post => post.category === category
    );
    return (
        <div>
            Posts for <strong>{category}</strong>
            <PostSummaries posts={filtered_posts} />
        </div>
    )
}
PostsByCategory.propTypes = {
    posts: PropTypes.array.isRequired,
    category: PropTypes.string.isRequired,
}
function mapStateToProps({posts}) {
	return {
        posts
	};
}

export default connect(mapStateToProps, null)(PostsByCategory);
