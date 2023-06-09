'use client'

import Button from '@/components/Button'
import Subtitle from '@/components/Subtitle'

import Tag from '@/components/Tag'
import { useRouter } from 'next/navigation';

import { WithAuth } from '@/HOCs/WithAuth'


function Home() {

    const router = useRouter()


    function seeMore() {
        router.push('/Producto')
    }


    return (
        <main className=" w-full  flex flex-col justlfy-center  items-center">


            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div class="flex items-center justify-between py-4 bg-white dark:bg-gray-800">
                    <div>
                        <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span class="sr-only">Action button</span>
                            Filtrar
                            <svg class="w-3 h-3 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        <div id="dropdownAction" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Pedidos</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Enviados</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Cancelados</a>
                                </li>
                            </ul>
                            <div class="py-1">
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sin Saldo</a>
                            </div>
                        </div>
                    </div>
                    <label for="table-search" class="sr-only">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="table-search-users" class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar usuario" />
                    </div>
                </div>
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          
                            <th scope="col" class="px-2 py-3">
                                Cliente
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Productos
                            </th>
                            <th scope="col" class="px-2 py-3">
                                Cant
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Costo
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Estado
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                         
                            <th scope="row" class="flex items-center px-2 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                <img class="w-10 h-10 rounded-full" src="/business.svg" alt="Jese image" />
                                <div class="pl-3">
                                    <div class="text-base font-semibold">Clinica 123</div>
                                    <div class="font-normal text-gray-500">Sucre</div>
                                </div>
                            </th>
                            <td class="px-6 py-4">
                                Camilla
                            </td>
                            <td class="px-2 py-4">
                                <div class="flex items-center">
                                    5
                                </div>
                            </td>
                            <td class="px-6 py-4">
                                <div class="flex items-center">
                                    1000 BOB
                                </div>
                            </td>
                            <td class="px-2 py-4">
                                <span class="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Enviado</span>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                     
                            <th scope="row" class="flex items-center px-2 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                <img class="w-10 h-10 rounded-full" src="/business.svg" alt="Jese image" />
                                <div class="pl-3">
                                    <div class="text-base font-semibold">Clinica 12345</div>
                                    <div class="font-normal text-gray-500">Cochabamba</div>
                                </div>
                            </th>
                            <td class="px-6 py-4">
                                Tornillo
                            </td>
                            <td class="px-2 py-4">
                                <div class="flex items-center">
                                    7
                                </div>
                            </td>
                            <td class="px-6 py-4">
                                <div class="flex items-center">
                                    1000 BOB
                                </div>
                            </td>
                            <td class="px-2 py-4">
                            <span class="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">En proceso</span>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        
                            <th scope="row" class="flex items-center px-2 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                <img class="w-10 h-10 rounded-full" src="/business.svg" alt="Jese image" />
                                <div class="pl-3">
                                    <div class="text-base font-semibold">Clinica 12345</div>
                                    <div class="font-normal text-gray-500">Cochabamba</div>
                                </div>
                            </th>
                            <td class="px-6 py-4">
                                Tornillo
                            </td>
                            <td class="px-2 py-4">
                                <div class="flex items-center">
                                    7
                                </div>
                            </td>
                            <td class="px-6 py-4">
                                <div class="flex items-center">
                                    1000 BOB
                                </div>
                            </td>
                            <td class="px-2 py-4">
                            <span class="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Nuevo Pedido</span>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                           
                            <th scope="row" class="flex items-center px-2 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                <img class="w-10 h-10 rounded-full" src="/business.svg" alt="Jese image" />
                                <div class="pl-3">
                                    <div class="text-base font-semibold">Clinica 12345</div>
                                    <div class="font-normal text-gray-500">Cochabamba</div>
                                </div>
                            </th>
                            <td class="px-6 py-4">
                                Tornillo
                            </td>
                            <td class="px-2 py-4">
                                <div class="flex items-center">
                                    7
                                </div>
                            </td>
                            <td class="px-6 py-4">
                                <div class="flex items-center">
                                    1000 BOB
                                </div>
                            </td>
                            <td class="px-2 py-4">
                            <span class="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Cancelado</span>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </main>
    )
}

export default WithAuth(Home)