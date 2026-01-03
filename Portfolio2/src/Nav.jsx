import "./Nav.css"


function Nav(){
    return(
        <div className="nav" id="nav">
            <ul>
                <li className="paths">
                    <a href="#">Home</a>
                </li>
                <li className="paths">
                    <a href="#">About</a>
                </li>
                <li className="paths">
                    <a href="#">Skills</a>
                </li>
                <li className="paths">
                    <a href="#">Projects</a>
                </li>
            </ul>
        </div>
    );
}


export default Nav;