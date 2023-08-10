//import { NextAuthOptions } from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";
import DiscordProvider from "next-auth/providers/discord";

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

export const authOptions = {
    // Proveedores de autenticacion (Auth0 en este caso)
    providers: [
      Auth0Provider({
        clientId: process.env.AUTH0_CLIENT_ID,
        clientSecret: process.env.AUTH0_CLIENT_SECRET,
        issuer: process.env.AUTH0_ISSUER,
        authorization: {
          params: {
            scope: "openid email profile",
            prompt: "login",
          },
        },
      }),
      /*
      DiscordProvider({
        clientId: process.env.DISCORD_CLIENT_ID,
        clientSecret: process.env.DISCORD_CLIENT_SECRET,
      }),
    */
    ],    
    callbacks: {
      async signIn({ user, account, profile, email, credentials }) {
        const isAllowedToSignIn = true
        if (isAllowedToSignIn) {
          console.log("Usuario Logueado Correctamente")
          // Aca gestiono el usuario logueado
          updateUser(user)
          return true
        } else {
          console.log("Usuario No logueado o no autorizado")
            // Return false to display a default error message
          return false
          // Or you can return a URL to redirect to:
          // return '/unauthorized'
        }
      }
    }  
  }