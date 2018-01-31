import React from 'react';
import PropTypes from 'prop-types';

const PostsByCategory = ({category}) => {
    return (
    <div>
        Posts for {category}:
    </div>
    )
}
PostsByCategory.propTypes = {
    category: PropTypes.string.isRequired
}
export default PostsByCategory;
