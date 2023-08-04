'use client'

import { useSession } from "next-auth/react"

export default function UserProfile() {
    const {data: session, status} = useSession()
    console.log(session, status)

    switch(status) {
        case 'loading':
            return(<div className="p-2"><h1>Cargando...</h1></div>)
            break
        case 'authenticated':
            return(<div className="p-3">
                        <h1 className="p-2">Nombre: {session.user.name}</h1>
                        <h1 className="p-2">Mail: {session.user.email}</h1>
                        <a href="/api/auth/signout" className="p-2 bg-blue-200 border-solid">Cerrar Session</a>
                    </div>)
            break
        default:            
            return(<div className="p-2"><a href="/api/auth/signin" className="p-2 bg-blue-200 border-solid">Ingresar</a></div>)
            break
    }

}