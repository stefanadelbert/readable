import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import Categories from './Categories';
import PostSummaries from './PostSummaries';

const MainContainer = styled.div`
`;
const ContainerRightAlign = styled.div`
    display: flex;
    justify-content: flex-end;
`;
const ButtonLink = styled(Link)`
    display: inline;
    margin: 0.2rem;
    padding: 0.2rem;
    background: transparent;
    text-decoration: none;
    color: black;
    border: black 1px solid;
    border-radius: 0.1rem;
    &:hover {
        color: white;
        background-color: grey;
    }
`;
const Main = (props) => { 
    return (
        <MainContainer>
            <Categories categories={props.categories} />
            <ContainerRightAlign>
                <ButtonLink to="/add">New Post</ButtonLink>
            </ContainerRightAlign>
            <PostSummaries posts={props.posts} />
        </MainContainer>
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
