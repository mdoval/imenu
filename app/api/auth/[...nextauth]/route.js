import NextAuth from "next-auth";
//import CredentialsProvider from "next-auth/providers/credentials";
import Auth0Provider from "next-auth/providers/auth0";
import DiscordProvider from "next-auth/providers/discord";

const handler = NextAuth({
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
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const isAllowedToSignIn = true
      if (isAllowedToSignIn) {
        console.log("Usuario Logueado, aqui debo guardar el usuario")
        console.log(user)
        //Agregar el Nuevo Usuario en la base
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
});

export { handler as GET, handler as POST };

/*
const handler = ({
    providers: [
       /* CredentialsProvider({
          name: 'Credentials',
          credentials: {
            username: { label: "Username", type: "email", placeholder: "jsmith" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
            const user = {id: "1", nombre: "martincho", email: "martincho@nubecosmica.com.ar"}
            return user
          }
        }),
        Auth0Provider({
          clientId: process.env.AUTH0_CLIENT_ID,
          clientSecret: process.env.AUTH0_CLIENT_SECRET,
          issuer: process.env.AUTH0_ISSUER,
          authorization: { params: { scope: "openid email profile" } },
        })
      ]  
})

export { handler as GET, handler as POST }
*/
