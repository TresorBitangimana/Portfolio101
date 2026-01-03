import './App.css'

import Profile from "./Profile.jsx";
import Projects from "./Projects.jsx";
import About from "./About.jsx";

function App() {

  return (
    <div className="app-container" id="app-container">
      <div className="profile-container" id="profile-container">
        <Profile />
      </div>
      <div className="content-container" id="content-contaienr">
        <About />
        <Projects />
      </div>
    </div>
  )
}

export default App;
