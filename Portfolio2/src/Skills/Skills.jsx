import "./Skills.css"

import { FaWindows, FaApple, FaGitAlt, FaGithub, FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";


function Skills(){
    return(
        <div className="skills" id="skills">
            <h2 className="skills-text" id="skills-text">Skills & Technologies</h2>

            {/* technologies  */}
            <div className="technology-container">
                <div className="technology"> <FaWindows />  <p>Windows</p> </div>
                <div className="technology"> <FaApple /> <p>MacOS</p></div>
                <div className="technology"> <FaGitAlt /> <p>Git</p></div>
                <div className="technology"> <FaGithub /> <p>GitHub</p></div>
                <div className="technology"> <FaJava /> <p>Java</p></div>
                <div className="technology"> <FaPython /> <p>Python</p></div>
                <div className="technology">  <IoLogoJavascript /> <p>JavaScript</p></div>
                <div className="technology"> <FaHtml5 /> <p>HTML</p></div>
                <div className="technology"> <FaCss3Alt /> <p>CSS</p></div>
                <div className="technology"> <FaReact /> <p>React</p></div>
            </div>

            {/* skills  */}
            <div className="skills-container">
                <div className="skill">Problem Solving</div>
                <div className="skill">Team Work  Collaboration</div>
                <div className="skill">Time Management  Organization</div>
                <div className="skill">Adaptability</div>
                <div className="skill">Fast Learner</div>
                <div className="skill">Computer Literacy</div>
            </div>

        </div>
    );
}


export default Skills;