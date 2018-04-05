import React from 'react';
import PropTypes from 'prop-types';
import FaClockO from 'react-icons/lib/fa/clock-o';

const Timestamp = (props) => {
    let timestamp = new Date(props.timestamp).toLocaleString();
    return (
        <div className="d-flex align-items-center p-2">
            <FaClockO/>{timestamp}
        </div>
    );
}
Comment.propTypes = {
    timestamp: PropTypes.number.isRequired,
};
export default Timestamp;
