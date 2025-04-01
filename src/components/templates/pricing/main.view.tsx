'use client'
import { Check, CreditCard, TableCellsSplit } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { FaPix } from "react-icons/fa6"



export default function Main() {
    const router = useRouter()
    return (
        <div className=" bg-neutral-100 ">
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
                <div className="flex flex-col  w-full bg-red-100 flex items-center">

                <div  className="flex gap-3 w-full justify-center">
                    <div className="w-full max-w-[700px] p-6 border bg-white rounded-2xl">
                        <h2 className="h-8 font-semibold text-xl">
                            Item
                        </h2>
                        <hr className="my-1"/>
                        <div className="flex justify-between items-center">
                            <div className="text-sm ">
                                Plano Basic (12 meses) - Solução ideal para iniciantes
                            </div>
                            <div className="text-sm bg-green-600 text-white rounded-full p-2 px-3 w-min whitespace-nowrap font-semibold text-xs">
                                ECONOMIZE R$1.680,00
                            </div>
                            <div className="text-sm  flex flex-col items-end">
                                <span className="font-extrabold">
                                    R$ 59,30
                                </span>
                                <s>
                                    R$ 59,30
                                </s>
                            </div>
                        </div>
                        <span className="text-sm text-neutral-700">
                        Renovação a R$25,99/mês em 27/02/2029. Cancele a qualquer momento!
                        </span>
                    </div>
                    <div className="flex flex-col p-6 bg-neutral-100">
                        <div className="flex justify-between ">
                            <span className="text-xl font-semibold">
                                Subtotal
                            </span>
                            <div className="flex gap-2">
                                <span className="text-neutral-600">
                                R$2.207,52
                                </span>
                                <span className="text-green-800">
                                R$527,52
                                </span>
                            </div>
                        </div>
                        <span>O subtotal não inclui impostos aplicáveis</span>
                        <div className="flex justify-between">
                            <span>
                            Desconto do Plano -76%
                            </span>
                            <span>
                            -R$1.680,00
                            </span>
                        </div>
                        <span className="text-sm">
                        Tem um cupom de desconto?
                        </span>
                        <div className="flex gap-2">
                            <div className=" border h-10 rounded overflow-hidden">
                                <input
                                    className="px-2 h-full inter " 
                                    placeholder="input"
                                ></input>
                            </div>
                            <button className=" px-2 rounded rounded h-10 bg-green-800 text-white font-semibold text-sm">
                                enviar
                            </button>
                        </div>
                        <button className="w-full rounded h-10 bg-green-800 text-white font-semibold">
                            Continuar
                        </button>
                    </div>
                    {/* <div className="w-[500px] p-6 border bg-white rounded-2xl">
                        <h2 className="h-8 font-semibold text-xl">Detalhes</h2>
                        <hr className="my-1"/>
                        <div className="text-xs mt-5 pl-3 border-l-[2px] border-neutral-900 text-green-00">
                            Escolha um método de pagamento para continuar. Você ainda terá uma chance de revisar e alterar seu pedido antes que ele seja finalizado.
                        </div>
                        <div className=" mt-4 flex justify-between text-sm  bg-neutral-0 text-neutral-700 items-start mb-1">
                            <span className=""> Plano Basic (12 meses) - Solução ideal para iniciantes fdfdfdfdfdfdfdfffffffffffgkihj</span>
                            <span className="font-semibold text-xs whitespace-nowrap">BRL 6.99</span>
                        </div>
                         <div className="flex justify-between text-sm h-8 items-center bg-neutral-0 text-neutral-700">
                            <span className=""> Plano Basic (12 meses) - Solução ideal para iniciantes</span>
                            <span className="font-semibold text-xs">BRL 6.99</span>
                        </div>
                        <div className="flex justify-between text-sm h-8 items-center bg-neutral-0 text-neutral-700">
                            <span className=""> Plano Basic (12 meses) - Solução ideal para iniciantes</span>
                            <span className="font-semibold text-xs">BRL 6.99</span>
                        </div>
                        <div className="flex justify-between  h-8 items-center bg-neutral-0 mt-4">
                            <span className="text-neutral-900 font-semibold text-sm">Total</span>
                            <span className="font-semibold text-sm">BRL 6.99</span>
                        </div>
                    </div> */}
                </div>
                <div  className="flex gap-3 w-[500px]">
                    <div className="w-[500px] p-6 border bg-white rounded-2xl">
                        <h2 className="h-8 font-semibold text-xl">
                            Item
                        </h2>
                        <hr className="my-1"/>
                        <span className="text-sm ">
                            Cartão, pix ou carteira difital
                        </span>
                        <div className="flex flex-col justify-center gap-1">
                            <div className=" text-sm flex items-center border border-green-500 rounded h-10 pr-3 max-w-[250px] ">
                                <span className="w-12  h-full flex items-center justify-center">
                                    <FaPix/>
                                </span>
                                pix
                            </div>
                            <div className=" text-sm flex items-center border border-green-500 rounded h-10 pr-3 max-w-[250px] ">
                                <span className="w-12  h-full flex items-center justify-center">
                                    <CreditCard size={18}/>
                                </span>
                                cartão de crédito e débito
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-6">
                    <div className="w-full bg-neutral-100 p-7 border rounded-3xl bg-white min-w-[700px]">
                        <h2 className="mb-5 font-bold text-xl">
                            Endereço de faturamento
                        </h2>
                        <div className="flex gap-6 h-12 mb-5 ">
                            <div className="h-full border h-full rounded-md overflow-hidden w-full flex items-center justify-center ">
                                <input
                                    className="h-full px-4 w-full text-sm h-[calc(100%-2px)] w-[calc(100%-2px)] rounded-md poppins-regular"
                                    placeholder="Primeiro nome "
                                />
                            </div>
                            <div className="h-full border h-full rounded-md overflow-hidden w-full flex items-center justify-center ">
                                <input
                                    className="h-full px-4 w-full text-sm h-[calc(100%-2px)] w-[calc(100%-2px)] rounded-md"
                                    placeholder="Primeiro nome"
                                />
                            </div>
                        </div>
                    
                        <div className="flex gap-6 h-12 w-full mb-5">
                            <div className="h-full border h-full rounded-md overflow-hidden w-full flex items-center justify-center ">
                                <input
                                    className="h-full px-4 w-full text-sm h-[calc(100%-2px)] w-[calc(100%-2px)] rounded-md"
                                    placeholder="Primeiro nome"
                                />
                            </div>
                        
                        </div>
                        <div className="flex gap-6 h-12 w-full mb-5">
                            <div className="h-full border h-full rounded-md overflow-hidden w-full flex items-center justify-center ">
                                <input
                                    className="h-full px-4 w-full text-sm h-[calc(100%-2px)] w-[calc(100%-2px)] rounded-md"
                                    placeholder="Primeiro nome"
                                />
                            </div>
                        
                        </div>
                        <div className="flex gap-6 h-12 mb-5 ">
                            <div className="h-full border h-full rounded-md overflow-hidden w-full flex items-center justify-center ">
                                <input
                                    className="h-full px-4 w-full text-sm h-[calc(100%-2px)] w-[calc(100%-2px)] rounded-md"
                                    placeholder="Primeiro nome"
                                />
                            </div>
                            <div className="h-full border h-full rounded-md overflow-hidden w-full flex items-center justify-center ">
                                <input
                                    className="h-full px-4 w-full text-sm h-[calc(100%-2px)] w-[calc(100%-2px)] rounded-md"
                                    placeholder="Primeiro nome"
                                />
                            </div>
                        </div>
                        <div className="flex gap-6 h-12 mb-5 ">
                            <div className="h-full border h-full rounded-md overflow-hidden w-full flex items-center justify-center ">
                                <input
                                    className="h-full px-4 w-full text-sm h-[calc(100%-2px)] w-[calc(100%-2px)] rounded-md"
                                    placeholder="Primeiro nome"
                                />
                            </div>
                            <div className="h-full border h-full rounded-md overflow-hidden w-full flex items-center justify-center ">
                                <input
                                    className="h-full px-4 w-full text-sm h-[calc(100%-2px)] w-[calc(100%-2px)] rounded-md"
                                    placeholder="Primeiro nome"
                                />
                            </div>
                        </div>
                        <div className="w-[180px] border h-12 rounded-xl overflow-hidden  flex items-center justify-center px-3 bg-green-800 text-white font-semibold">
                            Continuar
                        </div>
                    </div>
                        <div className="w-full bg-white">
                            gfgfgfggffffffffffffffffffffffffffffffffffffffff
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="w-full bg-neutral-100 p-7 border rounded-3xl bg-white min-w-[700px]">
                            <h2 className=" font-bold text-xl">
                                Endereço de faturamento
                            </h2>
                            <hr className="my-1"/>
                            <span className="text-sm ">
                                Cartão, pix ou carteira difital
                            </span>
                            <div className="flex flex-col justify-center gap-1">
                                <div className=" text-sm flex items-center border border-green-500 rounded h-10 pr-3 max-w-[250px] ">
                                    <span className="w-12  h-full flex items-center justify-center">
                                        <FaPix/>
                                    </span>
                                    pix
                                </div>
                                <div className=" text-sm flex items-center border border-green-500 rounded h-10 pr-3 max-w-[250px] ">
                                    <span className="w-12  h-full flex items-center justify-center">
                                        <CreditCard size={18}/>
                                    </span>
                                    cartão de crédito e débito
                                </div>
                            </div>
                            Informações sobre a compra serão enviadas para o email

                            Dúvidas sobre segurança? sssssssssssssssssssssssAcesse o Manual de Compra Segura pre preparamos para você.
                        </div>
                        <div className="w-full bg-white">
                            gfgfgfggffffffffffffffffffffffffffffffffffffffff
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