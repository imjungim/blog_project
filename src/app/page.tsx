import FeaturedPosts from "../components/FeaturedPosts";
import Profile from "@/components/Profile";
import CardCarousel from "@/components/CarouselPosts";
import CarouselPosts from "@/components/CarouselPosts";

export default function HomePage() {
  return (
    <>
      <Profile />
      <FeaturedPosts />
      <CarouselPosts/>
    </>
  );
}
