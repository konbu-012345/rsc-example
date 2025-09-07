import Link from "next/link";

export default async function Home() {
  return (
    <main className="m-10">
      <Link href="/home">Goto Home</Link>
    </main>
  );
}
