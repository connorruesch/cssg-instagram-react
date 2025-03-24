import instagramLogo from "../../public/Instagram-Logo-2016-present.png"
import Image from "next/image"
import Post from "@/components/Post";

// Adding a comment here as a test
export default function Home() {
    return (
        <>
            <div className="nav">
                <div className="nav-container">
                    <Image src={instagramLogo} alt="Instagram Logo"></Image>
                </div>
            </div>

            {/* Moved to /src/components/Post.js */}
            <Post image={"https://picsum.photos/seed/apple/200/300"} />
            <Post image={"https://picsum.photos/seed/banana/200/300"} />
            <Post image={"https://picsum.photos/seed/cherry/200/300"} />
            <Post />
        </>
    );
}
