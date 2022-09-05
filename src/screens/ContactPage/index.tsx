import React from 'react';

import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineWhatsApp,
} from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';

import {
  Container,
  Title,
  Contacts,
  LinkedinButton,
  GithubButton,
  WhatsAppButton,
  EmailButton,
} from './styles';

const ContactPage: React.FC = () => {
  const OpenLinkedin = () => {
    window.open('https://www.linkedin.com/in/rhaneyko-honorio-73657819b');
  };
  const OpenGithub = () => {
    window.open('https://www.github.com/rhaneyko');
  };

  const OpenWhatsApp = () => {
    window.open('https://api.whatsapp.com/send?phone=5565992787669');
  };

  const OpenEmail = () => {
    window.open('mailto: rhaneykohonorio@gmail.com');
  };
 
  return (
    <Container id='contact'>
      <Title>Contato</Title>
      <Contacts>
        <LinkedinButton onClick={OpenLinkedin}>
          <AiFillLinkedin color='#0E76A8' size={40} />
        </LinkedinButton>
        <GithubButton onClick={OpenGithub}>
          <AiFillGithub color='#000' size={40} />
        </GithubButton>
        <WhatsAppButton onClick={OpenWhatsApp}>
          <AiOutlineWhatsApp color='#25D366' size={40} />
        </WhatsAppButton>
        <EmailButton onClick={OpenEmail}>
          <FcGoogle size={40} />
        </EmailButton>
      </Contacts>
    </Container>
  );
};

export default ContactPage;
