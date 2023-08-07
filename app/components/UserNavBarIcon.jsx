'use client'

import { useSession } from "next-auth/react"

export default function UserNavBarIcon() {
    const { data: session, status } = useSession()
    let imageSrc = '/images/no-foto.png'
    
    if(status === 'authenticated')  imageSrc = session.user.image

    return (
        <div>
             <img className="inline-block rounded-full ring-2 ring-white" height={56} width={56} src={imageSrc} alt=""/>
        </div>
    )
}