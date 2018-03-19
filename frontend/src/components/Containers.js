import styled from 'styled-components';

const ContainerRightAlign = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const ContainerColumnStretch = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
`;

const ContainerRowStretch = styled.div`
    display: flex;
    flex-direction: row;
    align-content: stretch;
    align-items: stretch;
    flex-wrap: wrap;
`;

export { ContainerRightAlign, ContainerColumnStretch, ContainerRowStretch };
