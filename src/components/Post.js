import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment, faPaperPlane, faBookmark } from '@fortawesome/free-solid-svg-icons';
import profilePicture from "../../public/picture.jpg"
import Image from "next/image"

// A component! Any change you make here will be reflected on the page.

export default function Post() {
    return (
        <div className="post-container">
            <div className="profile-row">
                <div className="profile-item information">
                    <Image src={profilePicture} alt="Profile Picture"></Image>
                    <a href="/profile"><p>connorruesch</p></a>
                </div>
                <div className="profile-item time-stamp">
                    <p>2h</p>
                </div>
            </div>
            <div className="image" style={{ height: '500px', margin: '0' }}></div>
            <div className="icons">
                <div className="interact">
                    <FontAwesomeIcon icon={faHeart} fixedWidth />
                    <FontAwesomeIcon icon={faComment} fixedWidth />
                    <FontAwesomeIcon icon={faPaperPlane} fixedWidth />
                </div>
                <div className="bookmark">
                    <FontAwesomeIcon icon={faBookmark} fixedWidth />
                </div>
            </div>
            <div className="post">
                <p><a href="/profile"><span className="bold">connorruesch</span></a> The text for some special post will goes right here!</p>
                <p className="comment">Add a comment...</p>
            </div>
        </div>
    );
}
