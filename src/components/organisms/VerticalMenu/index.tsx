import { BarChart2, BarChart3, Barcode, CalendarCheck, Contact, Crown, FileText, FileTextIcon, FlagTriangleLeft, Gift, HandHelping, Handshake, LandPlot, LockKeyhole, Pyramid, Settings } from "lucide-react";
import Link from "next/link";

export default function VerticalMenu() {

    return (

        <section  className="flex w-80 fixed mt-16 flex-col h-full hidden sm md:flex lg xl 2xl  bg-white border-r border-zinc-200">
            
            <div about="coluna de botões " className="  w-full  h-full overflow-scroll scroll  flex flex-col  overflow-x-hidden">
                
                <div className=" flex flex-col  h-max p-5 text-sm whitespace-nowrap ">

                    <Link href={"/"} about="link" className="w-min h-12 text-zinc-700 flex flex-row rounded-full hover:bg-zinc-200   rounded px-6 gap-5">

                        <div about='icone' className="w-min  h-full flex items-center justify-center">

                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>

                        </div>

                        <div about="nome" className="h-full w-min text-[15px] flex items-center justify-center">

                            <p className="">Home</p>

                        </div>

                    </Link>

                    <Link href="/PDV" target="_blank" about="link" className="w-full  h-12  text-zinc-700 flex flex-row rounded-full hover:bg-zinc-200 w-min  rounded px-6 gap-5">

                        <div about='icone' className="w-min  h-full flex items-center ">

                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>

                        </div>

                        <div about="nome" className="h-full w-min flex items-center justify-center">

                            <p className="">PDV</p>

                        </div>

                    </Link>

                    <div className="h-[1px] border-b border-zinc-200 w-full my-4"></div>

                    <Link href={"/team"}  className="w-min  h-12 rounded-full flex flex-row hover:bg-orange-300 px-6 gap-5  text-zinc-700">

                        <div about='icone' className="w-min  h-full flex items-center justify-center">

                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-rocket"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>

                        </div>

                        <div about="nome" className="h-full w-min flex items-center justify-center">

                            <p className="">Pátio</p>

                        </div>

                    </Link>

                    <Link href={"/staff"} className="rounded-full  h-12  text-zinc-700 flex flex-row hover:bg-blue-300 px-6 gap-5 w-min ">

                        <div about='icone' className="w-min  h-full flex items-center justify-center">

                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>

                        </div>

                        <div about="nome" className="h-full w-min flex items-center justify-center">
                            
                            <p className="">

                                Colaboradores

                            </p>

                        </div>

                    </Link>

                    <Link href={"/staff"} about="butões" className="rounded-full px-6 gap-5 w-min  h-12 flex flex-row hover:bg-yellow-300">

                        <div about='icone' className="w-min  h-full flex items-center justify-center">

                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-ticket-slash"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="m9.5 14.5 5-5"/></svg>

                        </div>

                        <div about="nome" className="h-full w-min flex items-center justify-center">
                            
                            <p className="text-zinc-800 flex gap-2">

                                Marketing

                                <div className="text-xs  rounded flex w-min px-2 py-1 text-white justify-center items-center font-semibold gap-2"> <Crown size={18} color="#622e88"/></div>
                            
                            </p>

                        </div>

                    </Link>

                    <Link href={"/staff"} about="butões" className="rounded-full px-6 gap-5 w-min  h-12 flex flex-row hover:bg-green-300">

                        <div about='icone' className="w-min  h-full flex items-center justify-center">

                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.10435 20.2435V8.69565H6.07826V20.2435H5.10435ZM11.6435 20.2435V8.69565H12.6174V20.2435H11.6435ZM1 24V23.0261H23.2609V24H1ZM18.1826 20.2435V8.69565H19.1565V20.2435H18.1826ZM1 5.91304V5.21739L12.1304 0L23.2609 5.21739V5.91304H1ZM3.92174 4.93913H20.3391L12.1304 1.11304L3.92174 4.93913Z" fill="black"/></svg>

                        </div>

                        <div about="nome" className="h-full w-min flex items-center justify-center">

                            <p className="text-zinc-800">Financeiro</p>
                            
                        </div>

                    </Link>

                    <div className="h-[1px] border-b border-zinc-200 w-full my-4"></div>
            
                    <Link href={"/services"} about="butões" className="rounded-full px-6 gap-5 w-minl  h-12 flex flex-row hover:bg-zinc-200">

                        <div about='icone' className="w-min  h-full flex items-center justify-center">
                            
                            <Barcode strokeWidth={1} size={18}/>

                        </div>

                        <div about="nome" className="h-full w-min flex items-center justify-center">

                            <p className="text-zinc-800 whitespace-nowrap">Produtos e Serviços</p>

                        </div>

                    </Link>

                    <Link href={"/staff"} about="butões" className="rounded-full px-6 gap-5 w-min  h-12 flex flex-row hover:bg-zinc-200">

                        <div about='icone' className="w-min  h-full flex items-center justify-center">
                            
                            <Contact strokeWidth={1} size={18}/>

                        </div>

                        <div about="nome" className="h-full w-min flex items-center justify-center">
                            
                            <p className="text-zinc-800">

                                Clientes

                            </p>
                            
                        </div>

                    </Link>

                    <Link href={"/staff"} about="butões" className="rounded-full px-6 gap-5 w-min  h-12 flex flex-row hover:bg-zinc-200">

                        <div about='icone' className="w-min  h-full flex items-center justify-center">
                        
                            <CalendarCheck strokeWidth={1} size={18}/>

                        </div>

                        <div about="nome" className="h-full w-min flex items-center justify-center">
                            
                            <p className="text-zinc-800">Calendário</p>

                        </div>

                    </Link>

                    <Link href={"/staff"} about="butões" className="rounded-full px-6 gap-5 w-min  h-12 flex flex-row hover:bg-zinc-200">

                        <div about='icone' className="w-min  h-full flex items-center justify-center">
                        
                            <Handshake strokeWidth={1} size={18}/>

                        </div>

                        <div about="nome" className="h-full w-min flex items-center justify-center">
                            
                            <p className="text-zinc-800">Parcerias</p>

                        </div>

                    </Link>

                    <Link href={"/staff"} about="butões" className="rounded-full px-6 gap-5 w-min  h-12 flex flex-row hover:bg-zinc-200 ">

                        <div about='icone' className="w-min  h-full flex items-center justify-center">

                            <BarChart3 strokeWidth={1} size={18}/>

                        </div>
                        
                        <div about="nome" className="h-full w-min flex items-center justify-center">

                            <p className="text-zinc-800 whitespace-nowrap">Relatórios</p>

                        </div>

                    </Link>

                    {/*  */}

                    <div className="h-[1px] border-b border-zinc-200 w-full my-4"></div>

                    <Link href={"/staff"} about="butões" className="rounded-full px-6 gap-5 w-min  h-12 flex flex-row hover:bg-zinc-200">

                        <div about='icone' className="w-min  h-full flex items-center justify-center">

                            <Settings strokeWidth={1} size={18}/>

                        </div>
                        
                        <div about="nome" className="h-full w-min flex items-center justify-center">

                            <p className="text-zinc-800">Configuração</p>

                        </div>

                    </Link>

                    <Link href={"/staff"} about="butões" className="rounded-full px-6 gap-5 w-min  h-12 flex flex-row hover:bg-zinc-200">

                        <div about='icone' className="w-min  h-full flex items-center justify-center">

                            <LandPlot strokeWidth={1} size={18}/>

                        </div>
                        
                        <div about="nome" className="h-full w-min flex items-center justify-center">

                            <p className="text-zinc-800">Suporte</p>

                        </div>

                    </Link>

                    <Link href={"/staff"} about="butões" className="rounded-full px-6 gap-5 w-min  h-12 flex flex-row hover:bg-zinc-200">

                        <div about='icone' className="w-min  h-full flex items-center justify-center">

                            <LandPlot strokeWidth={1} size={18}/>

                        </div>
                        
                        <div about="nome" className="h-full w-min flex items-center justify-center">

                            <p className="text-zinc-800">Crédito para crescer</p>

                        </div>

                    </Link>

                    <Link href={"/staff"} about="butões" className="rounded-full px-6 gap-5 w-full  h-12 flex flex-row hover:bg-zinc-200 items-center">

                        <div about='' className="w-full h-full rounded-full overflow-hidden flex items-center justify-center ">

                            <img className="  w-8 h-8 rounded-full" src="https://files.tecnoblog.net/wp-content/uploads/2021/07/wagner-perfil.jpg"/>

                        </div>
                        
                        <div about="nome" className="h-full w-full flex justify-center  flex-col  overflow-hidden ">

                            <p className="text-sm font-semibold truncate">Mateus Limeira</p>

                            <p className="text-zinc-800 text-sm text-neutral-400 font-bold truncate ">mateus.limeira@gmail.comfdfdfdf</p>

                        </div>

                    </Link>

                </div>

            </div>

        </section>

    )
}


/** 
 
 Criar page/screen Cadastro de Clientes 

 Informações: Nome, cpf, endereço, data de nascimento, 
 email, telefones, data de entrada na plataforma, 
 situação do cliente, veículos, (Razão social, 
 ome fantasia, endereço e CNPJ se for empresa)

 Essa página vai conter a lista de clientes e um botão 
 "Cadastrar cliente".

 Criar a page/screen na pasta templates. Deve conter um 
 formulário para coletar as informações. 

 Utilizar:
 
    Tailwind (bibioteca de estilização)
    React-hook-form (bibioteca para validação de formulaŕio)
    React Bootstrap (bibioteca de components, opcional)
    Lucide (bibioteca de ícones)

 Lançar a funcionalidade na ramificação "feature" no Github.


 */