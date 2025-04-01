
'use client'
import { result } from '@/components/organisms';
import { X, Bell, MessageSquareIcon, MoveRight, EllipsisVertical, Key, Table, List, Filter, Sidebar} from "lucide-react";

import { Header } from '@/components/organisms/header';
import { FaSquareBehance } from 'react-icons/fa6';
import { CgAdd } from 'react-icons/cg';
import { ServiceCategories } from '@/interfaces/ServiceCategory';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { capitalizeWords } from '@/shared/capitalizeWords';
import { createPortal } from 'react-dom';
import React, { useState, Dispatch, SetStateAction } from "react";
import { prisma } from '@/lib/prisma/prisma-client';
import SideBar from '@/components/organisms/side-bar';

// mswjs

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

type CategoryModalType = {
    isOpen: boolean;
    onClose: Dispatch<SetStateAction<boolean>>;
};

function CategoryModal({isOpen, onClose}: CategoryModalType)  {
    const [categoryName, setCategoryName] = useState("");

    const isDisabled = categoryName.trim() === "";

    const handleSave = () => {
        if (!isDisabled) {
            onSave()
            handleClose();
        }
    };

    const handleClose = () => {
        setCategoryName("");
        onClose(false);
    };

    const onSave = () => {
        const category = categoryName.trim()
        console.log(category, "saved");
        // Simule um envio para a API, ou atualize seu estado global.
        alert(`Categoria "${category}" salva com sucesso!`);
    };

    if (!isOpen) return null;

    return (
        <div
        onClick={() => onClose(false)}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
        >
        Modal categoria 
        </div>
    );
};

export async function Modal() {
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSaveCategory = (categoryName: string) => {
        console.log(categoryName, "saved");
  
        alert(`Categoria "${categoryName}" salva com sucesso!`);
    };
    
    return (
       <div onClick={() => {}} className='flex items-center justify-center fixed top-0 botton-0 right-0 left-0 w-full h-full bg-[rgba(0,0,0,0.4)] z-[100000]'>
            <div  onChange={(e) => e.stopPropagation()} className='text-neutral-800 w-full h-min md:max-w-96 md:max-h-80 md:max-h-64 bg-white p-5 rounded-xl flex flex-col gap-3'>
                <div>Categoria</div>
                <div className=" w-full h-min  flex  flex flex-col gap-2">
                    <label className=" text-xs font-semibold">
                        Nome *
                    </label>   
                    <div className={`h-10 w-full max-w-[360px]  border-[2px] border-zinc-200 flex  rounded-lg  items-center hover:border-zinc-300`}>
                        <input
                            className={`w-full h-full px-3 outline-none bg-transparent placeholder:text-neutral-400 text-sm`}
                            // name="fullName" 
                            spellCheck="false"
                          
                            // placeholder={`${placeholder.fullName ? placeholder.fullName : "Jon Doe"}`}
                            type="text" 
                            // {...register("fullName") }
                            // aria-invalid={errors.fullName ? "true" : "false"} 
                            defaultValue={capitalizeWords('Lavagem de estofados')}
                            // onChange={(data) => data}
                            // onChange={(e) => e.isPropagationStopped() && }
                        />
                        <span className="h-10 hidden w-10 scale-90 flex items-center justify-center ">
                            <span className="loader"/>
                        </span>
                    </div>
                    {/* {errors.fullName?.message && <p className="min-h-5 text-xs text-red-400 flex gap-2 flex ">{errors.fullName?.message}</p>} */}
                </div>

                <div className='flex gap-2 items-center w-full justify-end'>
                    <button
                       className='border px-3 h-9 rounded-xl text-sm bg-white'
                    >
                        Cancelar
                    </button>
                    <button
                        className='border px-3 h-9 rounded-xl text-sm bg-neutral-800 text-white'
                    >
                        Cadastrar
                    </button>
                </div>
            </div>
       </div>
    )
}

