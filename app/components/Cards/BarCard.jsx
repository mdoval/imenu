import Image from 'next/image'
import BotonEditarBar from '../Buttons/BotonEditarBar'
import BotonEliminarBar from '../Buttons/BotonEliminarBar'

export function BarCard(props) {
    const { nombre, urlLogo } = props
    console.log(nombre)
    console.log(urlLogo)
    return (
        <div className="BarCard">
            <div className='flex items-center'>
                <div className="BarCardTitle"><span>Bar Reggio</span></div>
                <div className='BarCardLogo'>
                    <Image src="/images/regio_logo.jpg" alt='Regio Logo' width={100} height={100} />
                </div>
            </div>
            <hr />
            <div className='flex'>
                <div>
                    <BotonEditarBar />
                </div>
                <div>
                    <BotonEliminarBar />
                </div>
            </div>
            <div className="BarCardDescripcion">Bar ubicado en la provincia de misiones, con excelentes tragos de author</div>
            <div className='p-4'>
                <div className="flex items-center w-full mb-12">
                    <label className="flex items-center cursor-pointer">
                        <div className="relative">
                            <input type="checkbox" id="toggleB" className="sr-only" />
                            <div className="block bg-gray-300 w-14 h-8 rounded-full"></div>
                            <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                        </div>
                        <div className="ml-3 text-gray-700 font-medium">
                            Estado del Bar
                        </div>
                    </label>
                </div>

            </div>
        </div>
    )
}