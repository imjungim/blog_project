import PostsGrid from "@/components/PostsGrid";
import { getAllPosts } from "@/service/posts";
import React from "react";

export default async function Posts() {
  const posts = await getAllPosts();
  console.log(posts);
  return (
    <section>
      <div className="w-4/5 p-4">
        <PostsGrid posts={posts} />
      </div>
    </section>
  );
}
