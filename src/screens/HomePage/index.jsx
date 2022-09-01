import React, { useEffect, useRef, useState } from 'react'
import Typed from 'typed.js'
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

  // const el = useRef('');

  // useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: ["Rhaneyko."],         
  //     startDelay: 300,
  //     typeSpeed: 80,
  //     backSpeed: 100,
  //     backDelay: 100
  //   });
  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);

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
