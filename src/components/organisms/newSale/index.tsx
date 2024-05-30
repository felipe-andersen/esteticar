import { Plus, Search } from "lucide-react";


interface Sale {
    name: string
    phone: string
    email: string
    // address: string
    // city: string
    // state: string
    // zip: string
    services: ServicesProtocol
    products: ProductsProtocol
    worker: string
    startDataTime: {
        date: string
        time: string
    }
    endDataTime: {
        date: Date
        time: string
    }
    saleDetails: string
    payment: object
}

interface ServicesProtocol {

}

interface ProductsProtocol {

}



export function NewSale() {
    return (
        <section className='w-[700px] h-full px-6 py-6 bg-white  overflow-scroll scroll border-r border-l border-zinc-200 gyhd '>

            <h2 className=' w-full text-xl font-bold mb-6'>Nova venda</h2>

            <h3 className='text-md font-bold mb-5'>Dados do Cliente</h3>

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

            <button className='text-xs'>ADICIONAR ENDEREÇO DE ENTREGA</button>

            <h3 className='text-md font-bold mt-10 mb-5'>Serviço</h3>

            <div className='flex  gap-3 text-gray-700'>

                <button className='flex items-center gap-2 text-sm bg-zinc-100 h-10 px-3 w-min whitespace-nowrap rounded'><Plus size={18}/> Adicionar serviço</button>

                <button className='flex items-center gap-2  text-sm bg-zinc-100 h-10 px-3 w-min whitespace-nowrap  rounded'><Search size={18}/>Pesquisar serviço</button>

            </div>

        
            
            <h3 className='text-md font-bold  mt-10 mb-5'> Produto</h3>

            <div className='flex  gap-3 text-gray-700'>

                <button className='flex items-center gap-2 text-sm bg-zinc-100 h-10 px-3 w-min whitespace-nowrap rounded'><Plus size={18}/> Adicionar produto</button>

                <button className='flex items-center gap-2 text-sm bg-zinc-100 h-10 px-3 w-min whitespace-nowrap  rounded'><Search size={18}/>Pesquisar produto</button>

            </div>

            <h3 className='text-md font-bold  mt-10 mb-5'>Data e hora</h3>

            <div className="flex gap-3">

                <div className="flex flex-col w-full">

                    <p className="block text-sm  text-gray-700">Data e hora de entrada</p>

                    <div className="flex flex gap-3">

                        <input aria-label="Data" type="date" placeholder="Data" className='w-full mt-2 text-sm h-12 border border-zinc-300 rounded px-5'></input>

                        <input aria-label="Hora" type="time" placeholder="Hora" className='w-full mt-2 text-sm h-12 border border-zinc-300 rounded px-5'></input>  

                    </div>

                    

                </div>

                <div className="flex flex-col w-full">
                    
                    <p className="block text-sm  text-gray-700">Data e hora de saída</p>

                    <div className="flex flex gap-3">

                        <input aria-label="Data" type="date" placeholder="Data" className='w-full mt-2 text-sm h-12 border border-zinc-300 rounded px-5'></input>

                        <input aria-label="Hora" type="time" placeholder="Hora" className='w-full mt-2 text-sm h-12 border border-zinc-300 rounded px-5'></input> 

                    </div>

                </div>

                

            </div>

            <h3 className='text-md font-bold  mt-10 mb-5'>Informações Gerais</h3>
            <textarea className='flex gap-3 w-full h-24 border border-zinc-300 rounded'>

            </textarea>


            <h3 className='text-md font-bold  mt-10 mb-5 '>Subtotal</h3>


            <p className="flex flex-col gap-2 text-zinc-700">

                <span className="font-bold text-lg">R$ 2,596, 00</span> 

                <span className="text-sm text-zinc-700">(7 serviços e 5 produtos)</span>

             </p>

            <h3 className='text-md font-bold  mt-6 mb-5'>Aplicar desconto</h3>

            <div className="flex gap-2 mb-4">

                <button className="h-8 w-min px-3 text-xs rounded-full bg-zinc-500 hover:bg-zinc-400 focus:bg-zinc-700 text-white font-medium">Porcentagem</button>

                <button className="h-8 w-min px-3 text-xs rounded-full bg-zinc-500 hover:bg-zinc-400 focus:bg-zinc-700 text-white font-medium">Código</button>

                <button className="h-8 w-min px-3 text-xs rounded-full bg-zinc-500 hover:bg-zinc-400 focus:bg-zinc-700 text-white font-medium">Moeda</button>
                
            </div>

            <input placeholder="" className='w-full  text-sm h-12 border border-zinc-300 rounded pl-5'></input>




           
            <h3 className='text-md font-bold  mt-10 mb-5 '>Pagamento</h3>

            {/* Vai ser input tipo checkbox */}

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

                <button className="bg-blue-400 hover:bg-blue-300 text-sm text-white rounded font-semibold whitespace-nowrap h-10 w-min px-3">Gerar Venda</button>

                <button className="bg-zinc-100 hover:bg-zinc-50 text-sm text-red-500 rounded font-semibold whitespace-nowrap h-10 w-min px-3">Cancelar</button>

            </div>

           

        </section>
    )
}