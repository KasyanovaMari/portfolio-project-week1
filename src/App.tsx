import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Projects} from "./layout/sections/projects/Projects.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {Contact} from "./layout/sections/contacts/Contacts.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import {Particle} from "./components/particle/Particle.tsx";
import {GoTop} from "./components/goTop/GoTop.tsx";


function App() {
    return (
        <div className="App">
            <Particle/>
            <Header/>
            <Main/>
            <Projects/>
            <Skills/>
            <Contact/>
            <Footer/>
            <GoTop/>
        </div>
    )
}

export default App
