import PostsGrid from "./PostsGrid";
import { getFeaturedPosts } from "@/service/posts";


//모든 포스트 데이터 보여주기
export default async function PostCard() {
  //포스트 데이터 읽어오기
  const posts = await getFeaturedPosts(); //featured post

  return (
    <section className="my-4">
      <h2 className="text-2xl font-bold my-2">Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
