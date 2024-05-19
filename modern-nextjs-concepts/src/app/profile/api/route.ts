import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";
export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);

  console.log(requestHeaders.get("Content-Type"));
  console.log(requestHeaders.get("Authorization"));
  // Using Next js headers function
  const headerList = headers();
  console.log(headerList.get("Content-Type"));
  console.log(headerList.get("Authorization"));
  // Setting the cookie
  cookies().set("temperature", "37");

  // Getting the cookies
  const temperature = cookies().get("temperature");
  console.log(temperature);

  return new Response("Profile api data", {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
