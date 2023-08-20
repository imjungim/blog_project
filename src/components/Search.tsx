import React, { useState } from "react";
import SearchDate from "./SearchDate";

export default function Search() {
  return (
    <form className="flex m-4">
      <input type="text" placeholder="제목을 입력하세요" />
      <button className="">검색</button>
    </form>
  );
}
