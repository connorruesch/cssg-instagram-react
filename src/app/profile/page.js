import instagramLogo from "../../../public/Instagram-Logo-2016-present.png"
import profilePicture from "../../../public/picture.jpg"
import Image from "next/image"

export default function Profile() {
  return (
    <>
      <div className="nav">
            <div className="nav-container">
                <Image src={instagramLogo} alt="Instagram Logo"></Image>
                <p><a href="/">Home</a></p>
            </div>
        </div>

        <div className="container">
            <div className="biography">
                <div className="profile-picture"></div>
                <div className="user-information">
                    <div className="bio-flex-container">
                        <h2 className="username">connorruesch</h2>
                        <div className="button">
                            <h3>Follow</h3>
                        </div>
                        <div className="button">
                            <h3>Message</h3>
                        </div>
                    </div>
                    <div className="user-counts">
                        <div className="bio-flex-container spacing">
                            <h2><span className="bold">27</span> posts</h2>
                            <h2><span className="bold">358</span> followers</h2>
                            <h2><span className="bold">255</span> following</h2>
                        </div>
                    </div> 
                    <div className="user-bio">
                        <p className="bold">Connor Ruesch <span className="light">he/him</span></p>
                        <p className="light">Some Profession :')</p>
                        <p>User information and bio goes here!</p>
                    </div>   
                </div>
            </div>

            <div className="divider"></div>

            <div className="image-grid">
                <div className="image-row">
                    <div className="image"></div>
                    <div className="image"></div>
                    <div className="image"></div>
                </div>
                <div className="image-row">
                    <div className="image"></div>
                    <div className="image"></div>
                    <div className="image"></div>
                </div>
                <div className="image-row">
                    <div className="image"></div>
                    <div className="image"></div>
                    <div className="image"></div>
                </div>
                <div className="image-row">
                    <div className="image"></div>
                    <div className="image"></div>
                    <div className="image"></div>
                </div>
            </div>
        </div>
    </>
  );
}
