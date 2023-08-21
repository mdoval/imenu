import { IoMdAdd } from 'react-icons/io'
import Link from 'next/link'

export default function BotonNuevoBar(props) {
    return (
        <Link href="/dashboard/bares/new" className='BarCardButton'>
            <IoMdAdd className='text-3xl ml-4' />
            <span className='m-2'>Nuevo Bar</span>
        </Link>
    )
}