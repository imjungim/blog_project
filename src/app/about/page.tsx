import React from "react";
import { Metadata } from "next";
import Profile from "@/components/Profile";
import AboutInfo from "@/components/AboutInfo";

export const metadata: Metadata = {
  title: 'About Me',
  description: "나의 소개",
  icons: {
    icon: "/favicon.ico",
  },
};


export default function About() {
  return (
    <div>
      <Profile />
      <AboutInfo/>
    </div>
  );
}
