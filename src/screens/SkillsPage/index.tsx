import { Container, Title, About, TextAbout } from "./styles";

import { SiCss3, SiFirebase, SiJavascript, SiReact, SiTypescript, SiHtml5,  } from 'react-icons/si'

const SkillsPage: React.FC = () => {
  return (
    <Container id="about">
      <About>
        <Title>Conhecimentos</Title>
         <SiHtml5
           size={50}
         />
         <SiCss3
           size={50}
         />
         <SiJavascript
           size={50}
           color='#F0DB4F'
         />
         <SiReact
           size={50}
         />
         <SiTypescript
           size={50}
         />
         <SiFirebase
           size={50}
         />
         
      </About>
    </Container>
  );
};

export default SkillsPage;
