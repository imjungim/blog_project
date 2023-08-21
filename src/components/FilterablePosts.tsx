"use client";
import { Post } from "@/service/posts";
import { useState, useEffect } from "react";
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
  const [filterData, setFilterData] = useState<Post[]>();
  const [searchInput, setSearchInput] = useState<string>();
  //console.log(selectedDate.toLocaleString(), endDate )
  //console.log(new Date("2023-08-19").getTime())

  //console.log(new Date(posts[0].date).getTime())
  // let filtered =
  //   selected !== ALL_POSTS
  //     ? posts.filter((post) => post.category === selected)
  //     : posts;
  //filtered -> 검색조건
  const getFilterData = (e):any => {
    e.preventDefault();
    console.log(filterData);
    if(searchInput !== ''){
      setFilterData(filterData?.filter((item) => item.title === searchInput))
    }
  };
  console.log(searchInput);


  useEffect(() => {
    if (selected !== ALL_POSTS) {
      setFilterData(posts.filter((post) => post.category === selected));
    } else {
      setFilterData(posts);
    }

  
  }, [selected, filterData]);

  return (
    <>
      <section>
        <form className="flex m-4" onSubmit={(e) => getFilterData(e) }>
          {/* <DatePicker
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
          /> */}
          <input
            type="text"
            placeholder="제목을 입력하세요"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button>검색</button>
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
