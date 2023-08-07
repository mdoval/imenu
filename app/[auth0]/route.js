import { handleAuth, handleLogin } from 'next-auth'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({ message: "Hello, World!" });
}

/*
export const GET = handleAuth({
  login: handleLogin({
    authorizationParams: {
      prompt: "login",
    },
    returnTo: "/profile",
  }),
  signup: handleLogin({
    authorizationParams: {
      prompt: "login",
      screen_hint: "signup",
    },
    returnTo: "/profile",
  }),
});
*/