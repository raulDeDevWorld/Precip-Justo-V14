









'use client';


import Button from '@/components/Button'




export default function Card({ nombre, costo, url, empresa, descripcion }) {




    return (
        <div class="relative w-full flex flex-around rounded-[15px] border border-gray-200 rounded-[20px] shadow overflow-hidden mt-5">
            <div class=" p-4 flex flex-col justify-between leading-normal">
                <div class="mb-8">
                    <div class=" font-bold text-xl mb-2 text-[#00A582]">
                        {nombre}
                    </div>
                    <p class="text-gray-700 text-base">{empresa}</p>
                </div>
                <div class="mb-8">

                    <p class="text-gray-700 text-base">{descripcion}</p>
                </div>
                <div class="flex items-baseline text-gray-900 dark:text-white">
                    <span class="text-[12px] font-semibold">BOB</span>
                    <span class="text-xl font-extrabold tracking-tight">{costo}</span>
                </div>
            </div>
            <div className="absolute bottom-3 right-3" >
                <Button theme='Primary'>Añadir</Button>
            </div>
            <div class="h-48 w-[100px] bg-cover rounded-t text-center" style={{ backgroundImage: `url(${url})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>

        </div>
    )
}


{/* <div className="flex items-center justify-between p-5">
                <span className="text-[20px] font-bold text-gray-900 dark:text-white">{nombre}</span>
                <div class="flex items-baseline text-red-500">
                    <span class="text-[12px] font-semibold">BOB</span>
                    <span class="text-[20px] font-extrabold tracking-tight">{costo}</span>
                </div>
            </div>

            <div class="h-[40vh] w-[40vh] rounded-t text-center " style={{ backgroundImage: `url(${url})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>

            <div className='grid grid-cols-2 gap-2 p-2'>
                <Button theme='MiniPrimary' styled='miniButtonSecondaryGreen' >Ver +</Button>
                <Button theme='MiniSuccess' >Comprar</Button>
            </div>    
            <div className='h-[50px] bg-[#0064FA] text-[16px] text-white flex justify-center items-center'>{empresa}</div> */}