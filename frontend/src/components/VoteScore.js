import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FaThumbsODown from 'react-icons/lib/fa/thumbs-o-down';
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 0.2rem;
`
const ThumbsUp = styled(FaThumbsOUp)`
    color: green;
`
const ThumbsDown = styled(FaThumbsODown)`
    color: darkred;
`
const VoteScore = (props) => {
    let icon = props.voteScore < 0? <ThumbsDown/> : <ThumbsUp/>;
    return (
        <Wrapper>
            {icon}{props.voteScore}
        </Wrapper>
    );
}
VoteScore.propTypes = {
    voteScore: PropTypes.number.isRequired,
};
export default VoteScore;
