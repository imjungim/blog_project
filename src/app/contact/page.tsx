"use client";

import React from "react";
import { AiOutlineGithub } from "react-icons/ai";

export default function Contact() {
  return (
    <section className="flex justify-center align-middle bg-slate-200">
      <div className="">
        <div className="text-center">
          <h1 className="font-bold text-3xl p-2 my-2">Contact Me</h1>
          <p><a href="mailto:jungim4201@gmail.com">jungim4201@gmail.com</a></p>
          <a href="https://github.com/imjungim" className="flex justify-center my-2" >
            <AiOutlineGithub className="text-7xl"/>
          </a>
        </div>
        <div className="text-center">
          <h1>Or Send me an Email</h1>
        </div>

        <form action="post">
          <h4>Your Email</h4>
          <input type="text" name="email" value="email" />
          <h4>Subject</h4>
          <input type="text" name="subject" value="subject" />
          <h4>Message</h4>
          <textarea value="message" />
        </form>
      </div>
    </section>
  );
}
