import "./About.css";
import TCULogo from "../assets/TCULogo.png";

function About() {
    return (
        <div className="about" id="about">
            <div className="about-me" id="about-me">
                <h2 className="about-me-text" id="about-me-text">
                    About me
                </h2>
                <div className="about-info-container" id="about-info-container">
                    <div className="about-info" id="about-intro">
                        <p>
                            Hi, my name is Tresor, I am computer science student
                            at TCU pursuing a degree in computer science. I
                            graduated high school in may 2025 from Chisholm
                            Trail High School, I am very passionate about
                            technology and that is what made me decide to study
                            somputer science in college.
                        </p>
                    </div>
                    <div className="about-info" id="about-goals">
                        <p>
                            My goal for studying computer science is to become a
                            Software Engineer after graduating from college, but
                            I do not limit myself at that, I am also interest in
                            exploring other field in tech, I am not 100 sure but
                            the field that interest me the most by the time I
                            graduate will be the one.
                        </p>
                    </div>

                    <div className="about-info" id="about-current">
                        <p>
                            At the moment I am just learning different coding
                            languages, frames, and software. I am also exploring
                            other trying to explore other interest in tech, but
                            my main goal right now is to learn what would help
                            me become a software engineer.
                        </p>
                    </div>
                </div>
            </div>

            <div className="interest" id="interest"></div>

            {/* school infomation  */}
            <div className="education" id="education">
                <div
                    className="school-logo-container"
                    id="school-logo-container"
                >
                    <img
                        src={TCULogo}
                        alt="TCU logo"
                        className="school-logo"
                        id="school-logo"
                    />
                    <h2 className="school-name" id="school-name">
                        Texas Christian University
                    </h2>
                </div>
                <div
                    className="school-text-info-container"
                    id="school-text-info-container"
                >
                    <h2 className="college-name" id="college-name">
                        College of Science and Engineering
                    </h2>
                    <p className="degree-type" id="degree-type">
                        Bachelor's
                    </p>
                    <p className="attend-year" id="attend-year">
                        August 2025 - Present
                    </p>
                    <p className="major" id="major">
                        Major: Computer Science
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
