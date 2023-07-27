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

export type PostData = Post & {
  content: string;
};

//featured -> true인 아이템만 filtering
export async function getFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => post.featured));
}

//전체 아이템
export async function getNotFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => !post.featured));
}

export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json"); //json 파일경로 생성
  return readFile(filePath, "utf-8")
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}

export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), "data/posts", `${fileName}.md`);
  const metadata = await getAllPosts().then((posts) =>
    posts.find((post) => post.path === fileName)
  );
  if (!metadata)
    throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);
    const content = await readFile(filePath, 'utf-8')
    return { ...metadata, content};
}
