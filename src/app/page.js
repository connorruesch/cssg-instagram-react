import instagramLogo from "../../public/Instagram-Logo-2016-present.png"
import Image from "next/image"
import Post from "@/components/Post";

export default function Home() {
    return (
        <>
            <div className="nav">
                <div className="nav-container">
                    <Image src={instagramLogo} alt="Instagram Logo"></Image>
                </div>
            </div>

            {/* Moved to /src/components/Post.js */}
            <Post />
            <Post />

        </>
    );
}
