import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import FaCommentsO from 'react-icons/lib/fa/comments-o';

const HeaderContainer = styled.div`
    color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;
const PlainLink = styled(Link)`
    background: transparent;
    text-decoration: none;
    margin: 1rem;
    color: black;
    font-family: sans-serif;
    font-size: 2rem;
`;
const Brand = styled(FaCommentsO)`
    font-size: 2rem;
    color: black;
`;
const Header = (props) => {
    return <HeaderContainer>
        <Brand />
        <PlainLink to="/">Readable</PlainLink>
    </HeaderContainer>
}	
export default Header;
