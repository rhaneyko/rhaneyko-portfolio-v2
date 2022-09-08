import { 
  Container, 
  Title, 
  Skills, 
  Icons,
  Icon, 
  TextAbout, 
  DescriptionAboutSkill,
} from "./styles";

import { SiCss3, SiFirebase, SiJavascript, SiReact, SiTypescript, SiHtml5,  } from 'react-icons/si';


const SkillsPage: React.FC = () => {

  return (
    <Container id="about">
        <Title>Conhecimentos</Title>
      <Skills>
        <Icons>
         <Icon>
           <SiHtml5
             size={50}
             color='#E34C26'
             className='icons'
           />
           <TextAbout>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elite. Quam accusantium adipisci ipsam placeat? Corporis aspernatur iusto ea molestias reiciendis consequatur ratione quibusdam dolores cupiditate a. Molestiae maiores aliquid fugiat accusantium?</p>
           </TextAbout> 
         </Icon>
         <Icon>
           <SiCss3
             size={50}
             color='#264DE4'
             className='icons'
           />
           {/* <TextAbout>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elite. Quam accusantium adipisci ipsam placeat? Corporis aspernatur iusto ea molestias reiciendis consequatur ratione quibusdam dolores cupiditate a. Molestiae maiores aliquid fugiat accusantium?</p>
           </TextAbout> */}
         </Icon>
         <Icon>
           <SiJavascript
             size={50}
             color='#F0DB4F'
             className='icons'
           />
           
           {/* <TextAbout>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elite. Quam accusantium adipisci ipsam placeat? Corporis aspernatur iusto ea molestias reiciendis consequatur ratione quibusdam dolores cupiditate a. Molestiae maiores aliquid fugiat accusantium?</p>
           </TextAbout> */}
         </Icon>
         <Icon>
           <SiReact
             size={50}
             color='#55DDED'
             className='icons'
            />
            {/* <TextAbout>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elite. Quam accusantium adipisci ipsam placeat? Corporis aspernatur iusto ea molestias reiciendis consequatur ratione quibusdam dolores cupiditate a. Molestiae maiores aliquid fugiat accusantium?</p>
           </TextAbout> */}
          </Icon>
          <Icon>
         <SiTypescript
           size={50}
           color='#235A97'
           className='icons'
         />
          {/* <TextAbout>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elite. Quam accusantium adipisci ipsam placeat? Corporis aspernatur iusto ea molestias reiciendis consequatur ratione quibusdam dolores cupiditate a. Molestiae maiores aliquid fugiat accusantium?</p>
           </TextAbout> */}
         </Icon>
         <Icon>
           <SiFirebase
             size={50}
             color='#FFC526'
             className='icons'
           />
          {/* <TextAbout>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elite. Quam accusantium adipisci ipsam placeat? Corporis aspernatur iusto ea molestias reiciendis consequatur ratione quibusdam dolores cupiditate a. Molestiae maiores aliquid fugiat accusantium?</p>
           </TextAbout> */}
         </Icon>
        </Icons>
         <DescriptionAboutSkill></DescriptionAboutSkill>
      </Skills>
    </Container>
  );
};

export default SkillsPage;
