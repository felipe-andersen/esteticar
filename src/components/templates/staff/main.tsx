
'use client'
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { result } from '@/components/organisms';
import { X, Bell, MessageSquareIcon, MoveRight, EllipsisVertical, Key, Table, List, Filter, ChevronDown, ChevronUp, FileDown, ChevronRight} from "lucide-react";
import VerticalMenu from '@/components/organisms/VerticalMenu';
import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import { TopBar } from '@/components/organisms/topBar';
import { FaSquareBehance } from 'react-icons/fa6';
import { CgAdd } from 'react-icons/cg';
import RegisterWorker from '@/components/organisms/forms/registerWorker';
import { worker } from './utils';

export interface Worker {
    name: string,
    role: string,
    lastLogin?: string,
    id: string,
    phoneDevice: string,
    email: string, 
    contract: string,
    profilePicture: string
    alternatePhone?: string
}

export function Main() {

    return (

    <main className='  bg-[#f6f8fa]  h-full ml-80 mt-16 overflow-scroll mr-1 bg-gradient'>

        <div className='w-full h-min relative  p-6 flex flex-col '>

            <div className='flex flex-col mb-10 gap-3 '>

                <h2 className='text-2xl font-semibold '>Colaborador</h2>

                <p className='text-zinc-400'>Lista de colaboradores cadastrados</p>
                
            </div>

            <div className='flex  gap-3 mb-6 items-
            center w-full justify-between' >

                <p className='text-zinc-600 text-md underline'>10 colaboradores cadastrados</p>

                <div className='flex gap-3'>
                    
                <button className='h-10 w-min px-3 whitespace-nowrap  text-white text-[13px] font-semibold rounded bg-blue-600 hover:bg-blue-500 '>

                    Cadastrar colaborador

                </button>

                <button className='hidden text-black h-10 w-min px-3 whitespace-nowrap text-sm font-semibold rounded border border-neutral-400 text-black'>

                    Nova lista

                </button>

                </div>

            </div>
            
            {/* Eventos 
            poarcerias e brindes */}
        
            <div className='text-lg h-16 flex items-center border-b border-zinc-300 mb-6'>Estatística de colaborador</div>

            <div className=' h-16 flex items-center justify-between border-b border-zinc-300 mb-6'>

                <div className='text-lg'>Lista de colaborador</div>

                <div className='flex '>

                    <div className='h-9 w-9 rounded   flex items-center justify-center '><Filter size={18} strokeWidth={1}/></div>

                        <button className='h-9  px-3  flex items-center justify-center hover:bg-zinc-200  mx-3 text-sm flex gap-1'>Exportar <ChevronDown strokeWidth={1} size={18}/></button>

                        <button className='h-9 w-9     flex items-center justify-center hover:bg-zinc-200 focus:bg-zinc-300 rounded'><Table size={18} color="black" strokeWidth={1}/></button>

                        <button className='h-9 w-9     flex items-center justify-center hover:bg-zinc-200 focus:bg-zinc-300 rounded'><List size={18} color="black" strokeWidth={1} /></button>

                    </div>
                
            </div>

            <div className='bg-white py-8  rounded mb-6 border '>
            
                <table className='bg-white w-full '>

                    <thead className=''>

                        <tr className='h-10 '>

                            <th className='text-start text-xs bg-blue-0 w-16 font-normal text-zinc-700'></th>
                            <th className='text-start text-xs font-normal text-zinc-400'></th>
                            <th className='text-start text-xs font-normal text-zinc-400'>NOME</th>
                            <th className='text-start text-xs font-normal text-zinc-400' >CARGO</th>
                            <th className='text-start text-xs font-normal text-zinc-400'>EMAIL</th>
                            <th className='text-start text-xs font-normal text-zinc-400'>TELEFONE</th>
                            <th className='text-start text-xs font-normal text-zinc-400'>ID</th>
                            <th className='text-start text-xs font-normal text-zinc-400'></th>

                        </tr>

                    </thead>

                    <tbody className=''>

                        {
                            worker.map(worker => (

                                <>
                                    
                                    <tr key={worker.id}  className='h-12 w-full border-b border-zinc-100  font-medium text-sm text-[#53626b] hover:bg-neutral-50  group/item '>

                                        <td className='bg-blue-0 text-center '>

                                            <div className='flex items-center justify-center'>

                                                <div className=' h-4 w-4 border  border-zinc-300 rounded hover:border-blue-500 '></div>
                                            </div>

                                        
                                        </td>

                                        <td className=''>
                                            <div className='overflow-hidden rounded-full h-7 w-7  rounded-full flex flex-items justify-center'>
                                                <img className="h-full" src='https://as2.ftcdn.net/v2/jpg/04/10/43/77/1000_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg'/>
                                            </div>
                                        </td>
                                         
                                        <td className=''><div className='flex gap-2 items-center h-full '><span>{worker.name}</span></div></td>

                                        <td className='whitespace-nowrap'>{worker.role}  </td>

                                        <td>{worker.email} </td>

                                        <td><span className='text-sm '>{worker.phoneDevice} </span></td>

                                        <td>{worker.contract}  </td>

                                        <td className=' w-9'>

                                            <div className='flex items-center pr-5'>

                                                <button className=' rounded px-2 h-7  flex justify-center items-center  text-xs gap-1'>

                                                    Actions

                                                    <ChevronDown size={14}/>

                                                </button>

                                            </div>
                                            
                                        </td>

                                    </tr>

                                  
                                </>
                            ))
                        }

                    </tbody>

                </table>

            </div>

            <div className='flex w-full  h-full gap-4 '>

                <div className='w-[35%]  flex flex-col px-6 py-12 items-center rounded-lg bg-white border border-zinc-100'>

                    <div className='mb-6 w-24 h-24 flex items-center justify-center rounded-full overflow-hidden'>

                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTonTN6a6Kxpt4OvQOqQ2ykL_yMTDuKw7FokbC0Fiqw8IJ95uINpn6PjKhBz6fyX5eE5Fg&usqp=CAU'></img>

                    </div>

                    <div className='flex gap-2'>

                        <p className='text-xs h-6 flex items-center bg-blue-500 rounded px-2 text-white font-medium mb-10'>Ativo</p>

                        <p className='text-xs h-6 flex items-center bg-blue-500 rounded px-2 text-white font-medium mb-10'>dgfjhy</p>

                    </div>

                    <div className='flex justify-between w-full h-12 border-b border-zinc-100 items-center'>

                        <button className='font-semibold flex items-center gap-2 text-sm'>Detalhes  <ChevronUp size={18}/></button>

                        <button className='bg-blue-200 text-xs h-8 rounded px-2 text-blue-700 font-medium'>Editar</button>

                    </div>

                    <ul className='flex flex-col w-full py-4'>

                         {/* <li className='h-16 w-full flex gap-1 flex-col justify-center text-sm text-neutral-900 '>
                            <span className='font-medium'>Permição</span>
                            <span className='text-[#96a0ad] '>jof58568</span>
                        </li> */}

                        <li className='h-16 w-full flex gap-1 flex-col justify-center text-sm text-neutral-900 '>
                            <span className='font-medium'>Email</span>
                            <span className=' text-[#96a0ad]'>mateus.lima@gmail.com</span>
                        </li>

                        <li className='h-16 w-full flex gap-1 flex-col justify-center text-sm text-neutral-900 '>
                            <span className='font-medium'>Telefone </span>
                            <span className=' text-[#96a0ad]'>+55 31 99999-9999</span>
                        </li>

                        <li className='h-16 w-full flex gap-1 flex-col justify-center text-sm text-neutral-900 '>
                            <span className='font-medium'>Telefone Alternativo</span>
                            <span className=' text-[#96a0ad]'>+55 31 99999-9999</span>
                        </li>

                        <li className='h-16 w-full flex gap-1 flex-col justify-center text-sm text-neutral-900 '>
                            <span className='font-medium'>Endereço</span>
                            <span className=' text-[#96a0ad]'>jof58568</span>
                        </li>

                        <li className='h-16 w-full flex gap-1 flex-col justify-center text-sm text-neutral-900 '>
                            <span className='font-medium'>Data de nascimento</span>
                            <span className=' text-[#96a0ad]'>jof58568</span>
                        </li>

                        <li className='h-16 w-full flex gap-1 flex-col justify-center text-sm text-neutral-900 '>
                            <span className='font-medium'>Salário bruto</span>
                            <span className=' text-[#96a0ad]'>jof58568</span>
                        </li>

                        <li className='h-16 w-full flex gap-1 flex-col justify-center text-sm text-neutral-900 '>
                            <span className='font-medium'>ID do usuário</span>
                            <span className='text-[#96a0ad] '>jof58568</span>
                        </li>

                    </ul>

                </div>

                <div className='w-[70%] h-full  flex flex-col px-6 py-12 items-center rounded bg-white border border-zinc-100 rounded-lg'> 

                    Conquistas
                
                </div>

                {/* Status
                <div><img></img></div> */}

            </div>

            <RegisterWorker/>
         
        </div>

    </main>

    );
}


  
