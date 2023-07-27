import { getPostData } from "@/service/posts";
import React from "react";
import ReactMarkdown from "react-markdown";
import ReactDom from "react-dom";
import remarkGfm from "remark-gfm";
import MarkdownViewer from "@/components/MarkdownViewer";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Postpage({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  return (
    <>
      <h1>{post.title}</h1>
      {/* pre tag - HTML에 작성한 내용 그대로 표현 */}
      <MarkdownViewer content={post.content} />
    </>
  );
}
