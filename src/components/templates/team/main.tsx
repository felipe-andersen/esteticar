
'use client'
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { result } from '@/components/organisms';
import { X, Bell, MessageSquareIcon, MoveRight, EllipsisVertical, Key, Table, List, Filter, ChevronDown, ChevronUp} from "lucide-react";
import VerticalMenu from '@/components/organisms/VerticalMenu';
import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import { TopBar } from '@/components/organisms/topBar';
import { FaSquareBehance } from 'react-icons/fa6';
import { CgAdd } from 'react-icons/cg';



const services = [
    {
        name: "Lavagem simples",
        role: "40,00 - 50,00",
        
        id: "52fg5gh",
        type: "Sujeira média"
    },
    {
        name: "Lavagem simples",
        role: "40,00 - 50,00",
     
        id: "j5fff4x3",
        type: "Sujeira média"
    },
    {
        name: "Lavagem simples",
        role: "40,00 - 50,00",
      
        id: "k2fg54f8",
        type: "Sujeira média"
    },
]




export function Main() {



    return (

    <main className=' wwinf bg-[#f6f8fa]  scroll ml-80 mt-16 overflow-scroll '>

        <div className='w-full h-min relative  p-6 flex flex-col '>

            <div className='flex flex-col mb-10 gap-3 '>

                <h2 className='text-2xl font-semibold '>Usuários</h2>

                <p className='text-zinc-400'>Lista de usuários cadastrados</p>
                
            </div>

            <div className='flex  gap-3 mb-6 items-center w-full justify-between' >

                <p className='text-zinc-600 text-md underline'>10 usuários cadastrados</p>

                <div className='flex gap-3'>
                    
              

                <button className='h-10 w-min px-3 whitespace-nowrap  text-white text-sm font-semibold rounded bg-teal-600'>

                    Cadastrar usuário

                </button>

                <button className='hidden text-black h-10 w-min px-3 whitespace-nowrap text-sm font-semibold rounded border border-neutral-400 text-black'>

                    Nova lista

                </button>

                </div>

            </div>

        
            
            {/* Eventos 
            poarcerias e brindes */}

        

            <div className='text-lg h-16 flex items-center border-b border-zinc-300 mb-6'>Estatística de usuário</div>

         

            <div className=' h-16 flex items-center justify-between border-b border-zinc-300 mb-6'>

                <div className='text-lg'>Lista de usuários</div>

                <div className='flex '>

                    <div className='h-9 w-9 rounded   flex items-center justify-center '><Filter size={18} /></div>

                    <button className='h-9  px-3 bg-white bg-violet-100 border border-zinc-300 flex items-center justify-center hover:bg-zinc-100 focus:bg-zinc-200 rounded-l-lg'>Export</button>

                    <button className='h-9 w-9  bg-white bg-violet-100 border border-zinc-300 flex items-center justify-center hover:bg-zinc-100 focus:bg-zinc-200 rounded-l-lg'><Table size={18} color="grey"/></button>

                    <div className='h-9 w-9  bg-white border border-zinc-400 flex items-center justify-center  rounded-r-lg'><List size={18} color="grey" /></div>

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
                            <th className='text-start text-xs font-normal text-zinc-400'>ÚLTIMO LOGIN</th>
                            <th className='text-start text-xs font-normal text-zinc-400'>DATA DE ENTRADA</th>
                            <th className='text-start text-xs font-normal text-zinc-400'>STATUS</th>

                        </tr>

                    </thead>

                    <tbody className=''>

                        {
                            services.map(item => (

                                <>

                                    <tr className='h-16 w-full border-b border-zinc-100  font-medium text-sm text-[#53626b]  group/item '>

                                        <td className='bg-blue-0 text-center '>

                                            <div className='flex items-center justify-center'>

                                                <div className=' h-4 w-4 border  border-zinc-300 rounded hover:border-blue-500 '></div>
                                            </div>

                                        
                                        </td>

                                        <td className=''><div className='h-8 w-8 bg-red-100 rounded-full'></div></td>
                                        
                                        <td>=fdf</td>

                                        <td>fdfdfdf</td>

                                        <td>fdfdfdfdfd</td>

                                        <td>fdfdfdfdfdfd </td>

                                        <td className=' w-9'>

                                            <div className='flex items-center '>

                                                <div className=' rounded px-2 h-7 hover:bg-zinc-50 flex justify-center items-center bg-zinc-50 text-xs gap-1'>

                                                    Actions

                                                    <ChevronDown size={14}/>

                                                </div>

                                            </div>
                                            
                                        </td>

                                    </tr>

                                  
                                </>
                            ))
                        }

                    </tbody>

                </table>

            </div>

            <div className='flex w-full  h-full'>

                <div className='w-96  flex flex-col px-6 py-12 items-center rounded bg-white border border-zinc-100'>

                    <div className='mb-6 w-24 h-24 flex items-center justify-center rounded-full overflow-hidden'>

                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTonTN6a6Kxpt4OvQOqQ2ykL_yMTDuKw7FokbC0Fiqw8IJ95uINpn6PjKhBz6fyX5eE5Fg&usqp=CAU'></img>

                    </div>

                    <p className='font-semibold mb-2 text-neutral-800 text-lg'>Mateus Lima</p>

                    <p className='text-sm text-zinc-500 mb-3'>Colaborador/Funcionário</p>

                    <p className='text-xs h-6 flex items-center bg-green-600 rounded px-2 text-white font-medium mb-10'>Ativo</p>


                    <div className='flex justify-between w-full h-16 border-b border-zinc-100 items-center'>

                        <button className='font-semibold flex items-center gap-2'>Detalhes  <ChevronUp size={18}/></button>

                        <button className='bg-green-200 text-xs h-8 rounded px-2 text-green-700 font-medium'>Editar</button>

                    </div>

                    <ul className='flex flex-col w-full py-4'>
                        
                        <li className='h-16 w-full flex gap-1 flex-col justify-center text-sm text-neutral-900 '>
                            <span className='font-medium'>ID do usuário</span>
                            <span className=' text-neutral-500'>jof58568</span>
                        </li>

                        <li className='h-16 w-full flex gap-1 flex-col justify-center text-sm text-neutral-900 '>
                            <span className='font-medium'>Email</span>
                            <span className=' text-neutral-500'>mateus.lima@gmail.com</span>
                        </li>

                        <li className='h-16 w-full flex gap-1 flex-col justify-center text-sm text-neutral-900 '>
                            <span className='font-medium'>Telefone</span>
                            <span className=' text-neutral-500'>+55 31 99999-9999</span>
                        </li>

                        <li className='h-16 w-full flex gap-1 flex-col justify-center text-sm text-neutral-900 '>
                            <span className='font-medium'>Endereço</span>
                            <span className=' text-neutral-500'>jof58568</span>
                        </li>

                        <li className='h-16 w-full flex gap-1 flex-col justify-center text-sm text-neutral-900 '>
                            <span className='font-medium'>Data de nascimento</span>
                            <span className=' text-neutral-500'>jof58568</span>
                        </li>

                        <li className='h-16 w-full flex gap-1 flex-col justify-center text-sm text-neutral-900 '>
                            <span className='font-medium'>Natural de</span>
                            <span className=' text-neutral-500'>jof58568</span>
                        </li>

                        <li className='h-16 w-full flex gap-1 flex-col justify-center text-sm text-neutral-900 '>
                            <span className='font-medium'>Salário bruto</span>
                            <span className=' text-neutral-500'>jof58568</span>
                        </li>

                        <li className='h-16 w-full flex gap-1 flex-col justify-center text-sm text-neutral-900 '>
                            <span className='font-medium'>Benefícios</span>
                            <span className=' text-neutral-500'>jof58568</span>
                        </li>

                    </ul>

                </div>

                <div className='w-3/5 bg-blue-100'> 
                
                </div>

                {/* Status
                <div><img></img></div> */}

            </div>

         
        
        </div>

    </main>

    );
}


  
