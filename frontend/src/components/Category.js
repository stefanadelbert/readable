import React from 'react';
import PropTypes from 'prop-types';
import MdFilerNone from 'react-icons/lib/md/filter-none';

const Category = (props) => {
    return (
        <div className="d-flex align-items-center p-2">
            <MdFilerNone/>{props.category}
        </div>
    );
}
Category.propTypes = {
    category: PropTypes.string.isRequired,
};
export default Category;

