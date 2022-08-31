import { Container, Title, About, TextAbout } from "./styles";

const AboutPage: React.FC = () => {
  return (
    <Container id="about">
      <About>
        <Title>Quem eu sou?</Title>
        <TextAbout>
          Tenho 19 anos, sou Desenvolvedor Mobile |
          Front-End. Atualmente sou estagiário na Unimed. Venho aprimorando meus
          conhecimentos em JavaScript, React JS, React Native e TypeScript.
          Estou cursando Análise e Desenvolvimento de Sistemas na Faculdade
          Estácio.
        </TextAbout>
      </About>
    </Container>
  );
};

export default AboutPage;
