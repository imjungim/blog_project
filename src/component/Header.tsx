import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-8">
      <Link href="/">
        <h1 className="font-bold text-lg">H-Blog</h1>
      </Link>
      <nav className="">
        <Link href="/" className="p-1.5">
          Home
        </Link>
        <Link href="/about" className="p-1.5">
          About
        </Link>
        <Link href="/posts" className="p-1.5">
          Posts
        </Link>
        <Link href="/contact" className="p-1.5">
          Contact
        </Link>
      </nav>
    </header>
  );
}
