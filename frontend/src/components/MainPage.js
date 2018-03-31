import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Button, ButtonGroup} from 'reactstrap';

import Categories from './Categories';
import PostSummaries from './PostSummaries';

const MainPage = (props) => { 
    var posts = props.posts.result.map(id => props.posts.entities.posts[id]);
    console.log('MainPage', props.posts);
    console.log('MainPage', posts);
    return (
        <div>
            <Categories categories={props.categories} />
            <ButtonGroup>
                <Button tag={Link} to="/new">New Post</Button>
            </ButtonGroup>
            <PostSummaries posts={posts} />
        </div>
    );
}
MainPage.propTypes = {
    categories: PropTypes.array.isRequired,
    posts: PropTypes.object.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
