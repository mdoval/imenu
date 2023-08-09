import { NextResponse } from 'next/server'
import prisma from '@/db/prisma'

export async function GET(request, {params}) {
    const id = parseInt(params.idUsuario)
    const email = "martindoval@gmail.com"

//  Verificar usuario

    const usuario = await prisma.usuario.findFirst({
        where: {
            email: email
        },
        select: {
            bares: true, // Seleccionamos la relación 'bares' del usuario
        },
    })
    return NextResponse.json(usuario)
}