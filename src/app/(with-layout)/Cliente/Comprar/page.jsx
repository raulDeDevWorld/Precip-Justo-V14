'use client';
import { useState } from 'react'
import Button from '@/components/Button';
import { useUser } from '@/context/Context.js'
import Subtitle from '@/components/Subtitle'
import { WithAuth } from '@/HOCs/WithAuth'
import { writeUserData, readUserData, updateUserData } from '@/supabase/utils'
import { uploadStorage } from '@/supabase/storage'


function Comprar({ theme, styled, click, children }) {

    const { user, userDB, cart, productDB, setUserProduct, setUserItem, setUserData, setUserSuccess } = useUser()
    const [add, setAdd] = useState(false)
    const [showCart, setShowCart] = useState(false)


    function handlerPay() {
        Object.values(cart).map((i) => {
            // writeUserData('Pedido', {...i.cantidad, ...i.categoria, ...i.ciudad, ...i.costo, i.producto}, i.uuid, userDB, setUserData, setUserSuccess, 'existos', null)
        })
    }

    return (<div className='w-screen p-5'>
        <Subtitle>Mis datos personales</Subtitle>
        <div className='relative items-center justify-between  w-1/2 max-w-[500px] bg-transparent md:flex md:w-auto  transition-all	z-0' >
            <ul className="flex flex-col bg-gray-100 p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
                <li className='border-b border-gray-300 py-[12px]' >
                    Nombre: {user.nombre}
                </li>
                <li className='border-b border-gray-300 py-[12px]' >
                    Ciudad: {user.ciudad}
                </li>
            </ul>
        </div>
        <Subtitle>Mi carrito</Subtitle>
        <div className='relative items-center justify-between w-1/2 max-w-[500px] bg-transparent md:flex md:w-auto  transition-all	z-0' >
            <ul className="flex flex-col bg-gray-100 p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
                {Object.values(cart).map((i, index) => <li className='border-b border-gray-300 py-[12px]' key={index}>
                    {i['nombre de producto 1']} <br /> {i['costo'] * i['cantidad']} BOB
                </li>)}
                <li className='border-b border-gray-300 text-red-600 py-[6px]'>
                    TOTAL: {Object.values(cart).reduce((acc, i, index) => {
                        const sum = i['costo'] * i['cantidad']
                        return sum + acc
                    }, 0)} BOB
                </li>
            </ul>
        </div>
        <br />
        <Button theme="Success" click={handlerPay}> Pagar por QR</Button>
        <br />
        <br />
        <Button theme="Success" click={handlerPay}> Pagar con tarjeta</Button>
    </div>)
}

export default WithAuth(Comprar)
