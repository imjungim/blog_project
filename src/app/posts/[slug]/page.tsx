import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export default function Postpage({ params: { slug } }: Props) {
  return <div>Post</div>;
}
