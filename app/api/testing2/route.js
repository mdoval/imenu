import { getServerSession } from "next-auth"
import NextAuth from "next-auth/next"
import { NextResponse } from "next/server"

export async function GET(request) {
    let res = { respuesta: "Ingreso a Testing2 api"}   
    try {
       const session = await getServerSession(NextAuth)
       if(session) {
            console.log(session)
            res = { user: session.user }
       } else {
            console.log("No hay session activa")
       }
    } catch(error) {
        console.log(error)
    }
/*    const res = {respuesta: {
        nombre: session.name,
        usuario: session.email,
    }}*/
    return NextResponse.json({data: res})
}
