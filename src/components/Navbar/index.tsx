import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

//import Switch from 'react-switch';
//import { shade } from 'polished';

import { 
  Container, 
  LogoName, 
  Bars, 
  NavMenu } from './styles';

//import { ThemeContext } from 'styled-components';

export interface NavbarProps {
  toggleTheme: () => void;
}

const Navbar: React.FC = () => {
  const [active, setActive] = useState('nav_menu');
  const [icon, setIcon] = useState('nav_toggler');

  const navToggle = () => {
    if (active === 'nav_menu') {
      setActive('nav_menu nav_active');
    } else setActive('nav_menu');

    if (icon === 'nav_toggler') {
      setIcon('nav_toggler');
    } else setIcon('nav_toggler');
  };

  //const { colors, title } = useContext(ThemeContext);

  return (
    <Container className='headerContainer flexSB'>
      <Router>
        <LogoName smooth to='#home'>
          <p>&lt;Rhaneyko/&gt;</p>
        </LogoName>
        <Bars onClick={navToggle} className={icon} />
        <NavMenu className={active}>
          <NavHashLink smooth to='#home'>
            Home
          </NavHashLink>
          <NavHashLink smooth to='#about'>
            Sobre mim
          </NavHashLink>
          <NavHashLink smooth to='#projects'>
            Projetos
          </NavHashLink>
          <NavHashLink smooth to='#contact'>
            Contatos
          </NavHashLink>
        </NavMenu>
      </Router>
      {/*<Switch
             onChange={toggleTheme}
             checked={title === 'dark'}
             checkedIcon={false}
             uncheckedIcon={false}
             height={10}
             width={40}
             handleDiameter={20}
             offColor={shade(0.15, colors.title)}
             onColor={colors.title}
           />*/}
    </Container>
  );
};
export default Navbar;
