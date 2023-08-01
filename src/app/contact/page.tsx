"use client";

import React from "react";
import { useState, useEffect, useCallback } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import ContactForm from "@/components/ContactForm";

const LINKS = [
  { icon: <AiFillGithub />, url: "" },
  { icon: <AiFillLinkedin />, url: "" },
];

export default function Contact() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl font-bold my-2">Contact Me</h2>
      <p>jungim4201@gmail.com</p>
      <ul className="flex gap-4 my-2">
        {LINKS.map((link, index) => (
          <a key={index} href={link.url} target="_black" rel="noreferrer" className="text-5xl hover:text-yellow-400 transition-colors">
            {link.icon}
          </a>
        ))}
      </ul>
      <h2 className="text-3xl font-bold my-8">Or Send me an email</h2>
      <ContactForm/>
    </section>
  );
}
