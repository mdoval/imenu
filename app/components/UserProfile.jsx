'use client'

import { useSession } from "next-auth/react"
import BotonLogout from "./BotonLogout"
import BotonLogin from "./BotonLogin"
import Spinner from "./Spinner"

export default function UserProfile() {
    const { data: session, status } = useSession()

    switch (status) {
        case 'loading':
            return (<div className="p-3"><Spinner /></div>)
            break
        case 'authenticated':
            return (
                <div className="p-3">
                    <h1 className="p-2">Nombre: {session.user.name}</h1>
                    <h1 className="p-2">Mail: {session.user.email}</h1>
                    <BotonLogout />
                </div>)
            break
        default:
            return (<div className="p-3"><Spinner /></div>)
            /*            return (
                <div className="p-2">
                    <h1>Usuario no logueado</h1>
                    <BotonLogin />
                </div>
            )*/
            break
    }
}