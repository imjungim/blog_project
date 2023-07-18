import Image from "next/image";

export default function Profile() {
  return (
    <div className="flex flex-col items-center w-full bg-gray-300 p-4">
      <div className="w-36 h-36 rounded-full bg-gray-300 m-4">
        <Image
          src={"/profile.webp"}
          alt="profile-image"
          width={200}
          height={200}
          className="block  w-full h-auto object-cover rounded-full mb-4"
        ></Image>
      </div>
      <div className="flex flex-col">
        <h4 className="text-lg mb-1.5">Hi😐, I&lsquo;m jungim</h4>
        <p className="mb-1.5">Frontend Developer</p>
        <span className="bg-amber-100 p-1.5 text-center rounded-md">
          Contact Me 📧
        </span>
      </div>
    </div>
  );
}
