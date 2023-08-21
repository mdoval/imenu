import prisma from "@/db/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  const bar = await request.json()
  const data = { data: bar}
/*
  console.log(bar)
  const nuevoBar = await prisma.bar.create({
      data: {
        nombre: data.nombre,
        logo: data.logo,
        usuarios: {
          connect: { id: 1 } // Reemplaza ID_DEL_USUARIO con el ID del usuario al que deseas asignar el bar
        }
      }
    });
    */
    const nuevoBar = await prisma.usuario.updateMany({
      where: {
        where: {
          email: "martindoval@gmail.com",
        },
      },
      data: {
        bares: {nombre: "Bar Pepe", logo: "/url/logo"},
      },
    })    
      return NextResponse.json( nuevoBar )      
}