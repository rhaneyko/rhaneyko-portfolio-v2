import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    height: 30vh;

    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        width: 125%;
        justify-content: center;
    } 
`;

export const Image = styled.img`
    width: 25vw;
`;

export const Skills = styled.div`
    width: 100%;
    max-width: 40rem;
    margin-bottom: 3rem;

    @media (max-width: 768px) {
        width: 100%;
        height: 30vh;
        padding: 10px;
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
    display: flex;

    font-size: 1rem;
    color: ${props => props.theme.colors.text};

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;
