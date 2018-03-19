import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FaUser from 'react-icons/lib/fa/user';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 0.2rem;
`
const Content = styled.span`
`;
const Author = (props) => {
    return (
        <Wrapper>
            <FaUser/>
            <Content>{props.author}</Content>
        </Wrapper>
    );
}
Author.propTypes = {
    author: PropTypes.string.isRequired,
};
export default Author;
