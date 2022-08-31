import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        width: 125%;
        margin-top: 60px;
    }
    
  .rec.rec-arrow {
    margin: 50px;
    border-radius: 0;
    border: 1px solid #0065FF;

    color: #0065FF;
    background-color: #FFFFFF;
    
    :hover {
     border-radius: 50%;
     border: 1px solid #0065FF 
    }

    :disabled {
     visibility: hidden;
    }

    @media (max-width: 768px) {
      display: none;
    }
   }

    .rec-dot_active {
      background-color: #0065FF !important;
      box-shadow: 0 0 1px 3px #0065FF !important;
    }

    .rec-dot:focus,
    .rec-dot:hover {
      box-shadow: 0 0 1px 3px #0065FF !important;
    }

    .rec-dot_active:focus,
    .rec-dot_active:hover {
      background-color: #0065FF !important;
      box-shadow: 0 0 1px 3px #0065FF !important;
    }
`;

export const Title = styled.h1`
    font-size: 2rem;
    color: ${props => props.theme.colors.title};

    margin-bottom: 30px;
`;

export const Cards = styled.div`
    display: flex;
    flex-direction: row;

    width: 700px;

    @media (max-width: 1440px) {
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const CardProject = styled.div`
    display: flex;
    flex-direction: column;

    width: 300px;
    max-width: 100%;
    height: 270px;

    align-items: center;
    
    margin: 30px 40px;
    
    z-index: 1;
    position: relative;

    box-shadow: rgba(0, 0, 0, 2)  1px 1px 20px 1px;
    background-color: ${props => props.theme.colors.cardBackground};	

    cursor: pointer;
    transition: all 0.3s ease 0s;
    :hover {
        box-shadow: rgba(0, 0, 0, 2)  1px 1px 20px 1px;
        transform: translateY(-10px);

        .buttonsHover{
            display: inline;
            margin-top: 5rem;

            @media (max-width: 768px) {
                margin-top: 15%;
        }
        }
        
    }
    
    @media (max-width: 768px) {
        height: 285px;

        margin: 20px;
    }
`;

export const Image = styled.img`
   width: 300px;
   max-width: 100%;

   height: 150px;
`;

export const ProjectName = styled.p`
   z-index: 9999;
   font-size: 23px;
    
   color: ${props => props.theme.colors.title};
   
    @media (max-width: 768px) {
        font-size: 1.5rem;

    }
`;

export const ProjectDescription = styled.p`
   display: flex;
   height: 10vh;

   z-index: 9999;

   margin: 2%;
   font-size: 0.8rem;
   line-height: 1.4rem;

   position: fixes;
   
   color: ${props => props.theme.colors.text};

   @media (max-width: 768px) {
        display: inline;

        font-size: 0.9rem;
   }
`;

export const Buttons = styled.div`
    display: none;
    flex-direction: row;

    position: absolute;
    z-index: 9999;

    @media(max-width: 768px) {
        display: inline;
        margin-top: 3rem;
    }
`;

export const ButtonViewLive = styled.button`
    width: 100px;
    height: 35px; 
    
    border: 1px  solid ${props => props.theme.colors.borderButton};
    border-radius: 5rem;
    
    margin: 5px;
    
    background-color: ${props => props.theme.colors.button};

    outline: 0;
    cursor: pointer;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    }

    @media (max-width: 768px) {
        width: 100px;
    }
`;

export const ButtonViewLiveText = styled.p`
    font-size: 1rem;
    font-weight: bold;
    color: ${props => props.theme.colors.buttonText};

    @media (max-width: 768px) {
        font-size: 0.7rem;
    }
`;

export const ButtonGitRepo = styled.button`
    width: 100px;
    height: 35px; 
    
    border: 1px solid ${props => props.theme.colors.borderButton};
    border-radius: 5rem;

    margin: 5px;

    background-color: ${props => props.theme.colors.button};

    outline: 0;
    cursor: pointer;
    &:hover {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    }

    
    @media (max-width: 768px) {
        width: 100px;
    }
`;

export const ButtonGitRepoText = styled.p`
    font-size: 1rem;
    font-weight: bold;
    color: ${props => props.theme.colors.buttonText};

    @media (max-width: 768px) {
        font-size: 0.7rem;
    }
`;






