
'use client'
import { result } from '@/layout/organisms';
import { X, Bell, MessageSquareIcon, MoveRight, EllipsisVertical, Key, Table, List, Filter} from "lucide-react";
import VerticalMenu from '@/layout/organisms/VerticalMenu';
import { useState, useRef } from 'react';
import { TopBar } from '@/layout/organisms/header';
import { FaSquareBehance } from 'react-icons/fa6';
import { CgAdd } from 'react-icons/cg';
import { ServiceCategories } from '@/interfaces/ServiceCategory';
import Link from 'next/link';
import { useRouter } from 'next/navigation';



interface Category {
    category: string
}

const serviceCategories_exemple: Category[] = [
    {category:"pintura"},
    {category:"lavagem"},
]

console.table(serviceCategories_exemple)

const services = [
    {
        name: "Lavagem simples",
        price: "40,00 - 50,00",
        description: "Lorem Ipson ",
        id: "52fg5gh",
        type: "Sujeira leve",
        category: "lavagem"
    },
    {
        name: "Lavagem simples",
        price: "50,00 - 70,00",
        description: "Lorem Ipson ",
        id: "j5fff4x3",
        type: "Sujeira média",
        category: "lavagem"
    },
    {
        name: "Lavagem simples",
        price: "50,00 - 70,00",
        description: "Lorem Ipson ",
        id: "k2fg54f8",
        type: "Sujeira pesada",
        category: "lavagem"
    },
]

