'use client'

import { signOut } from "next-auth/react"

export default function BotonLogout() {
    return (<button className="bg-red-200 p-5 border-solid border-grey-200 m-2" onClick={() => signOut('auth0')}>SignOut</button>)
}