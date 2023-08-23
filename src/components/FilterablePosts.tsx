"use client";
import { Post } from "@/service/posts";
import { useState, useEffect } from "react";
import PostsGrid from "./PostsGrid";
import Categories from "./Categories";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Props = {
  posts: Post[] ;
  categories: string[];
};


const ALL_POSTS = "All Posts";

export default function FilterablePosts({ posts, categories }: Props) {
  const [selected, setSelected] = useState(ALL_POSTS); //기본적으로 모든 포스트가 선택되어 나옴
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [filterData, setFilterData] = useState<Post[]>();
  const [searchInput, setSearchInput] = useState<string | undefined>();

  // let filtered =
  //   selected !== ALL_POSTS
  //     ? posts.filter((post) => post.category === selected)
  //     : posts;
  //filtered -> 검색조건

  useEffect(() => {
    if (selected !== ALL_POSTS) {
      setFilterData(posts.filter((post) => post.category === selected));
    } else {
      setFilterData(posts);
    }
  }, [selected, posts]);

  const onSubmit = (e) => {
    e.preventDefault();
    //filterData - 카테고리 필터는 기본 AllPosts
    if (searchInput && filterData && selectedDate == null && endDate == null) {
      //검색어만
      const result = filterData?.filter((item) =>
        item.title.includes(searchInput)
      );
      setFilterData(result);
    } else if (searchInput === "" && filterData && selectedDate && endDate) {
      //날짜만 검색할경우
      const dateOnlyFilter = filterData.filter(
        (item) =>
          new Date(item.date).getTime() >= selectedDate.getTime() &&
          new Date(item.date).getTime() <= endDate.getTime()
      );
      setFilterData(dateOnlyFilter);
    } else if (searchInput && filterData && selectedDate && endDate) {
      //검색사항이 모두 있는경우
      const dateFilter = filterData?.filter((item) =>
        item.title.includes(searchInput)
      );
      const getDateFilter = dateFilter.filter(
        (item) =>
          new Date(item.date).getTime() >= selectedDate.getTime() &&
          new Date(item.date).getTime() <= endDate.getTime()
      );
      setFilterData(getDateFilter);
    }
    setSearchInput("");
  };

  return (
    <>
      <section>
        <form className="flex m-4" onSubmit={onSubmit}>
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
          <input
            className="mr-2"
            type="text"
            placeholder="제목을 입력하세요"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button className="bg-slate-200 px-2 rounded">검색</button>
        </form>
      </section>
      <section className="flex m-4">
        <PostsGrid posts={filterData} />
        <Categories
          categories={[ALL_POSTS, ...categories]}
          selected={selected}
          onClick={setSelected}
        />
      </section>
    </>
  );
}
