import { Crown } from "lucide-react";
import Link from "next/link";
import RegisterWorker from "../organisms/forms/registerWorker";

export default function Components() {

    

    return (

        <div className="flex flex-col w-full h-full">

            <main className=' w-full h-full bg-[#f6f8fa] p-20 scroll flex flex-col overflow-scroll gap-3'>

                <button  type="submit" className='h-10 w-min px-3 whitespace-nowrap  text-white text-sm font-semibold rounded bg-teal-600 hover:bg-teal-500 flex gap-2 items-center justify-center  '>

                    Cadastrar 

                </button> 

                <button className='h-10 w-min px-3 whitespace-nowrap  text-white text-sm font-semibold rounded bg-teal-600 hover:bg-teal-500 flex gap-2 items-center justify-center border-2 border-teal-600 hover:border-teal-600'>

                default button 

                </button>

                <button className='text-black h-10 w-min px-3 whitespace-nowrap text-sm font-semibold rounded border border-neutral-700 hover:text-neutral-500 hover:border-neutral-400 text-neutral-700 flex gap-2 items-center justify-center'>

                secondary button

                </button>

                <button className='text-black h-10 w-min px-3 whitespace-nowrap text-sm font-semibold bg-zinc-200 rounded   hover:bg-zinc-100 text-neutral-800 hover:text-neutral-700 flex gap-2  items-center justify-center'>

                tertiary button

                </button>

                <div className="text-xs bg-violet-700 hover:bg-violet-600 rounded flex w-min px-2 py-1 text-white justify-center items-center font-semibold gap-2"> <Crown size={14}/></div>

                <div className="text-xs bg-violet-700 hover:bg-violet-600 rounded flex w-min px-2 py-1 text-white justify-center items-center font- gap-2">tag</div>

                <div className="text-xs bg-violet-700 hover:bg-violet-600 rounded flex whitespace-nowrap w-min px-2 py-1 text-white justify-center items-center font- gap-2 rounded-full ">tag </div>

                <Link href="/" className="text-xs text-neutral-600 hover:text-neutral-500 underline">Mais informações</Link>

                
                <RegisterWorker/>


                <img src="https://sistemasca.blob.core.windows.net/arquivos/ajuda/240-5367.jpg"></img>


                <div className="rounded-lg bg-white w-80 py-6 flex flex-col ">

                    <div className="px-6  flex justify-between items-center  h-10 mb-2">

                        <h2 className="text-lg font-bold">Notificação</h2>

                    </div>

                    <div className="h-8 flex items-center px-6 gap-6 text-xs border-b border-neutral-200 w-[90%] self-center mb-5 font-medium text-neutral-500">
                   
                        <button>Serviços</button> 

                        <button>Pagamentos</button> 

                    </div>
                    
                    <span className="font-semibold text-sm px-6">Hoje</span>

                    <div className="flex px-6  h-16  hover:bg-neutral-100 text-xs">

                        <div className="flex  w-full  justify-center ">
                            
                            <div className="w-[70%] flex items-center gap-2">

                                <div className="h-8 w-8 rounded-full bg-blue-200"></div>

                                <div className=" flex flex-col justify-center">
                                    <span className="font-semibold">Faturas a vencer</span>
                                    <span className="text-neutral-400"> Total de R$ 5.000</span>
                                </div>
                                
                            </div>
                            <div className="flex  w-[30%] flex-col  justify-center text-neutral-400 text-xs">
                             6 PM
                            </div>

                        </div>
                        
                    </div>

                    <div className="flex px-6  h-16  hover:bg-neutral-100 text-xs">

                        <div className="flex  w-full  justify-center ">
                            
                            <div className="w-[70%] flex items-center gap-2">

                                <div className="h-8 w-8 rounded-full bg-blue-200"></div>

                                <div className=" flex flex-col justify-center">
                                    <span className="font-semibold">Faturas a vencer</span>
                                    <span className="text-neutral-400"> Total de R$ 5.000</span>
                                </div>
                                
                            </div>
                            <div className="flex  w-[30%] flex-col  justify-center text-neutral-400 text-xs">
                             6 PM
                            </div>

                        </div>
                        
                    </div>

                    <div className="flex px-6  h-16  hover:bg-neutral-100 text-xs">

                        <div className="flex  w-full  justify-center ">
                            
                            <div className="w-[70%] flex items-center gap-2">

                                <div className="h-8 w-8 rounded-full bg-blue-200"></div>

                                <div className=" flex flex-col justify-center">
                                    <span className="font-semibold">Faturas a vencer</span>
                                    <span className="text-neutral-400"> Total de R$ 5.000</span>
                                </div>
                                
                            </div>
                            <div className="flex  w-[30%] flex-col  justify-center text-neutral-400 text-xs">
                             6 PM
                            </div>

                        </div>
                        
                    </div>

                    <div className="flex px-6  h-16  hover:bg-neutral-100 text-xs">

                        <div className="flex  w-full  justify-center ">
                            
                            <div className="w-[70%] flex items-center gap-2">

                                <div className="h-8 w-8 rounded-full bg-blue-200"></div>

                                <div className=" flex flex-col justify-center">
                                    <span className="font-semibold">Faturas a vencer</span>
                                    <span className="text-neutral-400"> Total de R$ 5.000</span>
                                </div>
                                
                            </div>
                            <div className="flex  w-[30%] flex-col  justify-center text-neutral-400 text-xs">
                             6 PM
                            </div>

                        </div>
                        
                    </div>

                    <div className="flex px-6  h-16  hover:bg-neutral-100 text-xs">

                        <div className="flex  w-full  justify-center ">
                            
                            <div className="w-[70%] flex items-center gap-2">

                                <div className="h-8 w-8 rounded-full bg-blue-200"></div>

                                <div className=" flex flex-col justify-center">
                                    <span className="font-semibold">Faturas a vencer</span>
                                    <span className="text-neutral-400"> Total de R$ 5.000</span>
                                </div>
                                
                            </div>
                            <div className="flex  w-[30%] flex-col  justify-center text-neutral-400 text-xs">
                             6 PM
                            </div>

                        </div>
                        
                    </div>

                    <span className="font-semibold text-sm px-6">Ontem</span>

                    <div className="flex px-6  h-16  hover:bg-neutral-100 text-xs">

                        <div className="flex  w-full  justify-center ">
                            
                            <div className="w-[70%] flex items-center gap-2">

                                <div className="h-8 w-8 rounded-full bg-blue-200"></div>

                                <div className=" flex flex-col justify-center">
                                    <span className="font-semibold">Faturas a vencer</span>
                                    <span className="text-neutral-400"> Total de R$ 5.000</span>
                                </div>
                                
                            </div>
                            <div className="flex  w-[30%] flex-col  justify-center text-neutral-400 text-xs">
                             6 PM
                            </div>

                        </div>
                        
                    </div>
                    
                </div>

                <div>

                    Expórtar para
                </div>


                <div>

                    Ações

                    Editar
                    Excuir
                </div>

            </main>

        </div>
    );
}