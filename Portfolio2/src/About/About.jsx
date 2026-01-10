import "./About.css"
import TCULogo from "../assets/TCULogo.png";

function About(){
    return(
        <div className="about" id="about">

            <div className="about-me" id="about-me">
                <h2 className="about-me-text" id="about-me-text">About me</h2>
                <div className="about-info" id="about-intro">

                </div>
                <div className="about-info"></div>
                <div className="about-info"></div>
            </div>

            <div className="interest" id="interest">
                
            </div>

            {/* school infomation  */}
            <div className="education" id="education">

                <div className="school-logo-container" id="school-logo-container">
                    <img src={TCULogo} alt="TCU logo" className="school-logo" id="school-logo" />
                    <h2 className="school-name" id="school-name">Texas Christian University</h2>
                </div>
                <div className="school-text-info-container" id="school-text-info-container">
                    <h2 className="college-name" id="college-name">College of Science and Engineering</h2>
                    <p className="degree-type" id="degree-type">Bachelor's</p>
                    <p className="attend-year" id="attend-year">August 2025 - Present</p>
                    <p className="major" id="major">Major: Computer Science</p>
                </div>
            </div>
        </div>
    );
}



export default About;