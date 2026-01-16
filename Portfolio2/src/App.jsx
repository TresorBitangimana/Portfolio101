import "./App.css";

import Profile from "./Profile/Profile.jsx";
import Projects from "./Projects/Projects.jsx";
import About from "./About/About.jsx";
import Nav from "./Nav/Nav.jsx";
import Home from "./Home/Home.jsx";
import Skills from "./Skills/Skills.jsx";

function App() {
    return (
        <div className="app-container" id="app-container">
            <div className="profile-container" id="profile-container">
                <Profile />
            </div>
            <div className="content-container" id="content-contaienr">
                <Nav />
                <div id="home">
                    <Home />
                </div>
                <div id="on-page-profile">
                    <Profile />
                </div>
                <div id="about">
                    <About />
                </div>
                <div id="skills">
                    <Skills />
                </div>
                <div id="Projects">
                    <Projects />
                </div>
            </div>
        </div>
    );
}

export default App;
