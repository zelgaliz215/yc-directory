"use client"

import React from 'react'
import Link from 'next/link';
import { X } from 'lucide-react';


// Este componente permite reiniciar la búsqueda limpiando el formulario.
const SearchFormReset: React.FC = () => {
    
    /*El botón ejecuta el método reset() del formulario HTML. También redirige a la raíz (/) para eliminar el parámetro query de la URL
    */ 
    const reset = () => {
        const form = document.querySelector('.search-form') as HTMLFormElement;
        if (form) form.reset();
    }

    return (
        <button type='reset' onClick={reset}>
            <Link href='/' className='search-btn text-white'>
                <X className='size-5'/>
            </Link>
        </button>
    )
}

export default SearchFormReset