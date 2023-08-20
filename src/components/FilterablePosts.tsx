"use client";
import { Post } from "@/service/posts";
import { useState } from "react";
import PostsGrid from "./PostsGrid";
import Categories from "./Categories";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Props = {
  posts: Post[];
  categories: string[];
};

const ALL_POSTS = "All Posts";

export default function FilterablePosts({ posts, categories }: Props) {
  const [selected, setSelected] = useState(ALL_POSTS); //기본적으로 모든 포스트가 선택되어 나옴
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  console.log(selectedDate.toLocaleString(), endDate )
  console.log(new Date("2023-08-19").getTime())
  const filtered =
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selected);
  console.log(new Date(posts[0].date).getTime())
  return (
    <>
      <section >
        <form className="flex m-4">
          <DatePicker
            dateFormat="yyyy-MM-dd" // 날짜 형태
            shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
            //minDate={new Date()} // minDate 이전 날짜 선택 불가
            //maxDate={new Date()} // maxDate 이후 날짜 선택 불가
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
          />
          ~
          <DatePicker
            dateFormat="yyyy-MM-dd" // 날짜 형태
            shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
            //minDate={new Date("2000-01-01")} // minDate 이전 날짜 선택 불가
            //maxDate={new Date()} // maxDate 이후 날짜 선택 불가
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />
          <input type="text" placeholder="제목을 입력하세요" />
          <button className="">검색</button>
        </form>
      </section>
      <section className="flex m-4">
        <PostsGrid posts={filtered} />
        <Categories
          categories={[ALL_POSTS, ...categories]}
          selected={selected}
          onClick={setSelected}
        />
      </section>
    </>
  );
}
