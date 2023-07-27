import React from "react";
import ReactMarkdown from "react-markdown";
import ReactDom from "react-dom";
import remarkGfm from "remark-gfm";

export default function MarkdownRenderer({ content }: { content: string }) {
  return (
    <ReactMarkdown className="prose lg:prose-xl" remarkPlugins={[remarkGfm]}>
      {content}
    </ReactMarkdown>
  );
}