export function Main() {
    const router = useRouter()

    return (
    <main className='  bg-[#f6f8fa]  mr-1 h-full ml-80 mt-16 overflow-scroll '>
        <div className='w-full h-min relative  p-6 flex flex-col '>
            <div className='flex flex-col mb-10 gap-3 '>
                <h2 className='text-2xl font-semibold '>
                    Serviços
                </h2>
                <p className='text-zinc-400'>
                    Lista de serviços cadastrados
                </p>
            </div>
            <div className='flex  gap-3 mb-6 items-center w-full justify-between' >
                <p className='text-zinc-600 text-md underline'>
                    1 categoria 3 serviços cadastrados
                </p>
                <div className='flex gap-3'>
                <button className='h-10 w-min px-3 whitespace-nowrap  text-white text-sm font-semibold rounded bg-teal-600 text-xs'>
                    Cadastrar serviço
                </button>
                <button className='text-black h-10 w-min px-3 whitespace-nowrap text-xs font-semibold rounded border border-neutral-400 text-black'>
                    Nova categoria
                </button>
                </div>
            </div>
            {/* Eventos 
            poarcerias e brindes */}
            <div className='text-lg h-16 flex items-center border-b border-zinc-300 mb-6'>
                Serviços mais vendidos
            </div>
            <div className=' h-16 flex items-center justify-between border-b border-zinc-300 mb-6'>
                <div className='text-lg'>
                    Categorias de serviços
                </div>
                <div className='flex '>
                    <div className='h-9 w-9 rounded   flex items-center justify-center '>
                        <Filter size={18} />
                    </div>
                    <button className='h-9 w-9  bg-white bg-violet-100 border border-zinc-300 flex items-center justify-center hover:bg-zinc-100 focus:bg-zinc-200 rounded-l-lg'>
                        <Table 
                            size={18} 
                            color="grey"
                        />
                    </button>
                    <div className='h-9 w-9  bg-white border border-zinc-400 flex items-center justify-center  rounded-r-lg'>
                        <List size={18} color="grey" />
                    </div>
                </div>
            </div>
            <div className='flex justify-between mb-6'>
                <h2 className='font-medium text-md'>
                    Lavagem
                </h2>
            </div>
            <div className='bg-white py-8 rounded mb-6 border '>
                <table className='bg-white w-full '>
                    <thead className=''>
                        <tr className='h-10'>
                            <th className='text-start text-xs bg-blue-0 w-16 font-normal text-zinc-700'></th>
                            <th className='text-start text-xs font-normal text-zinc-400'>
                                Nome
                            </th>
                            <th className='text-start text-xs font-normal text-zinc-400'>
                                Tipo
                            </th>
                            <th className='text-start text-xs font-normal text-zinc-400'>
                                Descrição
                            </th>
                            <th className='text-start text-xs font-normal text-zinc-400'>
                                ID
                            </th>
                            <th className='text-start text-xs font-normal text-zinc-400'>
                                Valor (R$)
                            </th>
                            <th className='text-start text-xs font-normal text-zinc-400'>

                            </th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            services.map(item => (
                                <>
                                    <tr 
                                        onClick={() => router.push('services/item')} 
                                        className='h-12 border-l border-l-[3px] border-blue-0  hover:border-blue-500 text-sm text-[#53626b]  group/item '
                                    >
                                        <td className='bg-blue-0 text-center '>
                                            <div className='flex items-center justify-center'>
                                                <div className=' h-4 w-4 border  border-zinc-300 rounded hover:border-blue-500'>

                                                </div>
                                            </div>
                                        </td>
                                        <td className=''>
                                            {item.name}
                                        </td>
                                        <td>
                                            {item.type}
                                        </td>
                                        <td>
                                            {item.description}
                                        </td>
                                        <td>
                                            {item.id}
                                        </td>
                                        <td>
                                            {item.price}
                                        </td>
                                        <td className='w-9'>
                                            <div className='flex items-center justify-end'>
                                                <div className='w-8 h-8 rounded-full hover:bg-zinc-50 flex justify-center items-center'>
                                                    <EllipsisVertical size={16} />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <div className='line h-[1px] w-full bg-white'></div>
                                </>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className='flex justify-between mb-6'>
                <h2 className='font-medium text-lg'>
                    Pintura
                </h2>
            </div>
            <div className='bg-white py-8 rounded mb-6 border '>
                <table className='bg-white w-full '>
                    <thead className=''>
                        <tr className='h-10'>
                            <th className='text-start text-xs bg-blue-0 w-16 font-normal text-zinc-700'></th>
                            <th className='text-start text-xs font-normal text-zinc-400'>
                                Nome
                            </th>
                            <th className='text-start text-xs font-normal text-zinc-400'>
                                Tipo
                            </th>
                            <th className='text-start text-xs font-normal text-zinc-400'>
                                Descrição
                            </th>
                            <th className='text-start text-xs font-normal text-zinc-400'>
                                ID
                            </th>
                            <th className='text-start text-xs font-normal text-zinc-400'>
                                Valor (R$)
                            </th>
                            <th className='text-start text-xs font-normal text-zinc-400'>

                            </th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            services.map(item => (
                                <>
                                    <tr className='h-12 border-l border-l-[3px] border-blue-0  hover:border-blue-500 text-sm text-[#53626b]  group/item '>
                                    <td className='bg-blue-0 text-center '>
                                        <div className='flex items-center justify-center'>
                                            <div className=' h-4 w-4 border  border-zinc-300 rounded hover:border-blue-500 '>

                                            </div>
                                        </div>
                                    </td>
                                    <td className=''>
                                        {item.name}
                                    </td>
                                    <td>
                                        {item.type}
                                    </td>
                                    <td>
                                        {item.description}
                                    </td>
                                    <td>
                                        {item.id}
                                    </td>
                                    <td>
                                        {item.price}
                                    </td>
                                    <td className='w-9'>
                                        <div className='flex items-center justify-end'>
                                            <div className='w-8 h-8 rounded-full hover:bg-zinc-50 flex justify-center items-center'>
                                                <EllipsisVertical size={16} />
                                            </div>
                                        </div>
                                    </td>
                                    </tr>
                                    <div className='line h-[1px] w-full bg-white'>
                                    
                                    </div>
                                </>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className='flex justify-between mb-6'>
                <h2 className='font-medium text-lg'>
                    Polimento
                </h2>
            </div>
            <div className='bg-white py-8 rounded mb-6 border '>
                <table className='bg-white w-full '>
                    <thead className=''>
                        <tr className='h-10'>
                            <th className='text-start text-xs bg-blue-0 w-16 font-normal text-zinc-700'></th>
                            <th className='text-start text-xs font-normal text-zinc-400'>
                                Nome
                            </th>
                            <th className='text-start text-xs font-normal text-zinc-400'>
                                Tipo
                            </th>
                            <th className='text-start text-xs font-normal text-zinc-400' >Descrição</th>
                            <th className='text-start text-xs font-normal text-zinc-400'>ID</th>
                            <th className='text-start text-xs font-normal text-zinc-400'>Valor (R$)</th>
                            <th className='text-start text-xs font-normal text-zinc-400'></th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            services.map(item => (
                                <>
                                    <tr className='h-12 border-l border-l-[3px] border-blue-0  hover:border-blue-500 text-sm text-[#53626b]  group/item '>
                                    <td className='bg-blue-0 text-center '>
                                        <div className='flex items-center justify-center'>
                                            <div className=' h-4 w-4 border  border-zinc-300 rounded hover:border-blue-500 '></div>
                                        </div>
                                    </td>
                                    <td className=''>{item.name}</td>
                                    <td>{item.type}</td>
                                    <td>{item.description}</td>
                                    <td>{item.id}</td>
                                    <td>{item.price} </td>
                                    <td className=' w-9'>
                                        <div className='flex items-center justify-end'>
                                            <div className='w-8 h-8 rounded-full hover:bg-zinc-50 flex justify-center items-center'>
                                                <EllipsisVertical size={16} />
                                            </div>
                                        </div>
                                    </td>
                                    </tr>
                                    <div className='line h-[1px] w-full bg-white'></div>
                                </>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className='flex justify-between mb-6'>
                <h2 className='font-medium text-lg'>Plásticos e borrachados</h2>
            </div>
             <div className='bg-white py-8 rounded mb-6 border '>
                <table className='bg-white w-full '>
                    <thead className=''>
                        <tr className='h-10'>
                            <th className='text-start text-xs bg-blue-0 w-16 font-normal text-zinc-700'></th>
                            <th className='text-start text-xs font-normal text-zinc-400'>Nome</th>
                            <th className='text-start text-xs font-normal text-zinc-400'>Tipo</th>
                            <th className='text-start text-xs font-normal text-zinc-400' >Descrição</th>
                            <th className='text-start text-xs font-normal text-zinc-400'>ID</th>
                            <th className='text-start text-xs font-normal text-zinc-400'>Valor (R$)</th>
                            <th className='text-start text-xs font-normal text-zinc-400'></th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            services.map(item => (
                                <>
                                    <tr className='h-12 border-l border-l-[3px] border-blue-0  hover:border-blue-500 text-sm text-[#53626b]  group/item '>
                                    <td className='bg-blue-0 text-center '>
                                        <div className='flex items-center justify-center'>
                                            <div className=' h-4 w-4 border  border-zinc-300 rounded hover:border-blue-500 '></div>
                                        </div>
                                    </td>
                                    <td className=''>{item.name}</td>
                                    <td>{item.type}</td>
                                    <td>{item.description}</td>
                                    <td>{item.id}</td>
                                    <td>{item.price} </td>
                                    <td className=' w-9'>
                                        <div className='flex items-center justify-end'>
                                            <div className='w-8 h-8 rounded-full hover:bg-zinc-50 flex justify-center items-center'>
                                                <EllipsisVertical size={16} />
                                            </div>
                                        </div>
                                    </td>
                                    </tr>
                                    <div className='line h-[1px] w-full bg-white'></div>
                                </>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className='flex justify-between mb-6'>
                <h2 className='font-medium text-lg'>Proteção de motor e metais</h2>
            </div>
             <div className='bg-white py-8 rounded mb-6 border '>
                <table className='bg-white w-full '>
                    <thead className=''>
                        <tr className='h-10'>
                            <th className='text-start text-xs bg-blue-0 w-16 font-normal text-zinc-700'></th>
                            <th className='text-start text-xs font-normal text-zinc-400'>Nome</th>
                            <th className='text-start text-xs font-normal text-zinc-400'>Tipo</th>
                            <th className='text-start text-xs font-normal text-zinc-400' >Descrição</th>
                            <th className='text-start text-xs font-normal text-zinc-400'>ID</th>
                            <th className='text-start text-xs font-normal text-zinc-400'>Valor (R$)</th>
                            <th className='text-start text-xs font-normal text-zinc-400'></th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            services.map(item => (
                                <>
                                    <tr className='h-12 border-l border-l-[3px] border-blue-0  hover:border-blue-500 text-sm text-[#53626b]  group/item '>
                                    <td className='bg-blue-0 text-center '>
                                        <div className='flex items-center justify-center'>
                                            <div className=' h-4 w-4 border  border-zinc-300 rounded hover:border-blue-500 '></div>
                                        </div>
                                    </td>
                                    <td className=''>{item.name}</td>
                                    <td>{item.type}</td>
                                    <td>{item.description}</td>
                                    <td>{item.id}</td>
                                    <td>{item.price} </td>
                                    <td className=' w-9'>
                                        <div className='flex items-center justify-end'>
                                            <div className='w-8 h-8 rounded-full hover:bg-zinc-50 flex justify-center items-center'>
                                                <EllipsisVertical size={16} />
                                            </div>
                                        </div>
                                    </td>
                                    </tr>
                                    <div className='line h-[1px] w-full bg-white'></div>
                                </>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className='flex justify-between mb-6'>
                <h2 className='font-medium text-lg'>Serviços extras</h2>
            </div>
             <div className='bg-white py-8 rounded mb-6 border '>
                <table className='bg-white w-full '>
                    <thead className=''>
                        <tr className='h-10'>
                            <th className='text-start text-xs bg-blue-0 w-16 font-normal text-zinc-700'></th>
                            <th className='text-start text-xs font-normal text-zinc-400'>Nome</th>
                            <th className='text-start text-xs font-normal text-zinc-400'>Tipo</th>
                            <th className='text-start text-xs font-normal text-zinc-400' >Descrição</th>
                            <th className='text-start text-xs font-normal text-zinc-400'>ID</th>
                            <th className='text-start text-xs font-normal text-zinc-400'>Valor (R$)</th>
                            <th className='text-start text-xs font-normal text-zinc-400'></th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            services.map(item => (
                                <>
                                    <tr className='h-12 border-l border-l-[3px] border-blue-0  hover:border-blue-500 text-sm text-[#53626b]  group/item '>
                                    <td className='bg-blue-0 text-center '>
                                        <div className='flex items-center justify-center'>
                                            <div className=' h-4 w-4 border  border-zinc-300 rounded hover:border-blue-500 '></div>
                                        </div>
                                    </td>
                                    <td className=''>{item.name}</td>
                                    <td>{item.type}</td>
                                    <td>{item.description}</td>
                                    <td>{item.id}</td>
                                    <td>{item.price} </td>
                                    <td className=' w-9'>
                                        <div className='flex items-center justify-end'>
                                            <div className='w-8 h-8 rounded-full hover:bg-zinc-50 flex justify-center items-center'>
                                                <EllipsisVertical size={16} />
                                            </div>
                                        </div>
                                    </td>
                                    </tr>
                                    <div className='line h-[1px] w-full bg-white'></div>
                                </>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className='flex justify-between mb-6'>
                <h2 className='font-medium text-lg'>
                    Eletrônicos
                </h2>
            </div>
            <div className='h-40 w-full bg-white rounded mb-6 gap-6 flex flex-col items-center justify-center'>
                Sem produtos cadastrados
                <button className='h-10 border border-black w-min px-6 whitespace-nowrap  text-sm font-semibold rounded '>
                    Adicionar serviço
                </button>
            </div>
        </div>
    </main>
    );
}


  
