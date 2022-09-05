import React, { useEffect, useRef, useState } from 'react'

import { 
    Container,
    Main,
    Name,
    PresentationText,
    Icons,
    } from './styles'

  import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const HomePage  = () => {
  const openLinkedin = () => {
    window.open('https://www.linkedin.com/in/rhaneyko-honorio-73657819b')
  }

  const openGithub = () => {
    window.open('https://github.com/rhaneyko')
  }

  const openCv = () => {
    window.open('https://docs.google.com/document/d/1KvDZJcTW8Ax8-e7WGraptYDfIpci6feFltp8bsQS6MY/edit')
  }

  return (

    <Container className='Home' id='home'>
         <Main>
             <PresentationText>Olá, meu nome é</PresentationText>
                 <Name>Rhaneyko</Name> 
             <Icons>
                <AiFillLinkedin 
                  onClick={(openLinkedin)}
                  size={40}
                  color='#0E76A8' 
                />

                <AiFillGithub 
                  onClick={(openGithub)}
                  size={40}
                />
             </Icons>  
                   
         </Main>
    </Container>
  )
}
export default HomePage;
