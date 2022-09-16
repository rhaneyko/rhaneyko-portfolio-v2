import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;

    justify-content: center;
    align-items: center;

    background-color: blue;

    @media (max-width: 768px) {
        width: 125%;
        justify-content: center;
    } 
`;

export const Skills = styled.div`
    display: flex;
    flex-direction: row;
    
    width: 700px;

    margin-bottom: 3rem;
    background-color: red;

    .icons{
        margin: 20px;

        :hover{
            p{

            }
        }

    }

    @media (max-width: 768px) {
        width: 100%;
        height: 30vh;
        padding: 10px;
    }
`;

export const Icons = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Icon = styled.div`
    display: flex;
    flex-direction: column;

    background-color: white;


    height: 100px;

    margin: 10px;


    p{
        display: none;
    }

    :hover{
        width: 80%;

        p{
            display: inline;

            text-align: justify;
        }
    }
`;

export const Title = styled.h1`
    display: flex;
    
    font-size: 2rem;
    line-height: 3rem;
    color: ${props => props.theme.colors.title};
    
    margin-bottom: 2%;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

export const TextAbout = styled.div`
    display: none;
    width: 500px;

    text-align: justify;
    background-color: blue;
    
    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;

export const DescriptionAboutSkill = styled.div`
    
    width: 300px;
    height: 150px;

    text-align: justify;
    background-color: purple;
    
    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;

