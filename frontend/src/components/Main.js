import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Categories from './Categories';
import AddLink from './AddLink';
import PostSummaries from './PostSummaries';

const Main = (props) => { 
    return (
        <div>
            <Categories categories={props.categories} />
            <AddLink />
            <PostSummaries posts={props.posts} />
        </div>
    );
}

Main.propTypes = {
    categories: PropTypes.array.isRequired,
    posts: PropTypes.array.isRequired,
}

function mapStateToProps({categories, posts}) {
	return {
		categories,
		posts
	};
}

function mapDispatchToProps(dispatch) {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
