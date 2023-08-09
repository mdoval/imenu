import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(request) {   
    const session = await getServerSession(authOptions) 
    console.log(session.user.email)
    return NextResponse.json({message: "Usuario No Logueado"})
}
