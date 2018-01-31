import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Categories = ({categories}) => {
    return (
        <div>
            <ul>
                {categories.map(category =>
                    <li key={category.name}>
                        <Link to={`/categories/${category.name}`}>{category.name}</Link>
                    </li>
                )}
            </ul>
        </div>
    );
}
Categories.defaultProps = {
    categories: [],
}
Categories.propTypes = {
    categories: PropTypes.array,
}
export default Categories;
