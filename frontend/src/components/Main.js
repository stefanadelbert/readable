import React from 'react';
import {connect} from 'react-redux';

import Categories from './Categories';
import AddLink from './AddLink';
import Posts from './Posts';

class Main extends React.Component { 
    render() {
        return (
            <div>
                <Categories categories={this.props.categories} />
                <AddLink />
                <Posts posts={this.props.posts} />
            </div>
        );
    }
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
