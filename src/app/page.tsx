import Image from "next/image";
import PostCard from "../components/PostCard";
import Profile from "@/components/Profile";

const titleList = [
  'Featured Posts', 'Liked'
]

export default function HomePage() {
  return (
    <section>
      <Profile />
      <h1>{titleList[0]}</h1>
      <PostCard />
    </section>
  );
}
