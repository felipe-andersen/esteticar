'use client'
import { Check, TableCellsSplit } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"



export function Main() {
    const router = useRouter()
    return (
        <div className=" bg-neutral-100">
            <main className=' h-full w-full mt-16 p-6 gap-3 flex flex-col'>
                <div className="flex flex-col  p-6 text-center items-center gap-3">
                    <h3 className="text-2xl">
                        Escolha um plano completo para seu negócio
                    </h3>
                    <p>
                        Os clientes do Standard veem um ROI de até 24x.* Comece a escalar mais rápido com automações avançadas e otimização orientada por dados.
                    </p>
                </div>

                <div className="flex gap-6 justify-center">
                    <Plan planName="Basic"/>
                    <Plan planName="Standart"/>
                    <Plan planName="Premiun"/>
                </div>
                <div className="flex flex-col gap-3 my-7  w-full items-center">
                    <Link 
                        href={''}
                        className="max-w-[700px] text-center underline text-green-600 font-semibold text-sm"
                    >
                        Termos de pagamento
                    </Link>
                    <p  className="max-w-[1000px] w-full">
                        Why do we recommend Standard?
                    </p>
                    <p  className="max-w-[1000px] w-full">
                        Customers on Standard see up to 24x ROI.* Start scaling faster with advanced automations and data-driven optimization.
                    </p>
                </div>
                <div className="flex flex-col max-w-[1100px]">

                <div  className="flex gap-3 ">
                    <div className="w-[500px] p-6 border bg-white rounded-2xl">
                        <h2 className="h-8 font-semibold">Seu carrinho</h2>
                        <hr className="my-1"/>
                        <div className="mb-3 mt-4">
                            Plano Basic - Solução ideal para iniciantes   
                        </div>
                        <div className="border mb-3 h-10 flex w-[250px] mt-6 mb-8">
                            <input className="h-full w-full px-2" placeholder="coupon" type="text"></input>
                        </div>
                        
                        <div className="flex justify-between text-sm">
                            <span className="text-neutral-600">Subtotal</span>
                            <span className="font-semibold">BRL 6.99</span>
                        </div>
                    </div>
                    <div className="w-[500px] p-6 border bg-white rounded-2xl">
                        <h2 className="h-8 font-semibold">Detalhes</h2>
                        <hr className="my-1"/>
                        <div className=" mt-4 flex justify-between text-sm h-8 items-center bg-neutral-0">
                            <span className="text-neutral-600"> Plano Basic (12 meses) - Solução ideal para iniciantes</span>
                            <span className="font-semibold text-xs">BRL 6.99</span>
                        </div>
                        <div className="flex justify-between text-sm h-8 items-center bg-neutral-0">
                            <span className="text-neutral-600"> Plano Basic - Solução ideal para iniciantes</span>
                            <span className="font-semibold text-xs">BRL 6.99</span>
                        </div>
                        <div className="flex justify-between text-sm h-8 items-center bg-neutral-0">
                            <span className="text-neutral-600"> Plano Basic - Solução ideal para iniciantes</span>
                            <span className="font-semibold text-xs">BRL 6.99</span>
                        </div>
                        <div className="flex justify-between  h-8 items-center bg-neutral-0 my-4">
                            <span className="text-neutral-900 font-semibold text-xs">Total</span>
                            <span className="font-semibold text-sm">BRL 6.99</span>
                        </div>
                    </div>
                </div>
                <div  className="flex gap-3 w-[500px]">
                    <div className="w-[500px] p-6 border bg-white rounded-2xl">
                        <h2>Endereço de faturamento</h2>
                        <div>
                            <div>
                                <input type="select"></input>
                                Lorem ipson glard black
                            </div>
                        </div>
                        <div>fdfd</div>
                        <div>US$ 6.99/month</div>
                        <div>
                        US$ 17.99/month</div>
                    </div>
                    <div className="w-[500px] p-6 border bg-white rounded-2xl">
                        <h2>Resumo do pedito</h2>
                    </div>
                    <div className="w-[500px] p-6 border bg-white rounded-2xl">
                        <h2>Pagamento</h2>
                    </div>
                </div>

             
                </div>
                <div className="w-full py-20 justify-center items-center flex flex-col bg-green-800 gap-7">
                    <p className="text-4xl text-neutral-100 font-semibold">
                        Economize até 76% no seu plano + ganhe um domínio grátis
                    </p>
                    <p className=" text-neutral-100 ">
                        Sem riscos. 30 dias para pedir reembolso.
                    </p>
                    <button className="h-10 w-min px-3 text-neutral-100 font-semibold bg-orange-400 rounded-sm whitespace-nowrap">
                        Comece agora
                    </button>
                </div>
            </main>
        </div>
    )
}

