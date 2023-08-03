'use client'

import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

export default function LoginButton() {
    const [profileMenu, setProfileMenu] = useState(true)
    const { data: session, status, user } = useSession()

    //console.log(user, status)    

    if (status === 'unauthenticated') {
        return (
            <div>
                <Link href="/api/auth/signin"></Link>
            </div>
        )
    } else {
        return (
            <div>
                <button className='block h-16 w-16 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white' onClick={() => { profileMenu === true ? setProfileMenu(false) : setProfileMenu(true) }}>
                    <img src={status === 'authenticated' ? session.user.image : "/images/no-foto.png"} className='object-cover rounded-full' height={100} width={100} alt='No hay imagen' />
                </button>
                <div className='sm:right-2 absolute mt-2 w-48 py-2 bg-white rounded-lg shadow-xl' hidden={profileMenu}>
                    <a href='#' className='block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white'>Account Settings</a>
                    <a href='#' className='block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white'>Profile</a>
                    <Link href='/api/auth/signout' className='block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white'>Sign out</Link>
                </div>
            </div>
        )
    }
}