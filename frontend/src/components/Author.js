import React from 'react';
import PropTypes from 'prop-types';
import FaUser from 'react-icons/lib/fa/user';

const Author = (props) => {
    return (
        <div className="d-flex align-items-center p-2">
            <FaUser/>{props.author}
        </div>
    );
}
Author.propTypes = {
    author: PropTypes.string.isRequired,
};
export default Author;
