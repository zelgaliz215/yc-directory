import Form from 'next/form';
import SearchFormReset from './SearchFormReset';
import { Search } from 'lucide-react';

type SearchFormProps = {
    query?: string;
};

const SearchForm : React.FC <SearchFormProps> = ( {query} ) => {
    /* El componente SearchForm utiliza el prop query para poblar el campo de entrada con el valor actual de búsqueda.
    
    defaultValue: Permite mostrar el valor inicial de búsqueda basado en query.
    
    El formulario usa el método GET (por defecto), lo que actualiza la URL con el parámetro query cuando se envía el formulario.
    
    Si query está presente, se muestra un botón para reiniciar la búsqueda (componente SearchFormReset).    */

    return (
        <Form action="/" scroll={false} className='search-form'>
            {/* Se renderiza el imput que realioza la busqueda del parametro query que se pasa por get con el valor de la query */}
            <input
                name='query'
                defaultValue={query}
                className='search-input'
                placeholder='Search Startups'
            />
            <div className="flex gap-2">
                {/* Se renderiza el el boton de reset */}
                {query && <SearchFormReset />}

                {/* Boton de busqueda que hace submit al formulario */}
                <button type='submit' className='search-btn text-white'>
                    <Search className='size-5' />
                </button>

            </div>
        </Form>
    )
}

export default SearchForm