
'use client'
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { X, Bell, MessageSquareIcon, MoveRight, EllipsisVertical, Search, Plus, ArrowUpRight, Sidebar, CheckIcon, ArrowRightFromLine, ArrowLeftToLine} from "lucide-react";
import { useState, useRef, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import { trace } from "@opentelemetry/api";
import createCustomer from './dashboard.model';
import { Modal } from '@/components/organisms/modal/modal.view';
import { Spinnaker } from 'next/font/google';
import { CgSpinner } from 'react-icons/cg';
import Schedule from '@/components/organisms/schedule/schedule.view';
import { capitalizeWords } from '@/shared/capitalizeWords';


const vagas = ['1', "2", "3", "4", "5", "6", "7", '8' , 9]

export function Main() {
    // 
    const [show, setShow] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSidebarExtended, setSidebarExtended] = useState(false);
    const [sidebarMounted, setSidebarMounted] = useState(false);
    // 
    useEffect(()=> {

    }, [])

    useEffect(() => {

        const tracer = trace.getTracer("main")
        const span = tracer.startSpan("Montando MeuComponente");
        
        setTimeout(() => {
          span.end(); 
        }, 500);

        console.log("📡 Enviando trace para Jaeger...");

        return () => {
       
         
        }
    }, []);
    
    const target = useRef(null);

    return (
    <main className={`flex   h-full box-border    overflow-hidden pl-7 bg-white`}>
        <div className='flex w-full overflow-y-scroll   h-full    box-border '>
            {/* <div  about="pdv" className='w-full h-40 flex items-center yjy  lg:justify-between  px-6 gap:6 border-b border-zinc-150 sm:flex-col lg:flex-row '>
                <div className='flex flex-row items-center  w-75 h-full  overflow-hidden'>
                    <div className='h-[64px] w-[64px] overflow-hidden flex justify-center items-center  rounded-full  mr-2 bg-zinc-300' >
                            <img className=" " src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPD7-4LpVJ9OK5SvXIqIYqtMFbW3SlPpWdNF767erzH00A45_MKa1RldThPERJwdc2cOY&usqp=CAU'></img> 
                    </div>
                    <p className='text-3xl font-extrabold text-nowrap'>
                        Barone Estética Automotiva
                    </p>
                </div>
                <div className=' gap-3 hidden md:flex justify-end '>
                        <button className='h-12 px-6 bg-blue-500 hover:bg-blue-400 text-zinc-50 rounded text-nowrap'>Nova Venda</button>
                        <button className='h-12 px-6 bg-zinc-100 hover:bg-zinc-50 text-zinc-900 rounded text-nowrap'>Novo Orçamento</button>
                </div>
            </div> */}
            <div className='flex flex-col h-full w-full'>
                <section className='bg-white p-4 py-9 w-full'>
                    <p className='text-xl font-semibold mb-1'>Bem vindo!</p>
                    <p className='text-zinc-500 text-md'>
                            Gerencie sua empresa
                    </p>
                    <div className='p-4 flex flex-col border rounded-2xl'>
                        <p>Vamos começar</p>
                        <p className='mb-3'>Faça sua primeira venda</p>
                        <div className='flex flex-col gap-2 mb-6'>
                            <div className='rounded-xl bg-violet-600 h-7 w-7 flex items-center justify-center text-white text-sm'>
                                1
                                {/* <CheckIcon/> */}
                            
                            </div>
                            <p className='font-bold text-sm'>cadastre um produto ou serviço</p>
                            <p className='text-sm'>Well done!</p>
                        </div>
                        <div className='flex flex-col gap-2 mb-3'>
                            <div className='rounded-xl bg-violet-600 h-7 w-7 flex items-center justify-center text-white text-sm'>
                                1
                                {/* <CheckIcon/> */}
                            
                            </div>
                            <p className='font-bold text-sm'>cadastre um produto ou serviço</p>
                            <p className='text-sm'>Well done!</p>
                        </div>
                    </div>
                    <div className='p-4 flex flex-col border rounded-2xl'>
                        <div className='mb-6'>
                            <div>
                                <p className='font-bold'>Ckecklist</p>
                                <p className='mb-3 text-sm text-neutral-0'>Faça sua primeira venda</p>
                            </div>
                            <div className='rounded-full px-3 h-7 w-min  whitespace-nowrap text-sm bg-orange-100 text-orange-600 flex items-center justify-center'>Lorem ipsum</div>
                            <div className='flex items-center'>
                                <CgSpinner/>
                                <span>
                                     <p className='text-[11px]'>progress</p>
                                    <p className='text-xl font-bold'>25%</p>
                                    
                                </span>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 mb-6'>
                            {/* <div className='rounded-xl bg-violet-600 h-7 w-7 flex items-center justify-center text-white text-sm'>
                                1
                                
                            
                            </div> */}
                            <p className='font-bold text-sm'>Adicione um nome para sua empresa</p>
                            <p className='text-sm'>Acesse a aba settings e configure um nome</p>
                        </div>
                        <div className='flex flex-col gap-2 mb-6'>
                            {/* <div className='rounded-xl bg-violet-600 h-7 w-7 flex items-center justify-center text-white text-sm'>
                                1
                                
                            
                            </div> */}
                            <p className='font-bold text-sm'>Adicione um nome para sua empresa</p>
                            <p className='text-sm'>Acesse a aba settings e configure um nome</p>
                            <span className=''>Recomendado</span>
                        </div>
                        <div className='flex flex-col gap-2 mb-3'>
                            <div className='rounded-xl bg-violet-600 h-7 w-7 flex items-center justify-center text-white text-xs'>
                                1
                                {/* <CheckIcon/> */}
                            
                            </div>
                            <p className='font-bold text-sm'>Cadastre um produto ou serviço</p>
                            <p className='text-sm'>Well done!</p>
                        </div>
                    </div>
                </section>

                <div className='w-full bg-white  flex border-b border-b-zinc-300 '>
                    <div className='flex flex-col p-4 sm:p-6 py-9 gap-6 w-full bg-red-0'> 
                        <div className='flex justify-between items-center '>
                            <h2 className='flex  gap-1 group/item  text-lg font-semibold flex gap-2 h-10'>
                                <div className='h-full border-b-2 border-zinc-900'>
                                    Pátio
                                </div> 
                                <ArrowUpRight 
                                    size={18} 
                                    className='mt-1 hidden group-hover/item:block'
                                />
                            </h2>
                            {/* <i><X size={18}/></i> */}
                        </div>
                        <p className='text-zinc-500'>
                            Gerencie as vagas no pátio
                        </p>
                        <div className='flex gap-3 sm:gap-6  w-full flex-wrap  overflow-hidden'>
                            {
                                vagas.map((name, key) => (
                                    <>
                                        <div 
                                            role='btn' 
                                            onClick={() => setIsModalOpen(true)} 
                                            className='flex h-44 w-40 bg-zinc-50 hover:bg-zinc-100 rounded border border-zinc-500 flex-col py-4 px-4 items-center justify-between gap-3 overflow-hidden'
                                        >
                                            <div className='border text-xs p- px-1 rounded border-zinc-900 flex justify-center'>
                                                VAGA {key + 1}
                                            </div>
                                            <div className='flex items-center justify-center h-8 w-full gap-2  '>
                                                <span className='text-sm whitespace-nowrap text-center'>
                                                    <span className='text-lg font-semibold'>
                                                        03,52 h
                                                    </span>
                                                    <br/>
                                                    <span className='text-zinc-600'>
                                                        restantes
                                                    </span>
                                                </span>
                                            </div>
                                            <div className='  w-min  whitespace-nowrap font-semibold flex items-center justify-center border-b border-b-zinc-800 text-sm'>
                                                7 serviços
                                            </div>
                                            <div className='h-full w-full bg-blue-500 hidden'>
                                            </div>
                                            <div className='flex items-center justify-between w-full gap-2'>
                                                <div className='h-2 w-full bg-blue-500 w-4/5 rounded-full'>
                                                    <div className='h-2 w-4/5 bg-blue-800 w-4/5 rounded-full'/> 
                                                </div>
                                                <span className='text-sm'>
                                                    80%
                                                </span>
                                            </div>
                                        </div>
                                    </>
                                ))
                            }
                           <Modal
                                onClose={setIsModalOpen}
                                isOpen={isModalOpen}
                            >
                                <div className='p-6 bg-white h-full w-full max-w-96 '>
                                    <Schedule/>
                                </div>
                            </Modal>
                        </div>
                    </div>
                </div>
                
                
                <section className='bg-white p-6 flex flex-col  py-9 gap-6 '>
                    <div className='flex justify-between items-center '>
                        <h2 className='border-b-2  border-zinc-900 text-lg font-bold flex gap-2 items-center h-10'>
                            Cronograma 
                            <MoveRight size={18}/>
                        </h2>
                        <i>
                            <X size={18}/>
                        </i>
                    </div>
                    <p className='text-zinc-600'>
                        Acompanhe o progresso dos serviços
                    </p>
                    <p className='text-sm'>
                        Hoje - Quarta-feira 8 de maio de 2024
                    </p>
                    <div>
                        <div className='flex flex-col'>
                            <div className='tabela Am'>
                                <table className="w-auto max-w-sm ">
                                    <thead className='bg-white'>
                                        <tr className='h-10 '>
                                            <th className=' p-2 bg-blue-0 text-xs text-zinc-400 font-normal text-left truncate overflow-hidden max-w-28'>
                                                Horário
                                            </th>
                                            <th className='p-2 bg-blue-0 text-xs text-zinc-400 font-normal text-left max-w-36  overflow-hidden  truncate overflow-hidden max-w-36'>
                                                Cliente
                                            </th>
                                            <th className='p-2 bg-blue-0 text-xs text-zinc-400 font-normal text-left p-2 truncate overflow-hidden max-w-20 '>
                                                Código
                                            </th>
                                            <th className='p-2 bg-blue-0 text-xs text-zinc-400 font-normal text-left truncate overflow-hidden max-w-9'>

                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className='text-sm text-zinc-800 max-w-sm overflow-hidden'>
                                        <tr className='h-10 bg-blue-0 hover:bg-zinc-100  '>
                                            <td className='p-2 truncate overflow-hidden max-w-28 '>
                                                08:00 - 08:30
                                            </td>
                                            <td className='p-2 truncate overflow-hidden max-w-36'>
                                                Marco Antonio 
                                            </td>
                                            <td className='p-2 truncate overflow-hidden max-w-20  '>
                                                #4287f5
                                            </td>
                                            <td className='p-2 truncate overflow-hidden max-w-14 '>  
                                                <EllipsisVertical size={18}/>
                                            </td>
                                        </tr>
                                        <tr className='h-10 bg-blue-0 hover:bg-zinc-100  '>
                                            <td className='p-2 truncate overflow-hidden max-w-28 '>
                                                08:00 - 08:30
                                            </td>
                                            <td className='p-2 truncate overflow-hidden max-w-36'>
                                                Marco Antonio dddddddddddddddddd
                                            </td>
                                            <td className='p-2 truncate overflow-hidden max-w-20  '>
                                                #4287f5
                                            </td>
                                            <td className='p-2 truncate overflow-hidden max-w-14 '>     
                                                <EllipsisVertical size={18}/>
                                            </td>
                                        </tr>
                                        <tr className='h-10 bg-blue-0   '>
                                            <td className='p-2 truncate overflow-hidden max-w-28 '>
                                                08:00 - 08:30
                                            </td>
                                            <td className='p-2 truncate overflow-hidden max-w-36'>
                                                Marco Antonio
                                            </td>
                                            <td className='p-2 truncate overflow-hidden max-w-20  '>
                                                #4287f5
                                            </td>
                                            <td className='p-2 truncate overflow-hidden max-w-14 '>
                                                <>
                                                <div className='h-8 w-8 rounded-full  bg-zinc-100 flex justify-center items-center'>
                                                    <Button 
                                                        ref={target} 
                                                        onClick={() => setShow(!show) }
                                                    >
                                                        <EllipsisVertical size={18}/>
                                                    </Button>
                                                </div>
                                                <Overlay 
                                                    target={target.current} 
                                                    show={show} 
                                                    placement="left"
                                                >
                                                    {(props) => (
                                                    <Tooltip id="overlay-example" {...props}>
                                                        <div className='shadow-xl bg-white rounded p-5'>
                                                            <p className='text-md  mb-2'>
                                                                Reagendar
                                                            </p>
                                                            <p className='text-md mb-2'>
                                                                Excluir
                                                            </p>
                                                            <p className='text-md mb-2'>
                                                                Marcar como concluído
                                                            </p>
                                                        </div>
                                                    </Tooltip>
                                                    )}
                                                </Overlay>
                                                </>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className='tabela Am'>
                            </div>
                        </div>
                    </div>
                </section>

              
            </div>
            {/* <div className=' w-1/4 h-full  p-4 sm md lg xl 2xl max-h-[700px] '>
                <div className='flex flex-col justify-between gap-3 p-5 text-white imgf w-full h-72 bg-red-100  overflow-hidden rounded'>
                    <div className='flex flex-col gap-3'>
                        <h3 className=' h-8 border-b-2 border-zinc-100 w-min whitespace-nowrap text-md font-semibold'>
                            Get Premium
                        </h3>
                        <p className=' text-md font-semibold'>
                            Melhore sua gestão. Desbloqueie novos funcionalidades.
                        </p>
                        <p className=' text-sm'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                    <button className='text-sm font-semibold h-10 w-full bg-white rounded text-black self-end'>
                        Ver Planos
                    </button>
                </div>
            </div> */}
        </div>
    </main>

    );
}


  