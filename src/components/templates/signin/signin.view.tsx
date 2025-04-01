'use client'
import Link from "next/link";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import React, { ReactNode, SetStateAction, useState } from "react";
import { ChevronLeft } from "lucide-react";



export default function Signin() {
    const [view, setView] = useState<string | 'code' | 'signin' | 'accountRecovery' | 'refine'>("signin")

    function ViewProvider() {
        if(view === "signin"){return <SigninLogin setView={setView}/>}
        else if (view === "accountRecovery"){return <AccountRecovery setView={setView}/>}
        else if (view === "code"){return <Code setView={setView}/>}
        else if (view === "refine"){return <Refine setView={setView}/>}

    }
    return (
        <div className="bg-teal-500 dffd h-screen w-full  fixed flex flex-col items-center py-10 overflow-y-scroll">
            <div className="max-w-[390px] w-full bg-white h-min flex flex-col items-center rounded">
                <Tabs defaultValue="account" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="account">Entrar</TabsTrigger>
                        <TabsTrigger value="password">Cadastrar</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                       <ViewProvider/>
                    </TabsContent>
                    <TabsContent value="password">
                        Forgot
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

function AccountRecovery({setView}: {setView: React.Dispatch<SetStateAction<string>>}) {
    return (
        <div className="max-w-[390px] w-full bg-white pb-4 px-8 flex flex-col items-center rounded">
            <div className="w-full">
                <button onClick={() => setView("signin")} className="flex gap-1 items-center my-3">
                    <ChevronLeft size={22}/>
                    Voltar
                </button>
            </div>
            <div className="w-full">
                <h2 className="text-2xl font-bold mb-2">Recuperação de conta</h2>
                <p className="text-gray-500 text-sm mb-6">Insira o e-mail cadastrado para redefinição de senha</p>
                <form className="text-sm mb-5 text-[#4d6992] w-full max-w-[390px] ">
                    <div className="flex flex-col gap-3 w-full ">
                        <div className="flex w-full ">
                            <input 
                                placeholder="Email" 
                                className="h-10 w-full border border-zinc-300 rounded pl-3"
                            />
                        </div>
                    </div>
                </form>
                <button 
                    onClick={() => {setView('code')}}
                    className="h-10 w-full bg-teal-500  text-lg rounded text-white font-medium mb-6 max-w-[390px]"
                >
                    Enviar link de recuperação
                </button>
            </div>
        </div>
    )
}

function Code({setView}: {setView: React.Dispatch<SetStateAction<string>>}) {
    return (
        <div className="max-w-[390px] w-full bg-white pb-4 px-8 flex flex-col items-center rounded">
            <div className="w-full">
                <button onClick={() => setView("refine")} className="flex gap-1 items-center my-3">
                    <ChevronLeft size={22}/>
                    Voltar
                </button>
            </div>
            <div className="w-full">
                <p className="text-sm my-2">3:00</p>
                <h2 className="text-2xl font-bold mb-2">Confirme sua identidade</h2>
                <p className="text-gray-500 mb-6">Digite o código enviado por email</p>
                <form className="text-sm mb-5 text-[#4d6992] w-full max-w-[390px] ">
                    <div className="flex flex-col gap-3 w-full ">
                        <div className="flex w-full ">
                            <input 
                                placeholder="XXXXX" 
                                className="h-10 w-full border border-zinc-300 rounded pl-3"
                            />
                        </div>
                    </div>
                </form>
                <button 
                    onClick={() => setView("refine")}
                    className="h-10 w-full bg-teal-500  text-sm rounded text-white font-medium mb-6 max-w-[390px]"
                >
                    Validar código
                </button>
            </div>
        </div>
    )
}

function Refine({setView}: {setView: React.Dispatch<SetStateAction<string>>}) {
    return (
        <div className="max-w-[390px] w-full bg-white pb-4 px-8 flex flex-col items-center rounded">
            <div className="w-full">
                <button onClick={() => setView("accountRecovery")} className="flex gap-1 items-center my-3">
                    <ChevronLeft size={22}/>
                    Voltar
                </button>
            </div>
            <div className="w-full">
                <h2 className="text-2xl font-bold mb-2">Redefinição de senha</h2>
                <p className="text-gray-500 text-sm mb-6">Crie uma nova senha</p>
                <form className="text-sm mb-5 text-[#4d6992] w-full max-w-[390px] ">
                    <div className="flex flex-col gap-3 w-full ">
                        <div className="flex w-full ">
                            <input 
                                placeholder="Nova senha" 
                                className="h-10 w-full border border-zinc-300 rounded pl-3"
                            />
                        </div>
                        <div className="flex w-full ">
                            <input 
                                placeholder="Repita a senha" 
                                className="h-10 w-full border border-zinc-300 rounded pl-3"
                            />
                        </div>
                        
                    </div>
                </form>
                <button 
                    onClick={() => setView("signin")}
                    className="h-10 w-full bg-teal-500  text-lg rounded text-white font-medium mb-6 max-w-[390px]"
                >
                    Redefinir senha
                </button>
            </div>
        </div>
    )
}

export function SigninLogin({setView}: {setView: React.Dispatch<SetStateAction<string>>}) {
    return (
        
            <div className="max-w-[390px] w-full bg-white py-16 px-5 flex flex-col items-center rounded">
                <h1 className="text-center text-2xl font-medium mb-4">
                    Bem vindo a Esteticar!
                </h1>
                <p className="text-center max-w-80 mb-6">
                    Entre com sua conta
                </p>
                
                <form className="text-sm mb-2 text-[#4d6992] w-full max-w-[390px] ">
                    <div className="flex flex-col gap-3 w-full ">
                        <div className="flex w-full ">
                            <input 
                                placeholder="Email" 
                                className="h-10 w-full border border-zinc-300 rounded pl-3"
                            />
                        </div>
                        <div className="flex w-full">
                            <input 
                                placeholder="Senha" 
                                className="h-10 w-full border border-zinc-300 rounded pl-3"
                            />
                        </div>
                    </div>
                </form>
                <button onClick={() => setView("accountRecovery")} className="text-sm underline  self-end mb-4">Recuperar acesso </button>
                {/* Detalhes da senha
                <ol className="text-xs flex flex-col gap-1 my-3">
                    <li>- ter no minímo 8 caracteres e no máximo 30; </li>
                    <li>- ter letras maiúsculas, letras minúsculas e números;</li>
                    <li>- não pode ter caracteres especiais como <span className="px-1 bg-blue-100 rounded">#$%@&*-+.,</span>.</li>
                </ol> */}
                <button className="h-10 w-full bg-teal-500  text-lg rounded text-white font-medium mb-6 max-w-[390px]">
                    Começar
                </button>
                <span className="text-sm my-3 mb-5">ou entre com</span>
                <div className="flex gap-8 mb-10 text-xs">
                    <Link href={"/"} 
                        className="overflow-hidden  flex flex-col items-center gap-3 "
                    >
                        <img 
                            className="h-6" 
                            src="https://steelbluemedia.com/wp-content/uploads/2019/06/new-google-favicon-512.png"
                        ></img>
                        Google
                    </Link>
                    <Link 
                    href={"/"} 
                    className="overflow-hidden  flex flex-col items-center gap-3 "
                    >
                        <img 
                            className="h-6" 
                            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                        ></img> 
                        Facebook
                    </Link>
                    <Link 
                        href={"/"} 
                        className="overflow-hidden  flex flex-col items-center gap-3 "
                    >
                        <img 
                            className="h-6" 
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/625px-Apple_logo_black.svg.png"
                        ></img> 
                        Apple
                    </Link>
                </div>
                <div className="flex items-center text-center gap-2 mb-6 -text-[#4d6992]">
                    Não tem uma conta?
                    <Link href={"/signup"} className=" text-black h-8 flex px-3 bg-zinc-100 rounded items-center text-xs font-medium">
                        Cadastrar
                    </Link>
                </div>
                <p className="text-sm -text-[#4d6992] leading-6 max-w-[360px] text-center">
                    Ao se inscrever, você reconhece que concorda com nossos
                    &nbsp;
                    <Link 
                        href="/terms" 
                        className="underline"
                    >
                        Termos de Serviço
                    </Link> e &nbsp;
                    <Link 
                        href="/terms" 
                        className="underline"
                    >
                        Política de Privacidade
                    </Link> .
                </p>
            </div>
  
    )
}

