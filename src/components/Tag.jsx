'use client';

import style from './Tag.module.css'


export default function Button({ styled, click, children }) {

    return (
        <span
            class={`w-[40%] bg-green-100 text-gray-400 text-[14px] text-center font-medium px-2.5 py-0.5 my-1 rounded-2xl 
         border border-gray-400 ${style[styled]}`}
            onClick={click}
        >
            {children}
        </span>
    )
}

