import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    color: white;
    background-color: darkred;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
const PlainLink = styled(Link)`
    background: transparent;
    text-decoration: none;
    margin: 1rem;
    color: white;
`;

const Header = (props) => {
    return <HeaderContainer>
        <PlainLink to="/"><h1>Readable</h1></PlainLink>
    </HeaderContainer>
}	
export default Header;
