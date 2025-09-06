import Link from "next/link";

export default async function Home() {
  return (
    <main>
      <h1>hogehoge</h1>
      <Link href="/home">Goto Home!!</Link>
    </main>
  );
}
