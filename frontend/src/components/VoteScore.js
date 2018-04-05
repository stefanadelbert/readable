import React from 'react';
import PropTypes from 'prop-types';
import MdThumbsUpDown from 'react-icons/lib/md/thumbs-up-down';

const VoteScore = (props) => {
    let iconClass = props.voteScore < 0?
        "text-danger" : "text-success"
    return (
        <div className="d-flex align-items-center p-2">
            <MdThumbsUpDown className={iconClass + " pr-1"}/>{props.voteScore}
        </div>
    );
}
VoteScore.propTypes = {
    voteScore: PropTypes.number.isRequired,
};
export default VoteScore;
