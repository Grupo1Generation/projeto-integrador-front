/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'

import { useContext } from 'react'
import { AuthContext } from '../../../contexts/AuthContext'

interface CardCategoriaProps {
    categoria: Categoria
}

function CardCategoria({ categoria }: CardCategoriaProps) {

    const { usuario } = useContext(AuthContext)

    return (

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-cyan-700 text-white font-bold text-2xl'>
                    Categoria
                </header>

                <p className='p-8 text-3xl bg-slate-200 h-full'>
                    {categoria.tipo}
                </p>
             
                {
                    usuario.tipo === "ADMIN"? 

                ( 
                    <div className="flex">
                    <Link to={`/editarCategoria/${categoria.id}`}
                        className='w-full text-slate-100 bg-cyan-400 hover:bg-sky-950 
                            flex items-center justify-center py-2'>
                        <button>Editar</button>
                    </Link>
    
                    <Link to={`/deletarCategoria/${categoria.id}`}
                        className='text-slate-100 bg-red-400 hover:bg-red-700 w-full 
                            flex items-center justify-center'>
                        <button>Deletar</button>
                    </Link>
                </div>

                ) : <div></div>
            }
        </div>
    )
}

export default CardCategoria