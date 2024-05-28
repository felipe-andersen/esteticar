import { EllipsisIcon, HelpCircle, LifeBuoy, Maximize2, Search, ShoppingBag } from "lucide-react";
import Link from "next/link";

export function Main() {

    return (

        <main className="w-full h-full mt-16 p-6 bg-[#f6f8fa]  fixed flex flex-col gap-5 ">

            <div className="h-16 w-full flex items-center justify-between gap-5">

                <div className="flex items-center gap-2">

                    <button className="bg-teal-500 border-[2px] border-transparent hover:border-teal-500 hover:bg-teal-400 text-white h-10 px-3 rounded font-semibold text-sm">Nova venda</button>

                    <button className="bg-yellow-500 border-[2px] border-transparent hover:border-yellow-500 hover:bg-yellow-400 text-white h-10 px-3 rounded font-semibold text-sm">Novo orçamento</button>

                    <button className=" flex gap-2 items-center hover:bg-zinc-200  h-10 px-3 rounded font-semibold text-sm"><Search size={18}/>Consultar ordem de serviço</button>

                </div>

                <div className="flex gap-2 items-center">

                    <button className=" flex gap-2 items-center hover:bg-zinc-200  h-10 px-3 rounded font-semibold text-sm"><LifeBuoy size={20}/></button>

                    <button className=" flex gap-2 items-center bg-white hover:bg-zinc-200 border border-zinc-200 h-10 px-3 rounded font-semibold text-sm ">Apurar caixa</button>

                    <button className=" flex gap-2 bg-white items-center hover:bg-zinc-200 border border-zinc-200 h-10 px-3 rounded font-semibold text-sm">Fechar caixa</button>

                </div>

            </div>

            <div className="flex gap-5 w-full h-full">

                <div className="border border-zinc-200 w-80 h-80 rounded bg-white flex flex-col p-5 ">

                    <div className="flex justify-between">

                        <div className="">

                            <h3 className="font-semibold ">Opções</h3>

                        </div>
                        
                        <div className="flex gap-2">

                            <EllipsisIcon size={18}/>
                            
                            <Maximize2 size={18}/>

                        </div>

                    </div>

                    <div className="flex flex-col gap-3 py-6 h-full">

                        <button className="bg-neutral-700  hover:bg-blue-400 text-white h-9 px-3 rounded font-semibold text-sm w-min whitespace-nowrap">Efetuar pagamentos</button>

                        <button className="bg-neutral-700  hover:bg-blue-400 text-white h-9 px-3 rounded font-semibold text-sm w-min whitespace-nowrap">Estornar compra</button>

                    </div>

                    
                    
                </div>

                <div className="border border-zinc-200 w-80 h-min rounded bg-white flex flex-col p-5 ">

                    <div className="flex justify-between">

                        <div className="">

                            <h3 className="font-semibold ">Resumo do caixa</h3>

                            <span className="text-xs text-zinc-400 mt-[-12px]">Hoje </span>

                        </div>
                        
                        <div className="flex gap-2">

                            <EllipsisIcon size={18}/>
                            
                            <Maximize2 size={18}/>

                        </div>

                    </div>

                    <div className="py-5 flex flex-col gap-3">

                        <div className="flex flex items-center gap-2 p-2">

                            <div className="h-9 w-9 rounded-full bg-green-400 flex items-center justify-center">

                                <ShoppingBag className="opacity-60" size={18} color="#1a972b"/>

                            </div>


                            <span className="text-sm">Compras</span>

                            <span className="text-xs bg-red-500 text-white h-5 w-5 rounded-full flex items-center justify-center">7</span>

                        </div>

                        <div className="flex flex items-center gap-2 hover:bg-zinc-50 p-2">

                            <div className="h-9 w-9 rounded-full bg-red-400 flex items-center justify-center">

                                <ShoppingBag className="" size={18} color="#ce4747"/>

                            </div>

                            <span className="text-sm">Pagamentos</span>

                        </div>

                        <div className="flex flex items-center gap-2 p-2">

                            <div className="h-9 w-9 rounded-full bg-yellow-400 flex items-center justify-center">

                                <ShoppingBag size={18} color="#b8a500"/>

                            </div>


                            <span className="text-sm">Orçamentos</span>

                        </div>

                        <div className="flex flex items-center gap-2 p-2">

                            <div className="h-9 w-9 rounded-full bg-green-400 flex items-center justify-center">

                                <ShoppingBag size={18} color="#52ff7a"/>

                            </div>


                            <span className="text-sm">Estornos</span>

                        </div>

                    </div>

                    <Link href="/" className="text-xs text-blue-600 hover:text-blue-500 underline">Mais informações</Link>

                </div>

                <div className="border border-zinc-200 w-80 h-80 rounded bg-white flex flex-col p-5 ">

                    <div className="flex justify-between">

                        <div className="">

                            <h3 className="font-semibold ">Histórico</h3>

                            <span>Entrada e saída</span>

                        </div>

                        <div className="flex gap-2">

                            <EllipsisIcon size={18}/>
                            
                            <Maximize2 size={18}/>

                        </div>

                    </div>

                    <Link href="/" className="text-xs text-blue-600 hover:text-blue-500">Ver mais</Link>

                </div>

                <div className="border border-zinc-200 w-80 h-min rounded bg-white flex flex-col p-5 ">

                    <div className="flex justify-between">

                        <div className="">

                            <h3 className="font-semibold ">Meio de pagamento</h3>

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

                            <div className="h-full w-10 flex  items-center"><img className="h-7 w-7" src="https://images.vexels.com/media/users/3/143188/isolated/preview/5f44f3160a09b51b4fa4634ecdff62dd-money-icon.png"/></div>

                            <span className="font-semibold">Dinheiro</span>

                        </div>

                        <span className="font-semibold text-xs">R$ 11,00</span>

                    </div>

                    <div className="h-[1px] border-b border-zinc-200"></div>

                    <div className="text-sm flex justify-between h-16 items-center ">

                        <div className="flex gap-2 items-center">

                            <div className="h-full w-10 flex  items-center"><img className="h-7 w-7" src="https://cdn-icons-png.flaticon.com/512/6963/6963703.png"/></div>

                            <span className="font-semibold">Cartão</span>

                        </div>

                        <span className="font-semibold text-xs">R$ 11,00</span>

                    </div>

                    <div className="h-[1px] border-b border-zinc-200"></div>

                    <div className="text-sm flex justify-between h-16 items-center ">

                        <div className="flex gap-2 items-center">

                            <div className="h-full w-10 flex  items-center"><img className="h-7 w-7" src="https://cdn-icons-png.flaticon.com/512/438/438062.png"/></div>

                            <span className="font-semibold">Maquininha </span>

                        </div>

                        <span className="font-semibold text-xs">R$ 11,00</span>

                    </div>

                    <div className="h-[1px] border-b border-zinc-200"></div>

                    <div className="text-sm flex justify-between h-16 items-center ">

                        <div className="flex gap-2 items-center">

                            <div className="h-full w-10 flex  items-center"><img className="h- w-5" src="https://user-images.githubusercontent.com/741969/99538099-3b7a5d00-298b-11eb-9f4f-c3d0cd4a5280.png"/></div>

                            <span className="font-semibold">Pix</span>

                        </div>

                        <span className="font-semibold text-xs">R$ 11,00</span>

                    </div>

                    <div className="h-[1px] border-b border-zinc-200"></div>

                    <div className="text-sm flex justify-between h-16 items-center ">

                        <div className="flex gap-2 items-center">

                            <div className="h-full w-10 flex  items-center"><img className="h-7 w-7" src="https://data4you.com.br/wp-content/uploads/2018/08/suporte_transferencia.png"/></div>

                            <span className="font-semibold">Transfêrencia bancária (doc)</span>

                        </div>

                        <span className="font-semibold text-xs whitespace-nowrap">R$ 11,00</span>

                    </div>

                    <div className="h-[1px] border-b border-zinc-200"></div>

                    <div className="text-sm flex justify-between h-16 items-center ">

                        <div className="flex gap-2 items-center">

                            <div className="h-full w-10 flex  items-center"><img className="h-7 w-7" src="https://play-lh.googleusercontent.com/JuI8R5127R3sNDQHAxUG4wQ7jNBjD1-g9LDLZQQlwOPVnizquNKqZ7i_oD3WS-bQCf8"/></div>

                            <span className="font-semibold">Boleto</span>

                        </div>

                        <span className="font-semibold text-xs whitespace-nowrap">R$ 11,00</span>

                    </div>

                    </div>
                
                </div>

            </div>

            Apurar caixa

        </main>

    )
}