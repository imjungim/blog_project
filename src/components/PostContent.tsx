import React from "react";
import { PostData } from '@/service/posts';
import MarkdownViewer from "@/component s/MarkdownViewer";
import { SlCalender } from "react-icons/sl";

export default function PostContent({ post }: { post: PostData }) {
  const { title, description, date, content } = post;
  return (
    <section className="flex flex-col p-4">
      <div className="flex items-center self-end text-sky-600">
        <SlCalender></SlCalender>
        <p className="font-semibold ml-2">{date.toString()}</p>
      </div>
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-xl font-bold">{description}</p>
      {/* pre tag - HTML에 작성한 내용 그대로 표현 */}
      <div className="w-44 border-2 border-sky-600 mt-4 mb-8" />
      <MarkdownViewer content={content} />
    </section>
  );
}
