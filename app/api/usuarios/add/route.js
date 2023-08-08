import { NextResponse } from 'next/server'
import prisma from '@/db/prisma'

export async function POST(request) {
    const usuario = await request.json()
    const nuevoUsuario = await prisma.usuario.create({data: usuario})
    return NextResponse.json( { nuevoUsuario } )
}