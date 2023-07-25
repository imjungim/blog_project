
import FilterablePosts from "@/components/FilterablePosts";
import PostsGrid from "@/components/PostsGrid";
import { getAllPosts } from "@/service/posts";
import React from "react";

export default async function PostsPage() {
  const posts = await getAllPosts();
  //Set을 통해 중복없이 고유한 category만 배열로 생성
  const categories = [...new Set(posts.map(post => post.category))]
  return (
    <FilterablePosts posts={posts} categories={categories}/>
  );
}
