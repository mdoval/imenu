'use client'

import { signOut } from "next-auth/react"

export default function BotonLogout() {
    const url = process.env.siteUrl+'/'
    return (<button className="bg-blue-200 p-2 border-solid border-grey-200 m-2 rounded-full" onClick={() => signOut({ callbackUrl: url})}>Cerrar Sesion</button>)
}