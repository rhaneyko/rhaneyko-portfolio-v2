import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    
    height: 50vh;

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
    margin-top: 80px;
    margin-bottom: 100px;

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

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    justify-content: center;

    margin-top: 5%;
    margin-left: 20%;

    @media (max-width: 768px) {
        margin: 20px ;
    }
`;


export const Input = styled.input`
    height: 50px;
    width: 300px;

    padding: 5px;
    margin: 5px;
    
    border: 1px solid #222222;
    border-radius: 8px;

    box-shadow: rgba(0, 0, 0, 0.50)  1px 1px 5px 1px;

    background-color: ${props => props.theme.colors.background};
`;

export const TextArea = styled.textarea`
    height: 100px;
    width: 300px;

    padding: 5px;
    margin: 5px;
    border: 1px solid #222222;
    border-radius: 8px;

    box-shadow: rgba(0, 0, 0, 0.50)  1px 1px 5px 1px;

    background-color: ${props => props.theme.colors.background};

`;

export const Button = styled.button`
    width: 110px;
    height: 35px;

    border: 1px solid ${props => props.theme.colors.borderButton};
    border-radius: 5px;

    margin-top: 5px;
    margin-left: 5px;
    
    background-color: ${props => props.theme.colors.button};

    outline: 0;
    cursor: pointer;
    &:hover {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    }
`;
export const ButtonTitle = styled.p`
    font-size: 13px;
    font-weight: bold;
    color: ${props => props.theme.colors.buttonText};
`;
