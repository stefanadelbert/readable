import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FaClockO from 'react-icons/lib/fa/clock-o';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 0.2rem;
`
const Timestamp = (props) => {
    let timestamp = new Date(props.timestamp).toDateString();
    return (
        <Wrapper>
            <FaClockO/>{timestamp}
        </Wrapper>
    );
}
Comment.propTypes = {
    timestamp: PropTypes.number.isRequired,
};
export default Timestamp;
