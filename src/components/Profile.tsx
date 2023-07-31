import Image from "next/image";
import Link from "next/link";
import ProfileImage from "../../public/images/profile.webp";

export default function Profile() {
  return (
    <section className="text-center mb-8">
      <Image
        className="mx-auto rounded-full object-cover"
        src={ProfileImage}
        alt="profile-image"
        width={200}
        height={200}
        priority
      ></Image>
      {/* Profile이미지가 제일 먼저 나타나도록 priority지정 */}
      <h2 className="text-3xl font-bold mt-2">Hi😐, I&lsquo;m jungim</h2>
      <h3 className="text-xl font-semi">Frontend Developer</h3>
      <Link
        href="/contact"
      >
        <button className="bg-lime-300 font-bold rounded-xl py-1 px-4 mt-2">Contact Me!</button>
      </Link>
    </section>
  );
}
