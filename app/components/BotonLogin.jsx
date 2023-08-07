'use client'

import { signIn } from "next-auth/react"

export default function BotonLogin() {
    return (
        <button className="bg-blue-200 p-5 border-solid border-grey-200 m-2 rounded-full" onClick={() => signIn('auth0', { callbackUrl: 'http://localhost:3000/dashboard' }, { prompt: "login" })}>Ingresar</button>
    )
}