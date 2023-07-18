import Image from "next/image";
import PostsGrid from "./PostsGrid";
import { getAllPosts } from "@/service/posts";

//모든 포스트 데이터 보여주기
export default async function PostCard() {
  //포스트 데이터 읽어오기
  const posts = await getAllPosts()
  return (
    <section>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts}/>
      {/* <div className="w-1/5 h-80 shadow-lg p-4 bg-gray-300">
        <div className="">
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
      </div> */}
    </section>
  );
}
