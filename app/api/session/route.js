import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { NextResponse } from "next/server";

export async function GET(request) {
  const session = await getServerSession(authOptions);

  return NextResponse.json({
    authenticated: !!session,
    session,
  });
}