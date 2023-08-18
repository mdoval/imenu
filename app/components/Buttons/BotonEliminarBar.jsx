import { MdOutlineDeleteOutline } from 'react-icons/md'

export default function BotonEliminarBar(props) {
    return (
        <button className='BarCardButtonEliminar'>
            <MdOutlineDeleteOutline className='text-3xl ml-4' />
            <span className='m-2'>Eliminar Bar</span>
        </button>
    )
}