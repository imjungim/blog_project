"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Post } from "@/service/posts";
import PostCard from "./PostCard";

type Props = { posts: Post[] };

export default function PostSlide({ posts }: Props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Carousel
        swipeable={true}
        draggable={false}
        responsive={responsive}
        showDots={true}
      >
        {posts.map((post) => (
          <div key={post.path} className="mr-4">
            <PostCard post={post} />
          </div>
        ))}
      </Carousel>
    </>
  );
}

{
  /* <ul className="w-full flex ">

</ul> */
}
