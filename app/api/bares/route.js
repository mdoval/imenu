import { NextResponse } from "next/server";
import prisma from '@/db/prisma'
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

export async function GET(request) {
    const session = await getServerSession(authOptions) 
    console.log(session?.user.email)
//    const email = "martindoval@gmail.com"

    const bares = await prisma.usuario.findFirst({
        where: {
          email: session?.user.email
        },
        select: {
            bares: true
        }
      });
      return NextResponse.json(bares)
}
