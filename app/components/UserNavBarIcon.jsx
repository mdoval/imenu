'use client'

import { useSession } from "next-auth/react"
import BotonLogout from "./BotonLogout"

export default function UserNavBarIcon() {
    const { data: session, status } = useSession()
    let imageSrc = '/images/no-foto.png'
    
    if(status === 'authenticated')  imageSrc = session.user.image

    return (
        <div>
             <img className="inline-block rounded-full ring-2 ring-white" height={40} width={40} src={imageSrc} alt=""/>
             <BotonLogout />
        </div>
    )
}