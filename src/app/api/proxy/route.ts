import { NextResponse } from 'next/server';

export async function GET() {
  const api_url = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(api_url + '/posts');
  const data = (await res.json()) as {id: number, title: string, author: string}[];

  return NextResponse.json(data);
}