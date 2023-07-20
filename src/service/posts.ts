import path from "path";
import { readFile } from "fs/promises";


export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

//featured -> true인 아이템만 filtering
export async function getFeaturedPosts(): Promise<Post[]> {
    return getAllPosts().then(posts => posts.filter((post)=> post.featured))
}

export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json"); //json 파일경로 생성
  return readFile(filePath, "utf-8")
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}
