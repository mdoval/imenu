import { NextResponse } from 'next/server'
import prisma from '@/db/prisma'

export async function GET(request) {
    const usuarios = await prisma.usuario.findMany()
    return NextResponse.json(usuarios)
}
