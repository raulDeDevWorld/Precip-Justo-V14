'use client'

import Button from '@/components/Button'
import Subtitle from '@/components/Subtitle'
import { useUser } from '@/context/Context.js'

import Tag from '@/components/Tag'
import { useRouter } from 'next/navigation';

import { WithAuth } from '@/HOCs/WithAuth'
import { useEffect } from 'react'
import { readUserData } from '@/supabase/utils'


function Home() {
    const { user, distributorPDB, setUserDistributorPDB, setUserItem } = useUser()

    const router = useRouter()


    function seeMore() {
        router.push('/Producto')
    }

    console.log(distributorPDB)

    useEffect(() => {
        readUserData('Producto', user.uuid, distributorPDB, setUserDistributorPDB, null, null, 'distribuidor', true)
    }, [])
    return (

        <div class="relative overflow-x-auto shadow-md ">
            <table class="w-[1800px] text-[12px] text-left text-gray-500 dark:text-gray-400">
                <thead class="text-[12px] text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            #
                            {/* <span class="sr-only">Image</span> */}
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Nombre
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Nombre opcional 2
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Nombre opcional 3
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Descripción basica
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Descripción tecnica
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Usos frecuentes
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Costo
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Imagen
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Disponibilidad
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Edit
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {distributorPDB && distributorPDB !== undefined && distributorPDB.map((i, index) => {
                        return <tr class="bg-white text-[12px] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                {index + 1}
                            </td>
                            <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                {i['nombre de producto 1']}
                            </td>
                            <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                {i['nombre de producto 2']}
                            </td>
                            <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                {i['nombre de producto 3']}
                            </td>
                            <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                {i['descripcion basica']}
                            </td>
                            <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                {i['descripcion tecnica']}
                            </td>
                            <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                {i['uso frecuente']}
                            </td>
                           
                            <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                {i['costo']}
                            </td>
                            <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                {i['disponibilidad']}
                            </td>
                            <td class="w-32 p-4">
                                <img src={i.url} alt="Apple Watch" />
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="font-medium text-gray-600 dark:text-red-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                    })
                    }
                </tbody>
            </table>
        </div>

    )
}




export default WithAuth(Home)








 {/* <td class="px-6 py-4">
                                    <div class="flex items-center space-x-3">
                                        <button class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                            <span class="sr-only">Quantity button</span>
                                            <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                                        </button>
                                        <div>
                                            <input type="number" id="first_product" class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required />
                                        </div>
                                        <button class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                            <span class="sr-only">Quantity button</span>
                                            <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                        </button>
                                    </div>
                                </td> */}

