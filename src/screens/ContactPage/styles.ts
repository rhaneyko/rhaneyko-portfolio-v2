import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    
    height: 50vh;

    justify-content: center;
    align-items: center;
    margin-top: 100px;

    background-color: red;

    @media (max-width: 768px) {
        width: 125%;
        height: 75vh;
        flex-direction: column;
    }

`; 

export const Title = styled.h1`
   

    //margin-right: 10vw;
    margin-bottom: 10vw;

    font-size: 2rem;

    color: ${props => props.theme.colors.title};

    @media (max-width: 768px) {
        margin: 0;
    }

`; 

export const Contacts = styled.div`
    //margin-left: -300px;

    align-items: center;

    @media (max-width: 768px) {
        margin: 10px;
        
    }

`;

export const LinkedinButton = styled.button`
    background-color: ${props => props.theme.colors.background};
    border: none;
    
    margin: 10px;
    padding: 5px;

    border-radius: 5px;
    
    outline: 0;
    cursor: pointer;
`;

export const GithubButton = styled.button`
    background-color: ${props => props.theme.colors.background};
    border: none;
    
    margin: 10px;
    padding: 5px;

    border-radius: 5px;

    outline: 0;
    cursor: pointer;
`;

export const WhatsAppButton = styled.button`
    background-color: ${props => props.theme.colors.background};
    border: none;
    
    margin: 10px;
    padding: 5px;

    border-radius: 5px;

    outline: 0;
    cursor: pointer;
`;

export const EmailButton = styled.button`
    background-color: ${props => props.theme.colors.background};
    border: none;
    
    margin: 10px;
    padding: 5px;

    border-radius: 5px;

    outline: 0;
    cursor: pointer;
`;

