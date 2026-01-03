import "./Profile.css";
import myImage from "./assets/myImage.png"


function Profile(){
    return(
        <div className="profile" id="profile">
            <img src={myImage} alt="profile picture" className="profile-picture" id="profile-picture"/>
            <div className="my-info" id="my-info">
                <h1 className="name" id="name">Tresor Bitangimana</h1>
                <p className="my-info-about" id="my-info-about">Computer Science &nbsp;·&nbsp;  Student &nbsp;·&nbsp;  idk</p>
            </div>
            <div className="contacts" id="contacts">
                <div className="contact" id="linkedin-contact">
                    <a href="#">LinkedIn</a>
                </div>
                <div className="contact" id="handshake-contact">
                    <a href="#">Handshake</a>
                </div>
                <div className="contact" id="github-contact">
                    <a href="#">GitHub</a>
                </div>
                <div className="contact" id="email-contact">
                    <a href="#">Email</a>
                </div>
                <div className="contact" id="instagram-contact">
                    <a href="#">Instagram</a>
                </div>
            </div>
        </div>
    );
}


export default Profile;