import Typed from "typed.js";
import { useState, useEffect, useRef  } from "react";
import "../css/Intro.css";
import NavBar from "./NavBar";
import "../css/NavBar.css";

function Intro() {
    const el = useRef(null);
    const [open,setOpen]=useState(true);

    useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ["Olá, meu nome é", "Rhaneyko."],         
          startDelay: 300,
          typeSpeed: 80,
          backSpeed: 100,
          backDelay: 100
        });
        return () => {
          typed.destroy();
        };
      }, []);

    return ( 
        <header className="header" id="intro">
            <p className="intro-greet">Olá, meu nome é</p> 
            <div className="title">
                <h1 ref={el}></h1>
            </div>
            <p className="intro-description">Desenvolvedor Front-End | Mobile.</p>
            <p className="intro-description">Estudante de Análise e Desenvolvimento de Sistemas.|</p>
            <button 
                className={`hamburguer ${open? "":"open"}`}
                onClick={() => open?setOpen(false):setOpen(true)}
            >
            </button>
            <NavBar
                classNav={`navBar ${open? "":"open"}`}
                isOpen={open}
                onLinkClick={() => open?setOpen(false):setOpen(true)}
            />
        </header>
     );
}

export default Intro;