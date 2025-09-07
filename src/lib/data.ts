"use server";

export const fetchGreeting = async() => {
  try {
    console.log("lib/data.ts")
    const res = await fetch("http://localhost:3000/api/proxy", { cache: "no-store"});
    const _res = (await res.json()) as {id: number, title: string, author: string}[];
    console.log(_res);
    return _res;
  } catch(e) {
    console.error(e)  
    return [{id: 1, title: "request failed", author: "error"}];
  }
};
