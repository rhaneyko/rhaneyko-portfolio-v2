import React, { useEffect } from 'react'
import Typed from 'typed.js'

import { 
    Container,
    Main,
    Text,
    Name,
    PresentationText,
    Icons,
    LinkedinButton,
    GithubButton,
    AboutMe,
    } from './styles'

  import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

type T =  any

const HomePage  = () => {
  const el = React.useRef(null) as React.MutableRefObject<T>;
  
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Olá, meu nome é Rhaneyko.'],
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
    <Container className='section' id='home'>
        <Main>
          <Text>
            <Name>
              <h1 ref={el}></h1>
            </Name> 
            <PresentationText>Desenvolvedor Front-End</PresentationText>   
          </Text>

          <AboutMe>
           <h1>Sobre mim</h1>
           <p>Tenho 19 anos, sou estudante de Análise e Desenvolvimento de Sistemas, estou sempre buscando conhecimento na área de Desenvolvimento Web. Estudo programação desde o ano de 2020, sempre procurei por conteúdos no YouTube, lendo documetações e colocando tudo em prática. Estou sempre buscando conhecimentos além da faculdade. </p>
          </AboutMe>

         <Icons>
           <LinkedinButton 
            onClick={openLinkedin}>
             <AiFillLinkedin 
              color='#0E76A8' 
              size={40} />
           </LinkedinButton>

           <GithubButton 
            onClick={openGithub}>
             <AiFillGithub 
              color='#000' 
              size={40} />
           </GithubButton>
         </Icons>  
        </Main>
    </Container>
  )
}

export default HomePage;
