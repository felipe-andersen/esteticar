'use client'
import { ArrowBigRight, ArrowRightIcon, ArrowUpRight, ArrowUpRightIcon, ChevronLeft, ChevronRight, Circle, EllipsisIcon, HelpCircle, LifeBuoy, Link2, Maximize2, PenTool, Search, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { NewSale } from "@/components/organisms/forms/newSale";
import { useState } from "react";
import { createPortal } from "react-dom";
import { Modal } from "@/components/organisms/modal/modal.view";


export function Main() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <main className="w-full h-full mt-16 p-3 sm:p-6 bg-[#f6f8fa]  top-16 bottom-16 flex flex-col gap-5 overflow-y-scroll">
            {
                 <Modal
                    onClose={setIsModalOpen}
                    isOpen={isModalOpen}
                >
                    <NewSale
                        setShowModal={setIsModalOpen}
                    />
                </Modal>
            }
                
            {/* <div className="h-16 w-full flex items-center justify-between gap-5">
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setShowModal(true)}
                        className="bg-teal-500 border-[2px] border-transparent hover:border-teal-500 hover:bg-teal-400 text-white h-9 px-3 rounded font-semibold text-sm whitespace-nowrap"
                    >
                        Nova venda
                    </button>
                    <button className="bg-neutral-300 border-[2px] border-transparent  hover:bg-neutral-200 text-neutral-900 h-9 px-3 rounded font-semibold text-sm whitespace-nowrap">
                        Novo orçamento
                    </button>
                    <button className=" flex gap-2 items-center hover:bg-zinc-200  h-9 px-3 rounded font-semibold text-sm whitespace-nowrap">
                        <ArrowUpRightIcon size={18} />
                        Consultar ordem de serviço
                    </button>
                </div>
                <div className="flex gap-2 items-center">
                    <button className=" flex gap-2 items-center hover:bg-zinc-200  h-10 px-3 rounded font-semibold text-sm">
                        <LifeBuoy size={20}/>
                    </button>
                    <button className=" flex gap-2 items-center bg-white hover:bg-zinc-200 border border-zinc-200 h-10 px-3 rounded font-semibold text-sm ">
                        Apurar caixa
                    </button>
                    <button className=" flex gap-2 bg-white items-center hover:bg-zinc-200 border border-zinc-200 h-10 px-3 rounded font-semibold text-sm">
                        Fechar caixa
                    </button>
                </div>
            </div> */}
            <div className="flex gap-5 w-full h-full flex-col">
            <div className="border border-zinc-200 w-full h-80 rounded bg-white flex flex-col sm:flex-start gap-5 p-5  h-full ">
                    <div className="flex justify-between bg-red-0 w-full">
                        <div className="flex flex-col gap-2">
                            <h3 className="font-semibold text-lg">
                                Vendas
                            </h3>
                            <p className="text-neutral-600">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
                            </p>
                        </div>
                        {/* <div className="flex gap-2">
                            <EllipsisIcon size={18}/>
                            <Maximize2 size={18}/>
                        </div> */}
                    </div>
                    <div className="flex flex-col gap-3 py-0 h-full w-full bg-red-0">
                        <button 
                            onClick={() => setIsModalOpen(true)}
                            className=" border-[2px]  h-10 px-3 rounded  text-sm  whitespace-nowrap w-full max-w-[400px] flex items-center justify-between 
                            bg-teal-500  border-transparent hover:border-teal-500  text-white font-semibold"
                        >
                            Nova venda
                            <ChevronRight size={17} className="-mr-2"/>
                        </button>
                        {/* <button className="p-4 min-w-[100px] w-full  rounded flex flex-col gap-2 bg-neutral-0 aspect-square m-0 max-w-[120px] max-h-[120px] border flex flex-col items-stretch content-between text-xs font-semibold">
                            <div className="h-3/6 flex items-start bg-red-0">
                                <PenTool size={22} strokeWidth={1}  stroke="#006421"/>
                            </div>
                            <span className="flex items-end bg-red-0 h-full">
                                Meus Serviços
                            </span>
                        </button> */}
                        <button className="border-[2px]  h-10 px-3 rounded font-semibold text-sm  whitespace-nowrap w-full max-w-[400px] flex items-center justify-between 
                        bg-teal-100  border-transparent   text-teal-700 ">
                            Novo orçamento
                            <ChevronRight size={17} className="-mr-2"/>
                        </button>
                        <Link 
                            href={""}
                            className="h-8 border-b-[1px] border-neutral-700 text-sm flex items-center justify-between mt-5 -mb-0 text-neutral-700"
                        >
                            Consultar ordem de serviço
                            <ArrowUpRightIcon size={18} strokeWidth={1}/>
                        </Link>
                    </div>
                </div>
                <div className="border border-zinc-200 w-full h-80 rounded bg-white flex flex-col sm:flex-start gap-5 p-5 h-full ">
                    <div className="flex justify-between bg-red-0 w-full">
                        <div className="">
                            <h3 className="font-semibold text-lg">
                                Caixa
                            </h3>
                            <p className="text-sm">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
                            </p>
                        </div>
                        {/* <div className="flex gap-2">
                            <EllipsisIcon size={18}/>
                            <Maximize2 size={18}/>
                        </div> */}
                    </div>
                    <div className="flex flex-col gap-3 py-6 h-full w-full bg-red-0">
                        <button className="bg-neutral-0  hover:bg-blue-0 text-neutral-900 border-neutral-900 border-[1px]  h-10 px-3 rounded font- text-sm  whitespace-nowrap w-full max-w-[400px] flex items-center justify-between">
                            Pagar
                            <ChevronRight size={17} 
                                className="-mr-2" 
                                strokeWidth={1}
                            />
                        </button>
                        {/* <button className="p-4 min-w-[100px] w-full  rounded flex flex-col gap-2 bg-neutral-0 aspect-square m-0 max-w-[120px] max-h-[120px] border flex flex-col items-stretch content-between text-xs font-semibold">
                            <div className="h-3/6 flex items-start bg-red-0">
                                <PenTool size={22} strokeWidth={1}  stroke="#006421"/>
                            </div>
                            <span className="flex items-end bg-red-0 h-full">
                                Meus Serviços
                            </span>
                        </button> */}
                        <button className="bg-neutral-0  hover:bg-blue-0 text-neutral-900 border-neutral-900 border-[1px]  h-10 px-3 rounded font- text-sm  whitespace-nowrap w-full max-w-[400px] flex items-center justify-between">
                            Receber
                            <ChevronRight size={17} 
                                className="-mr-2" 
                                strokeWidth={1}
                            />
                        </button>
                        <button className="bg-neutral-0  hover:bg-blue-0 text-neutral-900 border-neutral-900 border-[1px]  h-10 px-3 rounded font- text-sm  whitespace-nowrap w-full max-w-[400px] flex items-center justify-between">
                            Estornar
                            <ChevronRight size={17} 
                                className="-mr-2" 
                                strokeWidth={1}
                            />
                        </button>

                        <Link 
                            href={""}
                            className="h-8 border-b-[2px] border-neutral-700 text-sm flex items-center justify-between"
                        >
                            Ver histórico de transação
                            <ArrowUpRightIcon size={18} />
                        </Link>
                    </div>
                </div>
                <div className="border border-zinc-200 w-full h-min rounded bg-white flex flex-col p-5 ">
                    <div className="flex justify-between">
                        <div className="">
                            <h3 className="font-semibold ">
                                Resumo do dia
                            </h3>
                            <span className="text-xs text-zinc-400 mt-[-12px]">
                                Hoje
                            </span>
                        </div>
                        <div className="flex gap-2">
                            <EllipsisIcon size={18}/>
                            <Maximize2 size={18}/>
                        </div>
                    </div>
                    <div className="py-5 flex flex-col gap-3">
                        <div className="flex flex items-center gap-2  w-full justify-between">
                            <div className="flex items-center gap-2 ">
                                <div className="h-5 w-5 rounded-full bg-neutral-200 flex items-center justify-center">
                                    <Circle 
                                        className="opacity-100" 
                                        size={10} 
                                        strokeWidth={0}
                                        fill="#c0c0c0"
                                    />
                                </div>
                                <div className="text-sm">
                                    Vendas
                                </div>
                            </div>
                            <span className="text-  font-bold flex items-center justify-center">
                                7
                            </span>
                        </div>
                        <span className=" border-[1px]"></span>
                        <div className="flex flex items-center gap-2 hover:bg-zinc-50 p-2">
                            <div className="h-9 w-9 rounded-full bg-green-200 flex items-center justify-center">
                                <ShoppingBag 
                                    className="" 
                                    size={18} 
                                    color="#1a972b"
                                />
                            </div>
                            <span className="text-sm">
                                Pagamentos
                            </span>
                        </div>
                        <span className="line border"></span>
                        <div className="flex flex items-center gap-2 p-2">
                            <div className="h-9 w-9 rounded-full bg-green-200 flex items-center justify-center">
                                <ShoppingBag 
                                    size={18} 
                                    color="#1a972b"
                                />
                            </div>
                            <span className="text-sm">
                                Recebimentos
                            </span>
                        </div>
                        <span className=" border-[1px]"></span>
                        <div className="flex flex items-center gap-2 p-2">
                            <div className="h-9 w-9 rounded-full bg-green-200 flex items-center justify-center">
                                <ShoppingBag 
                                    size={18} 
                                    color="#1a972b"
                                />
                            </div>
                            <span className="text-sm">
                                Estornos
                            </span>
                        </div>
                    </div>
                    <Link 
                        href="/" 
                        className="text-xs text-blue-600 hover:text-blue-500 underline"
                    >
                        Mais informações
                    </Link>
                </div>
                {/* <div 
                    className="border border-zinc-200 w-full h-min rounded bg-white flex flex-col p-5 "
                >
                    <div className="flex justify-between">
                        <div className="">
                            <h3 className="font-semibold ">
                                Meio de pagamento
                            </h3>
                        </div>
                        <div className="flex gap-2">
                            <EllipsisIcon size={18}/>
                            <div className="h-8 w-8 bg-white hover:bg-zinc-50 flex items-center justify-center rounded-full">
                                <Maximize2  size={18}/>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col py-3">
                    <div className="text-sm flex justify-between h-16 items-center ">
                        <div className="flex gap-2 items-center">
                            <div className="h-full w-10 flex  items-center">
                                <img 
                                    className="h-7 w-7" 
                                    src="https://images.vexels.com/media/users/3/143188/isolated/preview/5f44f3160a09b51b4fa4634ecdff62dd-money-icon.png"
                                />
                            </div>
                            <span className="font-semibold">
                                Dinheiro
                            </span>
                        </div>
                        <span className="font-semibold text-xs">
                            R$ 11,00
                        </span>
                    </div>
                    <div className="h-[1px] border-b border-zinc-200"></div>
                    <div className="text-sm flex justify-between h-16 items-center ">
                        <div className="flex gap-2 items-center">
                            <div className="h-full w-10 flex  items-center">
                                <img 
                                    className="h-7 w-7" 
                                    src="https://cdn-icons-png.flaticon.com/512/6963/6963703.png"
                                />
                            </div>
                            <span className="font-semibold">
                                Cartão
                            </span>
                        </div>
                        <span className="font-semibold text-xs">
                            R$ 11,00
                        </span>
                    </div>
                    <div className="h-[1px] border-b border-zinc-200"></div>
                    <div className="text-sm flex justify-between h-16 items-center ">
                        <div className="flex gap-2 items-center">
                            <div className="h-full w-10 flex  items-center">
                                <img 
                                    className="h-7 w-7" 
                                    src="https://cdn-icons-png.flaticon.com/512/438/438062.png"
                                />
                            </div>
                            <span className="font-semibold">
                                Maquininha
                            </span>
                        </div>
                        <span className="font-semibold text-xs">
                            R$ 11,00
                        </span>
                    </div>
                    <div className="h-[1px] border-b border-zinc-200"></div>
                    <div className="text-sm flex justify-between h-16 items-center ">
                        <div className="flex gap-2 items-center">
                            <div className="h-full w-10 flex  items-center">
                                <img 
                                    className="h- w-5" 
                                    src="https://user-images.githubusercontent.com/741969/99538099-3b7a5d00-298b-11eb-9f4f-c3d0cd4a5280.png"
                                />
                            </div>
                            <span className="font-semibold">
                                Pix
                            </span>
                        </div>
                        <span className="font-semibold text-xs">
                            R$ 11,00
                        </span>
                    </div>
                    <div className="h-[1px] border-b border-zinc-200"></div>
                    <div className="text-sm flex justify-between h-16 items-center ">
                        <div className="flex gap-2 items-center">
                            <div className="h-full w-10 flex  items-center">
                                <img 
                                    className="h-7 w-7" 
                                    src="https://data4you.com.br/wp-content/uploads/2018/08/suporte_transferencia.png"
                                />
                            </div>
                            <span className="font-semibold">
                                Transfêrencia bancária (doc)
                            </span>
                        </div>
                        <span className="font-semibold text-xs whitespace-nowrap">
                            R$ 11,00
                        </span>
                    </div>
                    <div className="h-[1px] border-b border-zinc-200"></div>
                    <div className="text-sm flex justify-between h-16 items-center ">
                        <div className="flex gap-2 items-center">
                            <div className="h-full w-10 flex  items-center">
                                <img 
                                    className="h-7 w-7" 
                                    src="https://play-lh.googleusercontent.com/JuI8R5127R3sNDQHAxUG4wQ7jNBjD1-g9LDLZQQlwOPVnizquNKqZ7i_oD3WS-bQCf8"
                                />
                            </div>
                            <span className="font-semibold">
                                Boleto
                            </span>
                        </div>
                        <span className="font-semibold text-xs whitespace-nowrap">
                            R$ 11,00
                        </span>
                    </div>
                    </div>
                </div> */}
            </div>
            Apurar caixa
        </main>
    )
}