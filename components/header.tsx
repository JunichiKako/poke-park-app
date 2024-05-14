import Link from "next/link";

export default function Header() {
  // 後でリンクを追加する
  const navList = [{}];
  return (
    <header className="border-b ">
      <div className="container h-16 flex items-center gap-4">
        <Link href="/">
          <h1 className="font-bold text-2xl">Poke Park</h1>
        </Link>
      </div>
    </header>
  );
}
