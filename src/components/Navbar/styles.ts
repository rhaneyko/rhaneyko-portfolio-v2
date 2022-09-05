import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import styled from 'styled-components';

 export const Container = styled.header`
     display: flex;

     justify-content: space-between;
     align-items: center;
     padding: 0.5rem calc((100vw - 1000px) / 2);
    
     background-color: ${props => props.theme.colors.navBackground};
     box-shadow: 1px 1px 10px 1px #000;
     
     z-index: 2;
     position: fixed;

     backdrop-filter: blur(6px);

     margin: auto;
   
     top: 0;
     left: 0;
     width: 100%;
     max-width: 1904px;

     @media (max-width: 768px) {
       padding-left: 10px;
     }

    a{
     display: flex;

     height: 100%;
     align-items: center;

     font-family: 'Allerta Stencil', sans-serif;
     
     font-size: 1rem;
     text-decoration: none;
     text-transform: uppercase;

     color: ${props => props.theme.colors.title};

     padding: 0 1rem;

     cursor: pointer;
    
    }

.nav_menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav_toggler {
  font-size: 20px;
  display: none;
}

@media screen and (max-width: 768px) {
  .nav_toggler {
    display: block;
  }
  .nav_menu {
    width: 50%;
    height: 50vh;

    flex-direction: column;
    left: 45vh;
    top: 8vh;
      
    position: absolute;

    border: 1px solid;
  
    
    background-color: ${props => props.theme.colors.navBackground};

    transform: translateX(100%);
    transition: 0.5s;
    z-index: 999;

    @media (max-width: 768px) {
      width: 100%;
      left: 0;
    }
  }
}
.nav_active {
  transform: translateX(0%);
}
 `;

export const NavLink = styled(Link)`
     display: flex;

     height: 100%;
     align-items: center;
     
     font-family: 'Allerta Stencil', sans-serif;

     
     font-size: 1rem;
     text-decoration: none;
     text-transform: uppercase;
     
     color: ${props => props.theme.colors.title};

     cursor: pointer;
&.active {
    color: ${props => props.theme.colors.title};
}
`;

 export const LogoName = styled(NavHashLink)`
  p{
    text-transform: capitalize;
    color: ${props => props.theme.colors.title};
    font-family: 'Allerta Stencil', sans-serif;
    font-size: 1.8rem;

     @media (max-width: 768px) {
        font-size: 1.5rem;
     }
    }
 `;

 export const Bars = styled(FaBars)`
     display: none;
     color: ${props => props.theme.colors.title};
    
   @media screen and (max-width: 768px) {
     display: block;

     position: absolute;

     top: 0;
     right: 0;

     transform: translate(-100%, 75%);
     
     font-size: 1.8rem;

     cursor: pointer;
  }
 `;

export const NavMenu = styled.div`
     display: flex;
     
     align-items: center;
     
     margin-right: -24px;
@media screen and (max-width: 768px) {
     display: none;
}
`;



