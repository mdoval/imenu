'use client'

import Image from 'next/image'
import UserNavBarIcon from './UserNavBarIcon'
import { useSession } from "next-auth/react"
import BotonLogin from './BotonLogin'
import Link from 'next/link'
import Spinner from './Spinner'

export default function NavBar() {
    const { data: session, status } = useSession()

    return (
        <nav className="flex items-center justify-between flex-wrap p-6" style={{ backgroundColor: "#4285f4" }}>
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Image src="/images/logo_fondo_azul.png" width={50} height={50} alt='Logo' />
                <span className="font-semibold text-xl tracking-tight">NubeCosmica</span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link href="/dashboard/productos" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Productos
                    </Link>
                    <Link href="/dashboard/categorias" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Categorias
                    </Link>
                    <Link href="/dashboard/usuarios" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                        Usuarios
                    </Link>
                </div>
                {status === 'authenticated' ?  <UserNavBarIcon /> : <BotonLogin />}
            </div>
        </nav>
    )

}
