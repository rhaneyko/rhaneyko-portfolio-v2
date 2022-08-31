import React, { useEffect, useState, useRef } from 'react';
import Carousel from 'react-elastic-carousel';

import { 
    Container,
    Title,
    Cards,
    CardProject,
    ProjectName,
    Image,
    ProjectDescription,
    Buttons,
    ButtonViewLive,
    ButtonViewLiveText,
    ButtonGitRepo,
    ButtonGitRepoText,
   
     } from './styles'
     
import dataProjects from '../../assets/Data/projectsData.json'


const ProjectsPage = () => {
    const [projects, setProjects] = useState(dataProjects)

    useEffect(() => {
        setProjects(dataProjects)
    }
    , [])


  const itemsPerPage = 1
  const items = [dataProjects];
  const ref = useRef(null);
  const totalPages = Math.ceil(items.length / itemsPerPage)
  let resetTimeout;

    return (
    <Container id='projects'>
        <Title>Projetos</Title>
        <Cards>
        <Carousel 
          ref={ref}
          enableAutoPlay
          autoPlaySpeed={5000}
          onNextEnd={({ index }) => {
                clearTimeout(resetTimeout)
                if (index + 1 === totalPages) {
                   resetTimeout = setTimeout(() => {
                      ref.current.goTo(0)
                  }, 5000)
                }
           }} 
           sitemsToShow={itemsPerPage}>
          {projects.map(project => (
            <CardProject key={project.id} className='card'>
              <Image src={project.url}/>
              <ProjectName className='projectTitle'>{project.title}</ProjectName>
               <ProjectDescription className='projectDescription'>
                  {project.description}
               </ProjectDescription>
               <Buttons className='buttonsHover'>
                  <ButtonViewLive onClick={() => window.open(project.liveSite, '_blank')}>
                    <ButtonViewLiveText>Live site</ButtonViewLiveText>
                  </ButtonViewLive>
                  <ButtonGitRepo onClick={() => window.open(project.github)}>
                    <ButtonGitRepoText>GitHub</ButtonGitRepoText>
                  </ButtonGitRepo>
                </Buttons>
            </CardProject>
          ))}
        </Carousel>
          </Cards>
    </Container>
  )
}
export default ProjectsPage;
