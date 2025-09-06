import { fetchGreeting } from "@/lib/data";
import { Suspense } from "react";

export default async function Home() {
  const res = await fetchGreeting();

  return (
    <div>
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
