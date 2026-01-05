import "./Profile.css";
import myImage from "../assets/myImage.png"

import { FaLinkedin, FaGithub, FaInstagramSquare} from "react-icons/fa";
import { SiHandshake } from "react-icons/si";
import { MdEmail } from "react-icons/md";


function Profile(){
    return(
        <div className="profile" id="profile">
            <img src={myImage} alt="profile picture" className="profile-picture" id="profile-picture"/>
            <div className="my-info" id="my-info">
                <h1 className="name" id="name">Tresor Bitangimana</h1>
                <p className="my-info-about" id="my-info-about">Computer Science &nbsp;·&nbsp;  Student &nbsp;·&nbsp;  Tech lover</p>
            </div>
            <div className="contacts" id="contacts">
                <div className="contact" id="linkedin-contact">
                    <a href="https://www.linkedin.com/in/tresor-bitangimana-a1b05339a/"> LinkedIn &nbsp; </a>
                    <div className="icon"><FaLinkedin /></div>
                </div>
                <div className="contact" id="handshake-contact">
                    <a href="https://tcu.joinhandshake.com/profiles/tresorbitangimana">Handshake &nbsp; </a>
                    <div className="icon"><SiHandshake /></div>
                </div>
                <div className="contact" id="github-contact">
                    <a href="https://github.com/TresorBitangimana">GitHub &nbsp; </a>
                    <div className="icon"><FaGithub /></div>
                </div>
                <div className="contact" id="email-contact">
                    <a href="Mailto:bitangimanatresor@gmail.com?subject=Hello%20Tresor&body=Hi%20Tresor%2C%0A%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.">Email &nbsp; </a>
                    <div className="icon"><MdEmail /></div>
                </div>
                <div className="contact" id="instagram-contact">
                    <a href="https://www.instagram.com/treasure_1.0.1/">Instagram &nbsp; </a>
                    <div className="icon"><FaInstagramSquare /></div>
                </div>
            </div>
        </div>
    );
}


export default Profile;