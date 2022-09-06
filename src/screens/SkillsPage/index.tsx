import { Container, Title, Icon, Skills, TextAbout } from "./styles";

import { SiCss3, SiFirebase, SiJavascript, SiReact, SiTypescript, SiHtml5,  } from 'react-icons/si';


const SkillsPage: React.FC = () => {
  return (
    <Container id="about">
      <Skills>
        <Title>Conhecimentos</Title>
         <Icon>
           <SiHtml5
             size={50}
             color='#E34C26'
             className='icons'
           />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elite. Quam accusantium adipisci ipsam placeat? Corporis aspernatur iusto ea molestias reiciendis consequatur ratione quibusdam dolores cupiditate a. Molestiae maiores aliquid fugiat accusantium?</p>
         </Icon>
         <Icon>
           <SiCss3
             size={50}
             color='#264DE4'
             className='icons'
           />
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam accusantium adipisci ipsam placeat? Corporis aspernatur iusto ea molestias reiciendis consequatur ratione quibusdam dolores cupiditate a. Molestiae maiores aliquid fugiat accusantium?</p>
         </Icon>
         <Icon>
           <SiJavascript
             size={50}
             color='#F0DB4F'
             className='icons'
           />
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elite. Quam accusation adipisci ipsam placeat? Corporis aspernatur iusto ea molestias reiciendis consequatur ratione quibusdam dolores cupiditate a. Molestiae maiores aliquid fugiat accusantium?</p>
         </Icon>
         <Icon>
           <SiReact
             size={50}
             color='#55DDED'
             className='icons'
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elite. Quam accusantium adipisci ipsam placeat? Corporis aspernatur iusto ea molestias reiciendis consequatur ratione quibusdam dolores cupiditate a. Molestiae maiores aliquid fugiat accusantium?</p>
          </Icon>
          <Icon>
         <SiTypescript
           size={50}
           color='#235A97'
           className='icons'
         />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam accusantium adipisci ipsam placeat? Corporis aspernatur iusto ea molestias reiciendis consequatur ratione quibusdam dolores cupiditate a. Molestiae maiores aliquid fugiat accusantium?</p>
         </Icon>
         <Icon>
           <SiFirebase
             size={50}
             color='#FFC526'
             className='icons'
           />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam accusantium adipisci ipsam placeat? Corporis aspernatur iusto ea molestias reiciendis consequatur ratione quibusdam dolores cupiditate a. Molestiae maiores aliquid fugiat accusantium?</p>
         </Icon>
      </Skills>
    </Container>
  );
};

export default SkillsPage;
