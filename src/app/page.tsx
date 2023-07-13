import Image from "next/image";
import PostCard from "./component/PostCard";

export default function Home() {
  return (
    <main>
      <section className="w-full bg-gray-300">
        <div>
          <div className="w-36 h-36 rounded-full bg-gray-300">
            <Image
              src={"/profile.webp"}
              alt="profile-image"
              width={200}
              height={200}
              className="block w-full h-auto object-cover rounded-full"
            ></Image>
          </div>
          <h4>Hi😐 I'm jungim</h4>
          <p>Frontend Developer</p>
          <span>Contact Me📧</span>
        </div>
      </section>
      <h1>Featured Post</h1>
      <PostCard />
    </main>
  );
}
