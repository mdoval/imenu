import { AiOutlineSave } from 'react-icons/ai'

export default function BotonSubmit(props) {
    return (
        <button className='BarCardButton'>
            <AiOutlineSave className='text-3xl ml-4' />
            <span className='m-2'>Guardar</span>
        </button>
    )
}