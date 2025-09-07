import { NextResponse } from 'next/server';

export async function GET() {
  console.log("api/proxy/route.ts")
  const api_url = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(api_url + '/posts');
  const data = (await res.json());

  return NextResponse.json(data);
}