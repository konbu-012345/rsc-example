import { NextResponse } from 'next/server';

export async function GET() {
  const api_url = process.env.NEXT_PUBLIC_API_URL;
  console.log(`here route.ts, api_url: ${api_url}`)
  const res = await fetch(api_url + '/posts');
  const data = (await res.json());

  return NextResponse.json(data);
}