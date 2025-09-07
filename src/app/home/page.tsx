import { fetchGreeting } from "@/lib/data";
import Link from "next/link";
import { Suspense } from "react";

export default async function Page() {
  const res = await fetchGreeting();

  return (
    <div className="m-10">
      <Link className="mb-5" href="/">Goto Root</Link>
      <Suspense fallback={<div key={0}>loading...</div>}>
        {res.map(data => (
          <div key={data.id}>
            <div>
              <span>id: {data.id}</span>
              <span>title: {data.title}</span>
              <span>author: {data.author}</span>
            </div>
          </div>  
        ))}
      </Suspense>
    </div>  
  );
}

export const dynamic = 'force-dynamic';