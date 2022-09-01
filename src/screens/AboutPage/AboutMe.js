import Section from "../../components/shared/Section";
import "./AboutMe.css";


function AboutMe() {
    return ( 
        <Section id="about-me">
            <h2>Quem eu sou?</h2>
            <p className="aboutme-description">
            Tenho 19 anos, sou Desenvolvedor Mobile |
            Front-End. Atualmente sou estagiário na Unimed. Venho aprimorando meus
            conhecimentos em JavaScript, React JS, React Native e TypeScript.
            Estou cursando Análise e Desenvolvimento de Sistemas na Faculdade Estácio.
            </p>
        </Section>
     );
}

export default AboutMe;