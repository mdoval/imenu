import NextAuth from "next-auth";
import { authOptions } from "@/utils/authOptions";

/* Funcion que Actualiza el usuario logueado en nuestra BD */
async function updateUser(user) {
  // Datos del usuario a guardar en nuestra base (email)
  const dataToSend = {email: user.email}
  // llamada al API que guarda crea el usuario en caso que no exista
  const usuarioNuevo = await fetch(`${process.env.siteUrl}/api/usuarios/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataToSend),
  })
  // respuesta del usuario nuevo recien creado
  const res = await usuarioNuevo.json()
  console.log(res)
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };