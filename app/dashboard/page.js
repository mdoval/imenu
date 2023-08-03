'use client'
 
import { useSession } from "next-auth/react"

export default function Dashboard() {
    const {data: session, status} = useSession()
    console.log(session, status)
    return (<>
            <h1>Hola Prueba</h1>        
            </>
            )
}