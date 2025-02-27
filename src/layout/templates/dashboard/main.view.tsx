
'use client'
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { X, Bell, MessageSquareIcon, MoveRight, EllipsisVertical, Search, Plus, ArrowUpRight} from "lucide-react";
import { useState, useRef, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';

import createCustomer from './dashboard.model';


const vagas = ['1', "2", "3", "4", "5", "6", "7", '8' , 9]

export function Main() {
    // states
    const [show, setShow] = useState(false);

    // mutations
    useEffect(()=> {

    }, []
    )


    // hooks



    // refs
    const target = useRef(null);



    return (
    <main className=' flex   h-[calc(100%-64px)] box-border  mt-16   fixed overflow-hidden'>
        <div className='flex w-full overflow-y-scroll   h-full z-10   box-border '>
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
                <div className='w-full bg-white  flex border-b border-b-zinc-300 '>
                    <div className='flex flex-col p-6 py-9 gap-6 w-full'> 
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
                        <div className='flex gap-6  flex-wrap  overflow-hidden'>
                            {
                                vagas.map((name, key) => (
                                    <>
                                        <button className='flex h-44 w-40 bg-zinc-50 hover:bg-zinc-100 rounded border border-zinc-500 flex-col py-4 px-4 items-center justify-between gap-3 overflow-hidden'>
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
                                        </button>
                                    </>
                                ))
                            }
                        </div>
                    </div>
                </div>
                
                <section className='w-[700px] p-6 bg-white'>
                    <h2 className=' w-full text-xl font-bold mb-6'>
                        Nova venda
                    </h2>
                    <h3 className='text-md font-bold mb-6'>
                        Dados do Cliente
                    </h3>
                    <div className='gap-2 h-min mb-4'>
                        <span className='mb-2'>
                            <label className='text-sm mb-4'>
                                Nome do Cliente
                            </label>
                        </span>
                        <br/>
                        <input 
                            placeholder="Nome do Cliente" 
                            className='w-full mt-2 text-sm h-12 border border-zinc-300 rounded pl-5'>
                        </input>
                    </div>
                    <div className='gap-2 h-min mb-4'>
                        <span className='mb-2'>
                            <label className='text-sm mb-4'>
                                Telefone
                            </label>
                        </span>
                        <br/>
                        <input 
                            placeholder="Nome do Cliente" 
                            className='w-full mt-2 text-sm h-12 border border-zinc-300 rounded pl-5'
                        ></input>
                    </div>
                    <div className='gap-2 h-min mb-4'>
                        <span className='mb-2'>
                            <label className='text-sm mb-4'>
                                Email
                            </label>
                        </span>
                        <br/>
                        <input 
                            placeholder="Nome do Cliente" 
                            className='w-full mt-2 text-sm h-12 border border-zinc-300 rounded pl-5'>
                        </input>
                    </div>
                    <button className='text-xs'>
                        ADICIONAR ENDEREÇO DE ENTREGA
                    </button>
                    <h3 className='text-md font-bold mt-6 mb-4'>
                        Serviço
                    </h3>
                    <div className='flex  gap-3'>
                        <button className='bg-zinc-100 h-10 px-3 w-min whitespace-nowrap rounded'>
                            Adicionar serviço
                        </button>
                        <button className='bg-zinc-100 h-10 px-3 w-min whitespace-nowrap  rounded'>
                            Pesquisar serviço
                        </button>
                    </div>
                    <h3 className='text-md font-bold  mt-6 mb-4'>
                        Produto
                    </h3>
                    <div 
                        className='flex  gap-3'
                    >
                        <button 
                            className='flex items-center gap-2 bg-zinc-100 h-10 px-3 w-min whitespace-nowrap rounded'
                            onClick={() => createCustomer('felipe')}
                        >
                            <Plus size={18}/> 
                            Adicionar produto
                        </button>
                        <button className='flex items-center gap-2 bg-zinc-100 h-10 px-3 w-min whitespace-nowrap  rounded'>
                            <Search size={18}/>
                            Pesquisar produto
                        </button>
                    </div>

                    
                    <h3 className='text-md font-bold  mt-6 mb-4'>
                        Subtotal
                    </h3>
                    <h3 className='text-md font-bold  mt-6 mb-4'>
                        Pagamento
                    </h3>
                    <h4 className='text-sm font-bold  mt-6 mb-4'>
                        Data e hora prevista para liberação
                    </h4>
                    <div>
                        <span>
                            Enviar Ordem de Serviço
                        </span>
                        <span>
                            Enviar Comprovante de Pagamento
                        </span>
                        <span>
                            Enviar Nota Fiscal
                        </span>
                    </div>
                    <button>
                        Gerar Venda
                    </button>
                    <button>
                        Cancelar
                    </button>
                </section>
                <section className='bg-white mt-6 p-6 flex flex-col  py-9 gap-6 '>
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


  