import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 50vh;

    align-items: center;
    
    @media (max-width: 768px) {
        width: 125%;

        height: 40vh;
        margin-top: 10%;
    }
`;

export const NavigationPages = styled.div`
    display: flex;
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;

    width: 50vw;

    padding-left: 3.5rem;

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
    
    @media ( max-width: 768px ){
        font-size: 1.5rem;
    }
`;

export const Gretting = styled.p`
    font-size: 1.25rem;
    line-height: 2rem;
    
    margin: 10px 10px 10px 10px;
    color: ${props => props.theme.colors.text};

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;

export const ButtonLnkd = styled.button`
    display: flex;
    flex-direction: row;

    justify-content: center;
    align-items: center;
    
    width: 120px;
    height: 40px; 

    margin: 20px 0px 10px 10px;
    
    border: 1px solid ${props => props.theme.colors.borderButton};
    border-radius: 5px;
    
    background-color: ${props => props.theme.colors.button};

    outline: 0;
    cursor: pointer;

    @media ( max-width: 768px ){
         height: 40px;
    }
`;

export const ButtonCv = styled.button`
    width: 120px;
    height: 40px;
    
    border: 1px solid ${props => props.theme.colors.borderButton};
    border-radius: 5px;
    
    margin-left: 140px;
    margin-top: -50px;


    background-color: ${props => props.theme.colors.button};

    outline: 0;
    cursor: pointer;
`;

export const ButtonTextLnkd = styled.p`
    font-size: 0.8rem;
    font-weight: bold;

    color: ${props => props.theme.colors.buttonText};
`;

export const ButtonTextCv = styled.p`
    font-size: 0.8rem;
    font-weight: bold;

    color: ${props => props.theme.colors.buttonText};
`;


export const Image = styled.img`
    margin-top: 7%;
    margin-left: 10%;
    @media (max-width: 768px) {
        display: none;
    }
`;
