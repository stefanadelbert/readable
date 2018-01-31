import React from 'react';
import {connect} from 'react-redux';

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
