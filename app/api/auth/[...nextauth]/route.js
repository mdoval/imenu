import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import Auth0Provider from "next-auth/providers/auth0";

const handler = NextAuth({
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
        }),*/
        Auth0Provider({
          clientId: process.env.AUTH0_CLIENT_ID,
          clientSecret: process.env.AUTH0_CLIENT_SECRET,
          issuer: process.env.AUTH0_ISSUER
        })
      ]  
})

export { handler as GET, handler as POST }