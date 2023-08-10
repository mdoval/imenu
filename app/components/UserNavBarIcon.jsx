'use client'

import { useSession } from "next-auth/react"
import BotonLogout from "./BotonLogout"
import Spinner from "./Spinner"

export default function UserNavBarIcon() {
    const { data: session, status } = useSession()
    let imageSrc = '/images/no-foto.png'

    switch (status) {
        case 'loading':
            return (<div className="p-3"><Spinner /></div>)
            break
        case 'authenticated':
            imageSrc = session.user.image
            return (<div>
                <img className="inline-block rounded-full ring-2 ring-white" height={40} width={40} src={imageSrc} alt="" />
                <BotonLogout />
            </div>)
            break
    }
}