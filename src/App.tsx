import './App.css';
import Intro from './screens/HomePage/Intro';
import AboutMe from './screens/AboutPage/AboutMe';
import MyProjects from './components/MyProjects';
import Contact from './screens/ContactPage/Contact';
import Footer from './screens/CopyrightPage/Footer';
function App() {
    return (
        <>
            <Intro/>
            <main>
                <AboutMe/>
                <MyProjects/>
                <Contact/>
            </main>
            <Footer/>
        </>
    );
}

export default App;
