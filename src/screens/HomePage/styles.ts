import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100vh;

    

    background-color: red;

    .typed-cursor{
    color: ${props => props.theme.colors.title};
    font-size: 4rem;
    margin-bottom: 1.4rem;
}
    
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

export const Name = styled.div`
    display: flex;
    align-items: center;

    color: ${props => props.theme.colors.title};
    font-size: 2rem;
    
    @media ( max-width: 768px ){
        font-size: 1.5rem;
    }
`;

export const PresentationText = styled.p`
    font-size: 3rem;
    line-height: 2rem;
    
    margin: 10px 10px 10px 10px;
    color: ${props => props.theme.colors.text};

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
    
`;


export const Icons = styled.div`

`;

export const AboutButton = styled.button`
    width: 100px;
    height: 40px;
    
    background-color: blue;
`;