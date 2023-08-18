import { BiEditAlt } from 'react-icons/bi'

export default function BotonEditarBar(props) {
    return (
        <button className='BarCardButton'>
            <BiEditAlt className='text-3xl ml-4' />
            <span className='m-2'>Editar Bar</span>
        </button>
    )
}