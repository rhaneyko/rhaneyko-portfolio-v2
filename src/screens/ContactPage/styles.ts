import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    height: 30vh;

    justify-content: center;
    align-items: center;
    margin-top: 100px;

    @media (max-width: 768px) {
        width: 125%;
        height: 75vh;
        flex-direction: column;
    }
`; 

export const Title = styled.h1`
    margin-bottom: 50px;

    font-size: 2rem;

    color: ${props => props.theme.colors.title};

    @media (max-width: 768px) {
        margin: 0;
    }

`; 

export const Contacts = styled.div`
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

