import React, { useEffect, useRef, useState } from 'react'

import { 
    Container,
    Main,
    Name,
    Gretting,
    ButtonLnkd,
    ButtonCv,
    ButtonTextLnkd,
    ButtonTextCv,
     } from './styles'

const HomePage  = () => {
  const openLinkedin = () => {
    window.open('https://www.linkedin.com/in/rhaneyko-honorio-73657819b')
  }

  const openCv = () => {
    window.open('https://docs.google.com/document/d/1KvDZJcTW8Ax8-e7WGraptYDfIpci6feFltp8bsQS6MY/edit')
  }

  return (

    <Container className='Home' id='home'>
         <Main>
             <Gretting>Olá, meu nome é</Gretting>
                 <Name >Rhaneyko</Name> 
             <Gretting>Desenvolvedor Front-End | Mobile.</Gretting>
             <Gretting>Estudante de Análise e Desenvolvimento de Sistemas.|</Gretting>
               <ButtonLnkd onClick={(openLinkedin)}>
                   <ButtonTextLnkd>LinkedIn</ButtonTextLnkd>
               </ButtonLnkd>
               <ButtonCv onClick={(openCv)}>
                   <ButtonTextCv>Currículo</ButtonTextCv>
               </ButtonCv>
         </Main>
    </Container>
  )
}
export default HomePage;
