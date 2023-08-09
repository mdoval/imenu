import prisma from "@/db/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
    const nuevoBar = await prisma.bar.create({
        data: {
          nombre: "Bar 1 otro usuario",
          logo: "nombre bar 1 otro usuario",
          usuarios: {
            connect: { id: 13 } // Reemplaza ID_DEL_USUARIO con el ID del usuario al que deseas asignar el bar
          }
        }
      });
      return NextResponse.json( { nuevoBar } )
}