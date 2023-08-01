"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { BannerData } from "./Banner";
import Banner from "./Banner";
import { sendContactEmail } from "@/service/contact";

type Form = {
  from: string;
  subject: string;
  message: string;
};

const DEFAULT_DATA = {
  from: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<Form>(DEFAULT_DATA);
  const [banner, setBanner] = useState<BannerData | null>(null);

  const onchange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    sendContactEmail(form)//form data api요청
      .then(() => {
        setBanner({ message: "✨메일 보내기 성공!✨", state: "success" });
      })
      .catch(() => {
        setBanner({ message: "❌메일 보내기 실패!❌", state: "error" });
      })
      .finally(() => {
        setTimeout(() => {
          setBanner(null);
        }, 2000);
      });
    setForm(DEFAULT_DATA);
  };
  return (
    <section className="w-full max-w-md">
      {banner && <Banner banner={banner} />}
      <form
        onSubmit={onSubmit}
        className="w-full flex flex-col gap-2 my-4 p-4 bg-slate-700 rounded-xl text-white"
      >
        <label htmlFor="from" className="text-semibold">
          Your Email
        </label>
        <input
          className="text-semibold"
          type="email"
          id="from"
          name="from"
          required
          autoFocus
          value={form.from}
          onChange={onchange}
          className="text-black"
        />
        <label htmlFor="subject" className="text-semibold">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          autoFocus
          value={form.subject}
          onChange={onchange}
          className="text-black"
        />
        <label htmlFor="message" className="text-semibold">
          Message
        </label>
        <textarea
          rows={10}
          id="message"
          name="message"
          required
          autoFocus
          value={form.message}
          onChange={onchange}
          className="text-black"
        />
        <button className="bg-yellow-300 text-black font-bold hover:bg-yellow-400 transition-colors">
          Submit
        </button>
      </form>
    </section>
  );
}
