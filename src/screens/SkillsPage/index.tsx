import { Container, Title, Skills, TextAbout } from "./styles";

import { SiCss3, SiFirebase, SiJavascript, SiReact, SiTypescript, SiHtml5,  } from 'react-icons/si';


const SkillsPage: React.FC = () => {
  return (
    <Container id="about">
      <Skills>
        <Title>Conhecimentos</Title>
         <SiHtml5
           size={50}
           color='#E34C26'
         />
         <SiCss3
           size={50}
           color='#264DE4'
         />
         <SiJavascript
           size={50}
           color='#F0DB4F'
         />
         <SiReact
           size={50}
           color='#55DDED'
         />
         <SiTypescript
           size={50}
           color='#235A97'
         />
         <SiFirebase
           size={50}
           color='#FFC526'
         />
      </Skills>
    </Container>
  );
};

export default SkillsPage;
