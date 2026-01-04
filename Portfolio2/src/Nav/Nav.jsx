import "./Nav.css"


function Nav(){

    //scroll behavior function
    const scrollToSection = (sectionId, navId) =>{
        const section = document.getElementById(sectionId)
        const nav = document.getElementById(navId);
        if(section){
            section.scrollIntoView(
                {
                    behavior: "smooth"
                }
            );
        }
    }

    return(
        <div className="nav" id="nav">
            <ul>
                <li onClick={() => scrollToSection("home","home-path")} className="paths" id="home-path">
                    <a >Home</a>
                </li>
                <li onClick={() => scrollToSection("about", "about-path")} className="paths" id="about-path">
                    <a >About</a>
                </li>
                <li onClick={() => scrollToSection("skills", "skills-path")} className="paths" id="skills-path">
                    <a >Skills</a>
                </li>
                <li onClick={() => scrollToSection("projects", "projects-path")}  className="paths" id="projects-path">
                    <a >Projects</a>
                </li>
            </ul>
        </div>
    );
}


export default Nav;