export async function Main() {
    // states
    const [hour, setHour] = useState("1 hour")
    const [time, setTime] = useState("1 time")
    const [tableView, setTableView] = useState<"table" | "list">('table')
    const [isModalOpen, setIsModalOpen] = useState(false);


    const router = useRouter()
    // hooks

    // const queryClient = useQueryClient()
    // const {data, error, isPending} = useQuery({ queryKey: ['services'], queryFn: () => fetchServices() })
    // const mutation = useMutation({
    //     mutationFn: fetchServices,
    //     onSuccess: () => {
    //         queryClient.invalidateQueries({ queryKey: ['services'] })
    //     },
    // })
    // if (isPending) return 'Loading...'
    // if (error) return 'An error has occurred: ' + error.message

    // my mutations
   
    return (
    <main className='  bg-[#f6f8fa]   h-full mt-16 overflow-scroll '>
        <CategoryModal
            onClose={setIsModalOpen}
            isOpen={isModalOpen}
        />
        <div className='w-full h-min   sm:p-6 flex flex-col '>
            <div className='flex justify-between '>
                <div className='flex flex-col mb-10 gap-3'>
                    <h2 className='text-md font-semibold '>
                        Serviços 
                    </h2>
                    <p className='text-zinc-400 text-sm'>
                        1 categoria 3 serviços cadastrados
                    </p>
                </div>
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className=' h-10 w-min px-3 whitespace-nowrap text-[13px]  rounded-xl  text-neutral-800 bg-[#f1f1f1] hover:bg-[#e7e7e7]'>
                    Nova categoria
                </button>
             {/* <Modal/> */}
            </div>
            {/* <div className='flex  gap-3 mb-6 items-center w-full justify-between' >
                <p className='text-zinc-600 text-sm underline'>
                    
                </p>
                <div className='flex gap-3'>
                    <button className='h-10 w-min px-3 whitespace-nowrap  text-white text-[13px] rounded-xl bg-[#4fc9da] '>
                        Cadastrar serviço
                    </button>
                    <button className=' h-10 w-min px-3 whitespace-nowrap text-[13px]  rounded-xl  text-neutral-800 bg-[#f1f1f1] hover:bg-[#e7e7e7]'>
                        Nova categoria
                    </button>
                </div>
            </div> */}
            {/* Eventos 
            poarcerias e brindes */}
            {/* <div className='text-lg h-16 flex items-center border-b border-zinc-300 mb-6'>
                Serviços mais vendidos
            </div> */}
            {/* <div className=' h-16 flex items-center justify-between border-b border-zinc-300 mb-6'>
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
            </div> */}
            {/* <div className='flex justify-between mb-6'>
                <h2 className='font-medium text-md'>
                    Lavagem
                </h2>
            </div> */}
            <div className='bg-white py-8 rounded-xl border-dashed  mb-6 border overflow-x-scroll'>
                <div className='flex justify-between px-4 sm:px-8 items-center mb-6'>
                    <h2 className='font-medium text-md '>
                        Lavagem
                    </h2>
                    <div className='flex gap-3'>
                        <button
                            onClick={() => {}} 
                            className='h-10 w-min px-3 whitespace-nowrap  text-white text-[13px] rounded-xl bg-[#4fc9da] '>
                            Cadastrar serviço 
                        </button>
                        <div className='flex -mr-2'>
                            <div className='h-9 w-9 rounded  hover:bg-zinc-100 flex items-center justify-center '>
                                <Filter 
                                    strokeWidth={1} 
                                    size={16} 
                                />
                            </div>
                            <button
                                onClick={() => tableView === "table" ? setTableView("list") : setTableView("table")}
                                className='h-9 w-9  bg-white bg-violet-100   flex items-center justify-center hover:bg-zinc-100 target:bg-zinc-200 rounded-l-lg '
                            >
                                {
                                    tableView === "table" ? 
                                    <List
                                        strokeWidth={1}
                                        size={17} 
                                        // color="grey"
                                    />
                                    :
                                    <Table 
                                        strokeWidth={1}
                                        size={19} 
                                        // color="grey" 
                                    />
                                }
                            </button>
                            
                        </div>
                    </div>
                </div>
                <div className='px-7'>
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
                                            className='h-12 border-b  border-blue-0  hover:border-blue-500 text-sm text-[#53626b]  group/item whitespace-nowrap  '
                                        >
                                            <td className='bg-blue-0 text-center '>
                                                <div className='flex items-center '>
                                                    <div className=' h-4 w-4 border  border-zinc-300 rounded hover:border-blue-500'>

                                                    </div>
                                                </div>
                                            </td>
                                            <td className=''>
                                                <div className=' hover:text-red'>
                                                    {item.name}
                                                </div>
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
                                            <td 
                                                className='w-9'>
                                                <div 
                                                    onClick={() => router.push('services/item')} 
                                                    className='flex items-center justify-end'>
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
                                        <span className='text-black hover:text-blue'>
                                            {item.name}
                                        </span>
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
                <h2 className='font-medium text-lg'>
                    Plásticos e borrachados
                </h2>
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
                    Proteção de motor e metais
                </h2>
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
                    Serviços extras
                </h2>
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


  
