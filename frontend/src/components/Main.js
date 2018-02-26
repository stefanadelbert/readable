import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import Categories from './Categories';
import PostSummaries from './PostSummaries';

const MainWrapper = styled.div`
`;

const PlainLink = styled(Link)`
    background: transparent;
    text-decoration: none;
    margin: 1rem;
`;

const Main = (props) => { 
    return (
        <MainWrapper>
            <Categories categories={props.categories} />
            <PlainLink to="/add">Add</PlainLink>
            <PostSummaries posts={props.posts} />
        </MainWrapper>
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
