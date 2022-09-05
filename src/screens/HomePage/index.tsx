import React, { useEffect, useRef, useState } from 'react'
import Typed from 'typed.js'

import { 
    Container,
    Main,
    Name,
    PresentationText,
    Icons,
    AboutButton,
    } from './styles'

  import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

type T =  any

const HomePage  = () => {
  const el = React.useRef(null) as React.MutableRefObject<T>;
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Rhaneyko.'],
      startDelay: 300,
      typeSpeed: 80,
      backSpeed: 100,
      backDelay: 100
    })
    return () => {
      typed.destroy()
    }
  }, [])

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
                 <Name>
                    <h1 ref={el}></h1>
                  </Name> 
              <PresentationText>Desenvolvedor Front-End</PresentationText>   
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
         <AboutButton>
            <p>Sobre mim</p>
         </AboutButton>
                  </Main>
    </Container>
  )
}
export default HomePage;
