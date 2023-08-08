'use client'

import { signOut } from "next-auth/react"

export default function BotonLogout() {
    const url = process.env.siteUrl+'/'
    console.log(url)
    return (<button className="bg-blue-200 p-5 border-solid border-grey-200 m-2 rounded-full" onClick={() => signOut({ callbackUrl: url})}>Cerrar Sesion</button>)
}