
'use client'

import { result } from '@/components/organisms';
import { X, Bell, MessageSquareIcon, MoveRight, EllipsisVertical, Key, Table, List, Filter, ArrowRightIcon, ArrowLeft} from "lucide-react";
import VerticalMenu from '@/components/organisms/side-bar/side-bar.view';
import { useState, useRef } from 'react';
import { Header } from '@/components/organisms/header';
import { FaSquareBehance } from 'react-icons/fa6';
import { CgAdd } from 'react-icons/cg';
import { ServiceCategories } from '@/interfaces/ServiceCategory';
import { capitalizeWords } from '@/utils/capitalizeWords';


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

    // console.table(serviceCategories.lavagem)
    const [isEdit, setIsEdit] = useState<boolean>(false)
    const [input, setInput] = useState<string>('busines name')
    return (
    <main className='  bg-[#f6f8fa]  mr-1 h-full ml-80 mt-16 overflow-scroll '>
        <div className='w-full h-min relative  p-6 flex flex-col '>
        {/* <>
            <div className="flex flex-col w-[400px] p-6">
                <div className='flex flex-col gap-2'>
                    <span>
                        Lavagem simples
                    </span>
                    <div className='h-10 w-full border rounded'>
                        <input 
                            className='w-full h-full'
                        />
                    </div>
                </div>
              
                <span>price: 50,00 - 70,00</span>
                <span>description: Lorem Ipson </span>
                <span>type: k2fg54f8</span>
                <span>category: Sujeira pesada</span>
                <span>id: lavagem</span>
            </div>
        </> */}
       
        <>
            <div className="bg-white border-rounded-t flex-col w-full p-6">
                <button 
                    onClick={() => {}}
                    className='flex gap-2 items-center'
                >
                    <div>
                        <ArrowLeft size={20}/>
                    </div>
                    Voltar
                </button>
                <h2 className="font-bold mb-6">
                    Item
                </h2>
                <div className="flex flex-col gap-6 text-sm max-w-[400px]">
                    <div className=" w-full h-min  flex  flex flex-col gap-2">
                        <label className=" text-xs">
                            Nome *
                        </label>   
                        <div className={`h-10 w-[360px]  ${isEdit? 'border-[2px]' : 'border-none'}  border-zinc-200 flex  rounded-lg  items-center hover:border-zinc-300`}>
                            <input
                                className={`w-full h-full ${isEdit? 'px-3' : 'font-semibold'} outline-none bg-transparent placeholder:text-neutral-400 text-sm`}
                                // name="fullName" 
                                spellCheck="false"
                                disabled={isEdit ? false : true}
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
                    <div className=" ">
                        <div className="flex w-full gap-2">
                            <div className=" w-full h-min  flex  flex flex-col gap-2">
                                <label className=" text-xs">
                                    Preço minimo *
                                </label>   
                                <div className="h-10 w-full border-[2px] border-zinc-200 flex  rounded-lg  items-center hover:border-zinc-300">
                                    <input
                                        className=" w-full h-full px-2 outline-none bg-transparent placeholder:text-neutral-400  "
                                        // name="fullName" 
                                        spellCheck="false"
                                        placeholder={"0,00"}
                                        type="text" 
                                        // {...register("fullName") }
                                        // aria-invalid={errors.fullName ? "true" : "false"} 
                                        // value={capitalizeWords(watch('fullName'))}
                                        // onChange={(data) => data}
                                        // onChange={(e) => e.isPropagationStopped() && }
                                    />
                                    <span className="h-10 hidden w-10 scale-90 flex items-center justify-center ">
                                        <span className="loader"/>
                                    </span>
                                </div>
                            </div>
                            <div className=" w-full h-min flex  flex flex-col gap-2">
                                <label className="text-xs">
                                    Preço máximo *
                                </label>   
                                <div className="h-10 w-full border-[2px] border-zinc-200 flex  rounded-lg items-center hover:border-zinc-300">
                                    <input
                                        className=" w-full h-full px-2 outline-none bg-transparent placeholder:text-neutral-400  "
                                        // name="fullName" 
                                        spellCheck="false"
                                        placeholder={"0,00"}
                                        type="text" 
                                        // {...register("fullName") }
                                        // aria-invalid={errors.fullName ? "true" : "false"} 
                                        // value={capitalizeWords(watch('fullName'))}
                                        // onChange={(data) => data}
                                        // onChange={(e) => e.isPropagationStopped() && }
                                    />
                                    <span className="h-10 hidden w-10 scale-90 flex items-center justify-center ">
                                        <span className="loader"/>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full h-min  flex  flex flex-col gap-2">
                        <label className="text-xs">
                        Descrição *

                        <button onClick={() => input === 'description' ? setInput('normal') : setInput('description')} className='edit underline'>{ input === 'description' ? 'Salvar' : 'Alterar'}</button>
                        </label>   
                        <div className="h-10 w-[360px] border-[2px] border-zinc-200 flex  rounded-lg  items-center hover:border-zinc-300">
                            <input
                                className=" w-full h-full px-3 outline-none bg-transparent placeholder:text-neutral-400  "
                                // name="fullName"
                                disabled={input === 'description' ? false : true }
                                spellCheck="false"
                                // placeholder={`${placeholder.fullName ? placeholder.fullName : "Jon Doe"}`}
                                type="text" 
                                // {...register("fullName") }
                                // aria-invalid={errors.fullName ? "true" : "false"} 
                                // value={capitalizeWords(watch('fullName'))}
                                // onChange={(data) => data}
                                // onChange={(e) => e.isPropagationStopped() && }
                            />
                            <span className="h-10 hidden w-10 scale-90 flex items-center justify-center ">
                                <span className="loader"/>
                            </span>
                        </div>
                        {/* {errors.fullName?.message && <p className="min-h-5 text-xs text-red-400 flex gap-2 flex ">{errors.fullName?.message}</p>} */}
                    </div>
                    <div className=" w-full h-min  flex  flex flex-col gap-2">
                        <label className="text-xs">
                            Categoria *
                        </label>   
                        <div className="h-10 w-[360px] border-[2px] border-zinc-200 flex  rounded-lg  items-center hover:border-zinc-300">
                            <select
                                className=" w-full h-full px-3 outline-none bg-transparent placeholder:text-neutral-400  "
                                // name="fullName" 
                                spellCheck="false"
                                // placeholder={`${placeholder.fullName ? placeholder.fullName : "Jon Doe"}`}
                                
                                // {...register("fullName") }
                                // aria-invalid={errors.fullName ? "true" : "false"} 
                                // value={capitalizeWords(watch('fullName'))}
                                // onChange={(data) => data}
                                // onChange={(e) => e.isPropagationStopped() && }
                            >
                                <option value="BRL">Lavagem</option>
                                <option value="USD">Vitrificação</option>
                            </select>
                            <span className="h-10 hidden w-10 scale-90 flex items-center justify-center ">
                                <span className="loader"/>
                            </span>
                        </div>
                        {/* {errors.fullName?.message && <p className="min-h-5 text-xs text-red-400 flex gap-2 flex ">{errors.fullName?.message}</p>} */}
                    </div>
                    <div className=" w-full h-min  flex  flex flex-col gap-2">
                        <label className="text-xs">
                            Id
                        </label>   
                        <div className="h-10 w-[360px]  flex  rounded-lg  items-center ">
                            {/* <input
                                className=" w-full h-full px-3 outline-none bg-transparent placeholder:text-neutral-400  "
                                // name="fullName" 
                                spellCheck="false"
                                // placeholder={`${placeholder.fullName ? placeholder.fullName : "Jon Doe"}`}
                                type="text" 
                                // {...register("fullName") }
                                // aria-invalid={errors.fullName ? "true" : "false"} 
                                // value={capitalizeWords(watch('fullName'))}
                                // onChange={(data) => data}
                                // onChange={(e) => e.isPropagationStopped() && }
                            />
                            <span className="h-10 hidden w-10 scale-90 flex items-center justify-center ">
                                <span className="loader"/>
                            </span> */}
                            <span className='text-sm font-semibold '>
                                5f565453fd
                            </span>
                        </div>
                        {/* {errors.fullName?.message && <p className="min-h-5 text-xs text-red-400 flex gap-2 flex ">{errors.fullName?.message}</p>} */}
                    </div>
                    <div className="flex items-center gap-3 w-full justify-end">
                        {   isEdit == false ?  
                            <button
                            className="text-xs text-neutral-900 rounded font-semibold whitespace-nowrap h-10 w-full sm:w-min px-3 border border-[1px] border-neutral-300"
                            onClick={() => setIsEdit(true)}
                            >
                                Editar
                            </button> : <></>
                        }
                        { isEdit &&
                        <div className="flex items-center gap-3 w-full justify-end">
                            <button
                                className="bg-green-600 hover:bg-green-500 text-xs text-white rounded font-semibold whitespace-nowrap h-10 w-full sm:w-min px-3"
                                onClick={() => setIsEdit(false)}
                            >
                                Salvar
                            </button>
                            <button
                                onClick={(e) => e.preventDefault()}
                                className="border border-neutral-500 hbg-green-600  text-xs text-neutral-900 rounded font-semibold whitespace-nowrap h-10 w-full sm:w-min px-3"
                            >
                                Cancelar
                            </button>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </>
        </div>
    </main>
    );
}


  
