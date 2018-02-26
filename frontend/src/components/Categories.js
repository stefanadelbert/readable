import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const CategoryContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    padding: 0.2rem;
    margin: 0.5rem;
`;
const CategoryLink = styled(Link)`
    display: inline;
    margin: 0.2rem;
    border: black 1px solid;
    border-radius: 0.1rem;
    padding: 0.2rem;
    text-decoration: none;
    color: black;
    background-color: transparent;
    &:hover {
        color: white;
        background-color: grey;
    }
`;

const Categories = ({categories}) => {
    return (
        <CategoryContainer>
            {categories.map(category =>
                <CategoryLink key={category.name} to={`/categories/${category.name}`}>{category.name}</CategoryLink>
            )}
        </CategoryContainer>
    );
}
Categories.defaultProps = {
    categories: [],
}
Categories.propTypes = {
    categories: PropTypes.array,
}
export default Categories;
