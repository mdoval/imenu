'use client'
 
import { useSession } from "next-auth/react"

export default function Dashboard() {
//    const {data: session, status} = useSession()
//    console.log(session, status)
    return (<div>
            <h1>Bienvenido a iMenu, gestion de Cartas para Bares</h1>        
            <p>En nuestro sitio, podras gestionar cartas para tu Bar, y poder realizar pedidos desde la terminal</p>
            </div>
            )
}