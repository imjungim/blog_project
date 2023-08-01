"use client";

import React from "react";
import { useState, useEffect, useCallback } from "react";
import { AiOutlineGithub } from "react-icons/ai";

export type Errors = {
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const INPUT_CONTENT = "w-full rounded mb-2";
  const [values, setValue] = useState({
    email: "",
    subject: "",
    message: "",
  });
  console.log(values);
  const [errors, setErrors] = useState({
    email: "",
    subject: "",
    message: "",
  });

  // 필드 방문 상태를 관리한다
  const [touched, setTouched] = useState({
    email: false,
    subject: false,
    message: false,
  });
  console.log(touched);

  const handleChange = (e) => {
    setValue({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  // blur 이벤트가 발생하면 touched 상태를 true로 바꾼다
  const handleBlur = (e) => {
    setTouched({
      ...touched,
      [e.target.name]: true,
    });
    const errors: Errors = validate();
    // 에러 값을 설정하고
    setErrors(errors);
  };

  // 필드값을 검증한다.
  const validate = useCallback(() => {
    const errors: Errors = {
      email: "",
      subject: "",
      message: "",
    };

    if (!values.email) {
      errors.email = "이메일을 입력하세요";
    }
    if (!values.subject) {
      errors.subject = "제목을 입력하세요";
    }
    if (!values.message) {
      errors.message = "내용을 입력하세요";
    }

    return errors;
  }, [values]);

  useEffect(() => {
    validate();
  }, [validate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTouched({
      email: true,
      subject: true,
      message: true,
    });
    const errors = validate();
    // 에러 값을 설정하고
    setErrors(errors);
    // 잘못된 값이면 제출 처리를 중단한다.
    if (Object.values(errors).some((v) => v)) {
      return;
    }
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <section className="flex justify-center align-middle bg-slate-200">
      <div className="">
        <div className="text-center">
          <h1 className="font-bold text-3xl p-2 my-2">Contact Me</h1>
          <p>
            <a href="mailto:jungim4201@gmail.com">jungim4201@gmail.com</a>
          </p>
          <a
            href="https://github.com/imjungim"
            className="flex justify-center my-2"
          >
            <AiOutlineGithub className="text-7xl" />
          </a>
        </div>

        <form action="post" onSubmit={handleSubmit}>
          <button className="w-full font-bold rounded bg-lime-300 hover:bg-lime-200 transition-colors p-2">
            Or Send me an Email
          </button>
          <h4>Your Email</h4>
          <input
            className={INPUT_CONTENT}
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.email && errors.email && <span>{errors.email}</span>}

          <h4>Subject</h4>
          <input
            className={INPUT_CONTENT}
            type="text"
            name="subject"
            value={values.subject}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.subject && errors.subject && <span>{errors.subject}</span>}
          <h4>Message</h4>
          <textarea
            className={INPUT_CONTENT}
            name="message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.message && errors.message && <span>{errors.message}</span>}
        </form>
      </div>
    </section>
  );
}
