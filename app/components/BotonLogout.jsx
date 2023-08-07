'use client'

import { signOut } from "next-auth/react"

export default function BotonLogout() {
    const url = process.env.siteUrl+'/'
    console.log(url)
    return (<button className="bg-red-200 p-5 border-solid border-grey-200 m-2" onClick={() => signOut({ callbackUrl: url})}>Cerrar Sesion</button>)
}