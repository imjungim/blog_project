import React from "react";

const TITLE_CLASS = "text-2xl font-bold text-gray-800 my-2";
export default function AboutInfo() {
  return (
    <section className="text-center bg-gray-100 shadow-lg m-8 p-8">
      <h2 className={TITLE_CLASS}>Who Am I ?</h2>
      <p>프론트엔드 개발자</p>

      <h2 className={TITLE_CLASS}>Career </h2>
      <p>😂</p>
      <p>😂</p>

      <h2 className={TITLE_CLASS}>Skills</h2>
      <p>React, NextJS, NodeJS</p>
      <p>Git, Slack</p>
      <p>VS Code, MongoDB</p>
    </section>
  );
}
