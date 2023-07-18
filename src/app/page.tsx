import Image from "next/image";
import PostCard from "../component/PostCard";
import Profile from "@/component/Profile";

export default function Home() {
  return (
    <section>
      <Profile />
      <h1>Featured Post</h1>
      <PostCard />
      <div className="w-1/5 h-80 shadow-lg m-8">
        <div className="p-2">
          <Image
            src="https://gogumafarm.kr/wp-content/uploads/2023/06/%EC%B9%B4%ED%88%B0%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC-%ED%8C%8C%EC%9B%8C%ED%8D%BC%ED%94%84%EA%B1%B8-700x392.png"
            alt="인터넷에서 가져온 이미지"
            width={300}
            height={300}
            className="object-cover"
          />
          <p>2023-07-13</p>
        </div>
        <div>
          <h4>Post 글제목</h4>
          <p>description</p>
          <span className="p-1 bg-green-100">category</span>
        </div>
      </div>
      main
    </section>
  );
}
