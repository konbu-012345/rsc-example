import "server-only";

export const fetchGreeting = async() => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/posts`;
    
  try {
    const res = await fetch(url, { cache: "no-store"});
    return (await res.json()) as {id: number, title: string, author: string}[];
  } catch(e) {
    console.error(e)  
    return [{id: 1, title: "request failed", author: "error"}];
  }
};