type PlanProps = {
    planName: string
}

function Plan({planName}:PlanProps) {
    const router = useRouter()
    return (
        <div className="flex flex-col w-[300px] border-[2px] border-green-600 hover:border-green-400 rounded-3xl overflow-hidden">
        { planName == 'Standart'? 
            <div className="h-10 w-full bg-green-600 text-neutral-100 font-semibold whitespace-nowrap flex items-center px-3  text-xs uppercase justify-center">
                Mais popular
            </div> 
            :
            <div className="h-10 w-full text-neutral-100 font-semibold whitespace-nowrap flex items-center px-3  text-xs uppercase justify-center">
                
            </div>
        }
        <div 
            // onClick={() => router.push('/cart')}
            className="w-full flex flex-col gap-2  p-5 text-sm"
        >
            <h2 className="text-2xl flex ">
                {planName}
            </h2>
            <p className="my-5">
                Solução ideal para iniciantes
            </p>
            {/* <p>Perfeito para quem profissionaliar</p>
            <p>Tenha mais potência e recursos</p> */}
            <div className="flex flex-col my-5 gap-4">
                <div className="flex gap-3 items-center">
                    <span className="text-sm">R$ 49,90</span>
                    •
                    <span className="-border-b border-black text-xs flex items-center ml-3 justify-center whitespace-nowrap p-2 bg-desc underline rounded-full h-16 w-16">ECONOMIZE 5%</span>
                </div>
                <div className="">
                    R$ 
                    <span className="text-5xl font-bold"> 29,90</span>
                    {/* /mês */}
                </div>
                <div>
                    <select className="">
                        <option value="1">1 mês</option>
                        <option value="3">3 meses</option>
                        <option value="4">12 meses</option>
                    </select>
                </div>
            </div>
            <button
                onClick={() => router.push('/cart')}
                className={`btn-0 w-full h-10 flex items-center justify-center border-green-600 border-[2px] rounded-xl  hover:bg-green-600 hover:text-neutral-100 font-semibold text-green-600 mb-2 ${planName === 'Standart' ? 'bg-green-500 hover:bg-green-600 text-neutral-100 border-transparent' : 'bg-none'}`}
            >
                Escolher plano
            </button>
            Teste 1 mês grátis
            <hr className="my-5"></hr>

            <div className="flex flex-col">
                <ol className="flex flex-col gap-[1px]">
                    <span className="flex gap-2 items-center h-8 -bg-neutral-200">
                        <Check
                            color="green"
                            size={14} 
                            strokeWidth='5px'
                        />
                        PDV 
                    </span>
                    <span className="flex gap-2 items-center h-8 -bg-neutral-200">
                        <Check
                            color="green"
                            size={14} 
                            strokeWidth='5px'
                        />
                        Agendamento
                    </span>
                    <span className="flex gap-2 items-center h-8 -bg-neutral-200">
                        <Check
                            color="green"
                            size={14} 
                            strokeWidth='5px'
                        />
                        NF-e
                    </span>
                    <span className="flex gap-2 items-center h-8 -bg-neutral-200">
                        <Check
                            color="green"
                            size={14} 
                            strokeWidth='5px'
                        />
                        Gestão de marketing
                    </span>
                    <span className="flex gap-2 items-center h-8 -bg-neutral-200">
                        <Check
                            color="green"
                            size={14} 
                            strokeWidth='5px'
                        />
                        Gestão logistica
                    </span>
                    <span className="flex gap-2 items-center h-8 -bg-neutral-200">
                        <Check
                            color="green"
                            size={14} 
                            strokeWidth='5px'
                        />
                        Gestão financeira
                    </span>
                    <span className="flex gap-2 items-center h-8 -bg-neutral-200">
                        <Check
                            color="green"
                            size={14} 
                            strokeWidth='5px'
                        />
                        Cadastro de produtos e serviços
                    </span>
                    <span className="flex gap-2 items-center h-8 -bg-neutral-200">
                        <Check
                            color="green"
                            size={14} 
                            strokeWidth='5px'
                        />
                        Parcerias
                    </span>
                </ol>
            </div>
        </div>
        </div>
    )
}