import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MdThumbsUpDown from 'react-icons/lib/md/thumbs-up-down';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 0.2rem;
`
const ThumbsUp = styled(MdThumbsUpDown)`
    padding: 0.1rem;
    color: green;
`
const ThumbsDown = styled(MdThumbsUpDown)`
    padding: 0.1rem;
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
