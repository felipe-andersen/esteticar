import { ChevronLeft, ChevronRight, Plus, Search, UserRound } from "lucide-react";

// Informações que vou salvar no banco. Venda 

// Amarrar tudo. conferir a tipagem


interface Sale {
    name: string
    phone: string
    email?: string
    // address: string
    // city: string
    // state: string
    // zip: string
    cpf?: string
    servicesList?: ServiceItemProtocol[]
    productsList?: ProductsProtocol
    id: string
    dateTime: Date
    workerUser: string
    duration: string
    startDateTime: {
        date: string
        time: string
    }
    endDateTime: {
        date: Date
        time: string
    }
    saleDetails?: string
    payment: object
    vehicle: {
        name: string
        model: string
        brand: string
    }
    wasTaxed: boolean
}

interface payment {
    bankSlip: string
    card: string
    currency: string
}

interface ServiceItemProtocol {
    item: string
    details: string
    price: string
    discount: {
        value: string
        type: discountTypeProtocol
    }
}

interface discountTypeProtocol {
    percent: number
    code: string
    currency: string
}

interface ProductsProtocol {

}



const hours = Array.from({ length: 24 }, (_, index) => index + 1);

const minutes = Array.from({ length: 60 }, (_, index) => index + 1);

export function NewSale() {
    return (
        <section className='w-[700px] h-full px-6 py-6 bg-white  overflow-scroll scroll border-r border-l border-zinc-200 gyhd '>

            <h2 className=' w-full text-xl font-bold mb-6'>Nova venda</h2>

            <div className="flex items-center justify-between h-16 mb-10">

                <div className="h-12 w-12 rounded-full  flex items-center justify-center text-sm border border-black"><UserRound strokeWidth={1}/></div>

                <div className="h-1 border border-zinc-200 w-24"> </div>

                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-s">2</div>

                <div className="h-1 border border-zinc-200 w-24"> </div>

                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-s">3</div>

                <div className="h-1 border border-zinc-200 w-24"> </div>


                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-sm">4</div>

                <div className="h-1 border border-zinc-200 w-24"> </div>

                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-s">5</div>

                <div className="h-1 border border-zinc-200 w-24"> </div>

                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-s">6</div>

            </div>

            <div className="w-full bg-red-50">

                <div className="">

                </div>

                <h3 className='text-md font-bold mb-5'>Dados do Cliente</h3>

                <div className='flex  gap-3 text-gray-700 mb-4'>

                    <button className='flex items-center gap-2 text-sm bg-zinc-100 h-10 px-3 w-min whitespace-nowrap rounded'><Plus size={18}/> Adicionar cliente</button>

                    <button className='flex items-center gap-2 text-sm bg-zinc-100 h-10 px-3 w-min whitespace-nowrap  rounded'><Search size={18}/>Pesquisar cliente</button>

                </div>

                <div className='gap-2 h-min mb-4'>

                    <span className='mb-2'>

                        <label className='text-sm mb-4 text-gray-700'>Nome do Cliente</label>

                    </span>

                    <br/>

                    <input placeholder="Nome do Cliente" className='w-full mt-2 text-sm h-12 border border-zinc-300 rounded pl-5'></input>

                </div>

                <div className='gap-2 h-min mb-4'>

                    <span className='mb-2'>

                        <label className='text-sm mb-4 text-gray-700'>
                            
                            Telefone

                        </label>

                    </span>

                    <br/>

                    <input placeholder="Nome do Cliente" className=' w-full mt-2 text-sm h-12 border border-zinc-300 rounded pl-5'></input>

                </div>

                <div className='gap-2 h-min mb-4'>

                    <span className='mb-2'>

                        <label className='text-sm mb-4 text-gray-700'>

                            Email

                        </label>

                    </span>

                    <br/>

                    <input placeholder="Nome do Cliente" className='w-full mt-2 text-sm h-12 border border-zinc-300 rounded pl-5'></input>

                </div>

                <button className='text-xs'>ADICIONAR ENDEREÇO</button>

            </div>

            <div className="w-full bg-blue-50">

                <h3 className='text-md font-bold mt-10 mb-5'>Cadastrar serviço</h3>

                <div className="flex flex-col w-full  mb-4">

                    <p className="block text-sm  text-gray-700">Para o veículo</p>

                    <div className="w-full mt-2 text-sm h-12 border border-zinc-300 px-2 rounded">

                        <select className="w-full h-full bg-white outline-none" id="cars">
                            <option className="h-8" value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        
                        </select>

                    </div>

                </div>

                <div className="flex gap-3 mb-4 ">

                    <div className="flex flex-col w-full">

                        <p className="block text-sm  text-gray-700">Marca</p>

                        <input aria-label="" type="text" placeholder="" className='w-full mt-2 text-sm h-12 border border-zinc-300 rounded px-5'></input>

                    </div>

                    <div className="flex flex-col w-full">

                        <p className="block text-sm  text-gray-700">Modelo</p>

                        <input aria-label="" type="text" placeholder="" className='w-full mt-2 text-sm h-12 border border-zinc-300 rounded px-5'></input>

                    </div>

                    <div className="flex flex-col w-full">

                        <p className="block text-sm  text-gray-700">Placa</p>

                        <input aria-label="" type="text" placeholder="" className='w-full mt-2 text-sm h-12 border border-zinc-300 rounded px-5'></input>
                        
                    </div>

                </div>

                 <div className='gap-2 h-min mb-4'>

                    <span className='mb-2'>

                        <label className='text-sm mb-4 text-gray-700'>Item</label>

                    </span>

                    <br/>

                    <input placeholder="" className='w-full mt-2 text-sm h-12 border border-zinc-300 rounded pl-5'></input>

                </div>

                    <div className="mb-4">

                        <span className="text-sm text-zinc-700">Detalhes</span>

                        <textarea className='mt-2 flex gap-3 w-full h-24 border border-zinc-300 rounded'/>

                    </div>

                   
                    
                    <div className="flex flex-col w-full mb-4">

                        <p className="block text-sm  text-gray-700">Valor</p>

                        <input aria-label="Valor" type="text" placeholder="R$" className='w-full mt-2 text-sm h-12 border border-zinc-300 rounded px-5'></input>

                    </div>
''
               

                <div className='flex  gap-3 text-gray-700'>

                    <button className='flex items-center gap-2 text-sm bg-zinc-100 h-10 px-3 w-min whitespace-nowrap rounded'><Plus size={18}/> Adicionar serviço</button>

                    <button className='flex items-center gap-2  text-sm bg-zinc-100 h-10 px-3 w-min whitespace-nowrap  rounded'><Search size={18}/>Pesquisar serviço</button>

                </div>

                <button className='flex items-center gap-2 text-sm bg-zinc-100 h-10 px-3 w-min whitespace-nowrap  rounded mt-10'>Aplicar desconto</button>

                <h4 className='text-xs font-bold  mt-6 mb-5'>Desconto</h4>

                <div className="flex gap-2 mb-4">

                    <button className="h-8 w-min px-3 text-xs rounded-full bg-zinc-500 hover:bg-zinc-400 focus:bg-zinc-700 text-white font-medium">Porcentagem</button>

                    <button className="h-8 w-min px-3 text-xs rounded-full bg-zinc-500 hover:bg-zinc-400 focus:bg-zinc-700 text-white font-medium">Código</button>

                    <button className="h-8 w-min px-3 text-xs rounded-full bg-zinc-500 hover:bg-zinc-400 focus:bg-zinc-700 text-white font-medium">Moeda</button>
                    
                </div>

                <input placeholder="" className='w-full  text-sm h-12 border border-zinc-300 rounded pl-5'></input>

            </div>

            <div className=" w-full bg-red-50">
            
                <h3 className='text-md font-bold  mt-10 mb-5'>Cadastrar produto</h3>

                <div className='flex  gap-3 text-gray-700'>

                    <button className='flex items-center gap-2 text-sm bg-zinc-100 h-10 px-3 w-min whitespace-nowrap rounded'><Plus size={18}/> Adicionar produto</button>

                    <button className='flex items-center gap-2 text-sm bg-zinc-100 h-10 px-3 w-min whitespace-nowrap  rounded'><Search size={18}/>Pesquisar produto</button>

                </div>

            </div>

            <div className="bg-blue-50 w-full">

                <h3 className='text-md font-bold  mt-10 mb-5'>Agendar</h3>

                <div className="flex gap-3">

                    <div className="flex flex-col w-full">

                        <p className="block text-sm  text-gray-700">Data e hora de entrada</p>

                        <div className="flex flex gap-3">

                            <input aria-label="Data" type="date" placeholder="Data" className='w-full mt-2 text-sm h-12 border border-zinc-300 rounded px-5'></input>

                            <input aria-label="Hora" type="time" placeholder="Hora" className='w-full mt-2 text-sm h-12 border border-zinc-300 rounded px-5'></input>  

                        </div>

                    </div>

                    <div className="flex flex-col w-full">
                        
                        <p className="block text-sm  text-gray-700">Duração do serviço</p>

                        <div className="flex flex gap-3">

                            <div className="mt-2 bg-white px-2 border  text-xs border-zinc-300 rounded  w-full flex justify-center gap-2 flex-col"
                            >
                                 dia

                                <input aria-label="Dia" type="text" placeholder="" className='w-full  text-sm h-full  bg-red- outline-none '/>

                            </div>

                            <select className="w-full bg-red-500 h-12 mt-2   rounded px-5 border border-zinc-300" id="cars">
                                {
                                    hours.map((hour) => <option>{hour}</option>)
                                }
                            </select>


                            <select className="w-full bg-red-500 h-12 mt-2  rounded px-5 border border-zinc-300" id="cars">
                                {
                                    minutes.map((minute) => <option>{minute}</option>)
                                }
                            </select> 

                        </div>

                    </div>

                </div>

            </div>

            <div className="w-full bg-red-50">

                <h3 className='text-md font-bold  mt-10 mb-5'>Informações gerais</h3>

                <textarea className='flex gap-3 w-full h-24 border border-zinc-300 rounded'>

                </textarea>

            </div>

            <div className="w-full bg-blue-50">

                <h3 className='text-md font-bold  mt-10 mb-5 '>Pagamento</h3>

                <h4 className='text-xs font-bold  mt-10 mb-5 '>Subtotal</h4>

                <p className="flex flex-col gap-2 text-zinc-700 mb-6">

                    <span className="font-bold text-lg">R$ 2,596, 00</span> 

                    <span className="text-sm text-zinc-700">(7 serviços e 5 produtos)</span>

                </p>

                <button className='flex items-center gap-2 text-sm bg-zinc-100 h-10 px-3 w-min whitespace-nowrap  rounded'>Aplicar desconto</button>

                <h4 className='text-xs font-bold  mt-10 mb-5 '>Desconto</h4>

                <div className="flex gap-2 mb-4">

                    <button className="h-8 w-min px-3 text-xs rounded-full bg-zinc-500 hover:bg-zinc-400 focus:bg-zinc-700 text-white font-medium">Porcentagem</button>

                    <button className="h-8 w-min px-3 text-xs rounded-full bg-zinc-500 hover:bg-zinc-400 focus:bg-zinc-700 text-white font-medium">Código</button>

                    <button className="h-8 w-min px-3 text-xs rounded-full bg-zinc-500 hover:bg-zinc-400 focus:bg-zinc-700 text-white font-medium">Moeda</button>
                    
                </div>

                <input placeholder="" className='w-full  text-sm h-12 border border-zinc-300 rounded pl-5 mb-6'></input>

                <p className="flex flex-col  gap-2 text-zinc-700 mb-6">

                    <span className="font-bold text-sm">R$ 2,596, 00</span> 

                </p>

                {/* Vai ser input tipo checkbox */}

                <h4 className='text-xs font-bold  mt-10 mb-5 '>Pagamento</h4>

                <div className="flex border border-zinc-500 w-min rounded mb-3 text-gray-700">

                    <button className="h-9 text-sm w-min px-3 bg-white  hover:bg-zinc-100 focus:bg-zinc-800 focus:text-white">Adiantado</button>

                    <button  className="h-9 hover:bg-zinc-100 focus:bg-zinc-800 focus:text-white text-sm w-min px-3 bg-white">Programado</button>

                    <button  className="h-9 hover:bg-zinc-100 focus:bg-zinc-800 focus:text-white text-sm w-min px-3 bg-white whitespace-nowrap">Pós serviço</button>

                </div>

                <div className="h-24 w-full border border-zinc-800 rounded"></div>

                <div className='gap-2 h-min mt-10 mb-5'>

                    <span className='mb-2'>

                        <label className='text-sm mb-4 text-gray-700'>Colaborador/Funcionário</label>

                    </span>

                    <br/>

                    <input placeholder="Nome do Cliente" className='w-full mt-2 text-sm h-12 border border-zinc-300 rounded pl-5'></input>

                </div>

                <div className="flex flex-col gap-3 p-3 my-6 text-gray-700 text-sm">

                    <div className="flex gap-3">

                        <div className=""><input type="checkbox"/></div>

                        Enviar Ordem de Serviço

                    </div>

                    <div className="flex gap-3">

                        <div className=""><input type="checkbox"/></div>

                        Enviar Comprovante de Pagamento

                    </div>

                    <div className="flex gap-3">

                        <div className=""><input type="checkbox"/></div>

                        Enviar Nota Fiscal

                    </div>

                </div>

                <div className="flex gap-3 justify-end my-4 ">

                    <div className="w-full flex justify-between text-xs">

                        <button className="border border-zinc-300   rounded font-semibold whitespace-nowrap h-10 w-min px-3 flex gap-2 items-center"><ChevronLeft size={18}/>Anterior</button>

                        <button className="border border-zinc-300     rounded font-semibold whitespace-nowrap h-10 w-min px-3 flex gap-2 items-center">Próximo<ChevronRight size={18}/></button>

                    </div>

                </div>
                
            </div>

            <div className="flex gap-3 flex-col  mt-10  ">

                <button className="bg-green-400 hover:bg-green-300 text-xs text-white rounded font-semibold whitespace-nowrap h-10 w-full px-3">Gerar Venda</button>

                <button className="border border-green-400   text-xs text-green-400 rounded font-semibold whitespace-nowrap h-10 w-full px-3">Cancelar</button>

            </div>

        </section>
    )
}

// fidelidade
// permições para dar descontos
// venda a faturar