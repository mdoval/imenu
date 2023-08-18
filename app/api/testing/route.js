import { getServerSession } from "next-auth"
import NextAuth from "next-auth/next"
import { NextResponse } from "next/server"

export async function GET(request) {   
    try {
       const session = await getServerSession(NextAuth)
       if(session) {
            console.log(session)
       } else {
            console.log("No hay session activa")
       }
    } catch(error) {
        console.log(error)
    }
    const res = {message: "Ingreso a Testing Resultado desde el Hola HOla"}
    return NextResponse.json({data: res})
}
