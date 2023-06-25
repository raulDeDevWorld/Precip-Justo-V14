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

        <main className="overflow-x-auto">
            <div className="w-screen">

                  <div className="bg-gray-50 px-5 py-16 rounded-b-[50px]">

            <Subtitle htmlFor="">Disponibilidad</Subtitle>
            <div className="flex flex-wrap justify-between">
                <Tag theme='Primary'>Disponible</Tag>
                <Tag theme='Secondary'>Inmediato</Tag>
                <Tag theme='Secondary'>No disponible</Tag>
            </div>
            <Subtitle htmlFor="">Categorias</Subtitle>
            <div className="flex flex-wrap justify-between">
                <Tag theme='Primary'>Titanio</Tag>
                <Tag theme='Secondary'>Acero</Tag>
                <Tag theme='Secondary'>Otros</Tag>
            </div>


            </div>

            <br />

            <div  className="relative bg-gray-50 rounded-t-[50px] w-full flex flex-col items-center justify-center px-5 pt-16">
                {productDB !== null && productDB !== undefined &&
                    productDB.map((i, index) =>
                        <Card nombre1={i['nombre de producto 1']} nombre2={i['nombre de producto 2']} nombre3={i['nombre de producto 3']} costo={i.costo} url={i.url} empresa={i.empresa} descripcion={i['descripcion basica']} />
                    )
                }
            </div>       
            </div>
   
        </main>
    )
}

export default WithAuth(Home)




   