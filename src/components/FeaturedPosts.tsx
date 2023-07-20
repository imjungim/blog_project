import PostsGrid from "./PostsGrid";
import { getFeaturedPosts, getAllPosts } from "@/service/posts";
import PostSlide from "./PostSlide";

//모든 포스트 데이터 보여주기
export default async function PostCard() {
  //포스트 데이터 읽어오기
  const posts = await getFeaturedPosts(); //featured post
  const allPosts = await getAllPosts();
  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold my-2">Featured Posts</h2>
      <PostsGrid posts={posts} />
      <h2 className="text-2xl font-bold my-2">You may like</h2>
      <PostSlide posts={allPosts} />
    </section>
  );
}
