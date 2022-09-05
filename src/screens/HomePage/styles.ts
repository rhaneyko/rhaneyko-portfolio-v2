import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100vh;

    @media (max-width: 768px) {
        width: 125%;

        height: 40vh;
        margin-top: 10%;
    }
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    height: 60vh;
   

    @media ( max-width: 768px ) {
        width: 100%;

        padding-left: 0;
    }
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 900px;
`;

export const Name = styled.div`
    display: flex;
    align-items: center;

    color: ${props => props.theme.colors.title};
    font-size: 2rem;

    .typed-cursor{
      font-size: 4rem;
      margin-bottom: 1.4rem;
    }
    
    @media ( max-width: 768px ){
        font-size: 1.5rem;
    }
`;

export const PresentationText = styled.p`
    font-size: 1.8rem;

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;

export const Icons = styled.div`
   display: flex;
   flex-direction: row;
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

export const AboutMe = styled.div`
    display: flex;
    flex-direction: column;

    
    
    width: 550px;
    
    
    h1{
        text-align: center;
        color: ${props => props.theme.colors.title};
    }
    
    p{
      text-align: justify;
      font-size: 1.2rem;
      color: ${props => props.theme.colors.text};

      margin-top: 30px;
    }
`;