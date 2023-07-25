import React from "react";

type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void; //현재 선택된 카테고리를 전달받음
};

export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <section>
      <h2>Category</h2>
      <ul>
        {categories.map((category) => (
          <li key={category} onClick={()=> onClick(category)}>{category}</li>
        ))}
      </ul>
    </section>
  );
}
