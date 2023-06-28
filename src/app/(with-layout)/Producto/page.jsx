'use client'


import Image from 'next/image'
import Link from 'next/link'
import style from '../Cliente/Cliente.module.css'
import Input from '../../../components/Input'
import Select from '../../../components/Select'
import Button from '../../../components/Button'
import Subtitle from '../../../components/Subtitle'

import Tag from '../../../components/Tag'
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/Context.js'

import { useMask } from '@react-input/mask';


export default function Home() {

    const { cart, productDB, setUserProduct, setUserCart, setUserItem, item } = useUser()


    const inputRefCard = useMask({ mask: '____ ____ ____ ____', replacement: { _: /\d/ } });

    const inputRefDate = useMask({ mask: '__/__', replacement: { _: /\d/ } });
    const inputRefCVC = useMask({ mask: '___', replacement: { _: /\d/ } });
    const router = useRouter()

    function HandlerCheckOut() {
        router.push('/Cliente/Comprar')
    }

    function seeMore() {
        router.push('/Producto')
    }

    const addCart = (e, i) => {
        e.preventDefault()
        e.stopPropagation()
        setUserCart({ ...cart, [i.uuid]: { ...i, cantidad: 1 } })
    }

    const addPlussCart = (e, i) => {
        e.preventDefault()
        e.stopPropagation()
        setUserCart({ ...cart, [i.uuid]: { ...i, cantidad: cart[i.uuid].cantidad + 1 } })
    }
    const addLessCart = (e, i) => {
        e.preventDefault()
        e.stopPropagation()
        const obj = { ...cart }
        delete obj[i.uuid]
        console.log(obj)

        cart[i.uuid].cantidad - 1 == 0
            ? setUserCart(obj)
            : setUserCart({ ...cart, [i.uuid]: { ...i, cantidad: cart[i.uuid].cantidad - 1 } })
    }



    console.log(item)
    return (


        item !== undefined ? <main className="p-5 pt-[20px] pb-[60px]">
            <img src={item.url} alt="" />
            <div className='w-full flex justify-end  items-center p-4'>
                <div class="flex items-baseline text-gray-900">
                    <span class="text-[16px] text-gray-600 font-semibold">BOB</span>
                    <span class="text-[30px]  text-gray-600 font-extrabold tracking-tight">{item.costo}</span>
                </div>
            </div>
            <h3 className={style.subtitle}>{item.nombre}</h3>
            <br />
            <Subtitle>Descripción basica</Subtitle>
            <p className={style.paragraph}>{item['descripcion basica']}</p>
            <br />
            <Subtitle>Descripción tecnica</Subtitle>
            <p className={style.paragraph}>{item['descripcion tecnica']}</p>
            <br />
            <Subtitle>Uso frecuente</Subtitle>
            <p className={style.paragraph}>{item['uso frecuente']}</p>
            <br />
            <Subtitle>Cantidad</Subtitle>
                <div className='flex w-full justify-between items-center pr-4'>
                    {cart && cart[item.uuid] && cart[item.uuid].cantidad !== undefined && cart[item.uuid].cantidad !== 0 && <span className='text-[16px] text-right px-5'>Cantidad: {cart[item.uuid].cantidad} </span>}

                    {cart && cart[item.uuid] && cart[item.uuid].cantidad !== undefined && cart[item.uuid].cantidad !== 0
                        ? <div className='flex w-[150px]'>
                            <Button theme='MiniSecondary' click={(e) => addPlussCart(e, item)}>+</Button>
                            <Button theme='MiniPrimary' click={(e) => addLessCart(e, item)}>-</Button>
                        </div>
                        : <Button theme='MiniPrimary' click={(e) => addCart(e, item)}>Comprar</Button>
                    }
                </div>
            <br />
            {Object.entries(cart).length !== 0 && <div className="fixed w-screen px-5 right-0 bottom-[65px]">
                <Button theme="Success" click={HandlerCheckOut}>Ejecutar compra</Button>
            </div>}
        </main> : <div ></div>
    )
}