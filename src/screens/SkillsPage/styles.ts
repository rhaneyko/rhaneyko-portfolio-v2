import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 80vh;

    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        width: 125%;
        justify-content: center;
    } 
`;

export const Skills = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 40rem;
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

export const Icon = styled.div`
    display: flex;
    justify-content: space-between;


    height: 100px;

    margin: 10px;

    

    :hover{
        width: 80%;

        p{
            display: inline;
            width: 400px;

            text-align: justify;
        }
    }


`;

export const Title = styled.h1`
    display: flex;

    margin-bottom: 2%;

    
    font-size: 2rem;
    line-height: 3rem;
    color: ${props => props.theme.colors.title};

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

export const TextAbout = styled.p`
    
    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;

