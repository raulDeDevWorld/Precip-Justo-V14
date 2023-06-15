'use client'
import { readUserAllData, updateUserData } from '@/supabase/utils'
import { useUser } from '@/context/Context.js'

import style from './Cliente.module.css'
import Button from '@/components/Button'
import Subtitle from '@/components/Subtitle'
import Card from '@/components/Card'

import Tag from '../../../components/Tag'
import Cart from '../../../components/Cart'

import { useRouter } from 'next/navigation';

import { WithAuth } from '@/HOCs/WithAuth'
import { useEffect } from 'react'


function Home() {
    const { productDB, setUserProduct, setUserItem } = useUser()

    const router = useRouter()


    function seeMore(i) {
        setUserItem(i)
        router.push('/Producto')
    }


    useEffect(() => {
        readUserAllData('Producto', productDB, setUserProduct)

    }, []);

    return (

        <main className="">
            <Subtitle htmlFor="">Categorias</Subtitle>
            <div className="flex flex-wrap justify-between">
                <Tag styled='tagPrimary'>Recientes</Tag>
                <Tag styled='tagSecondary'>En oferta</Tag>
                <Tag styled='tagSecondary'>Recientes</Tag>
                <Tag styled='tagSecondary'>Otros</Tag>
            </div>
            <br />

            <div  className="relative w-full flex flex-col items-center justify-center px-5">
                {productDB !== null && productDB !== undefined &&
                    productDB.map((i, index) =>
                        <Card nombre={i.nombre} costo={i.costo} url={i.url} empresa={i.empresa} descripcion={i.descripcion} />
                    )
                }
            </div>
        </main>
    )
}

export default WithAuth(Home)




          // <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                //         <p>

                //             <span>{i.nombre}</span><span>{i.costo}</span>
                //         </p>
                //         <img src={i.url} alt="" />
                //         <div>
                //             <Button theme='Primary' styled='miniButtonSecondaryGreen' click={() => seeMore(i)}>Ver +</Button>
                //             <Button theme='Success' click={seeMore}>Comprar</Button>
                //         </div>
                //         <span className='text-center'>{i.empresa}</span>
                //     </div>