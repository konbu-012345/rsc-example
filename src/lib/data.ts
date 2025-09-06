export const fetchGreeting = async() => {
  const url = `http://10.0.36.252:3000/posts`;
  try {
    const res = await fetch(url, { cache: "no-store"});
    return (await res.json()) as {id: number, title: string, author: string}[];
  } catch(e) {
    console.error(e)  
    return [{id: 1, title: "request failed", author: "error"}];
  }

};

/*
10.0.0.0/18 => 10.0.63.254
10.0.64.0/18 => 10.0.127.254
10.0.128.0/18
10.0.192.0/18
*/ 