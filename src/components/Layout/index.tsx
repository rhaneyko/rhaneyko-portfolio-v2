import SkillsPage from '../../screens/SkillsPage';
import ContactPage from '../../screens/ContactPage';
import HomePage from '../../screens/HomePage';
import ProjectsPage from '../../screens/ProjectsPage';
import CopyrightPage from '../../screens/CopyrightPage';
import { Container } from './styles';

import { useEffect, useState } from 'react';
//import LoadingHomePage from '../Shimmer/LoadingHomePage';

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
       setTimeout(() => {
          setIsLoading(false)
       }, 1000)
  }, [])
  return (
    <Container>
      <HomePage />
      <SkillsPage/>
      <ProjectsPage/>
      <ContactPage/>
      <CopyrightPage/>
    </Container>    
    );
}

export default Layout;

