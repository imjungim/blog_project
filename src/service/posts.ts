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
  next: Post | null;
  prev: Post | null;
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
    // .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
    .then((posts) => posts.reverse());
}

export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), "data/posts", `${fileName}.md`);
  const posts = await getAllPosts();
  const post = posts.find((post) => post.path === fileName);

  if (!post) throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);
  //현재 인덱스 찾기
  const index = posts.indexOf(post);
  //배열에 순차적으로 0 1 2 3 4 로 쌓여질때 인덱스가 0보다 클경우 다음 포스트(최신)는 -1; 이전 포스트(오래된)는 +1
  const next = index > 0 ? posts[index - 1] : null;
  const prev = index < posts.length ? posts[index + 1] : null;
  const content = await readFile(filePath, "utf-8");

  return { ...post, content, next, prev };
}

export async function getApiData() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const data = await response.json();

  return data;
}
