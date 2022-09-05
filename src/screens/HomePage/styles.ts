import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100vh;

    background-color: red;
    
    @media (max-width: 768px) {
        width: 125%;

        height: 40vh;
        margin-top: 10%;
    }
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: white;

    @media ( max-width: 768px ) {
        width: 100%;

        padding-left: 0;
    }
`;

export const Name = styled.h1`
    display: flex;
    
    margin-left: 0.5rem;

    font-size: 2rem;

    color: ${props => props.theme.colors.title};

    animation: typing 3s 0s normal both,blinkCursor 1s infinite normal;
    
    @media ( max-width: 768px ){
        font-size: 1.5rem;
    }
`;

export const PresentationText = styled.p`
    font-size: 1.25rem;
    line-height: 2rem;
    
    margin: 10px 10px 10px 10px;
    color: ${props => props.theme.colors.text};

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
    
`;


export const Icons = styled.div`

`