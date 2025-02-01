'use client'
import Link from "next/link";


export default function Signin() {
    return (
        <div className="bg-[#97cbff] dffd  w-[100vw]  h-[110vh] py-16 px-36 flex flex-col items-end">
            <div className="w-[450px] bg-white py-16 px-10 flex flex-col items-center rounded">
                <h1 className="text-center text-2xl font-medium mb-4">
                    Criar uma nova conta
                </h1>
                <p className="text-center max-w-80 mb-6">
                    Você está prestes a criar uma nova conta na Esticar
                </p>
                <div className="flex gap-8">
                    <Link href={"/"} 
                        className="overflow-hidden  flex flex-col items-center gap-3 text-sm"
                    >
                        <img 
                            className="h-9" 
                            src="https://steelbluemedia.com/wp-content/uploads/2019/06/new-google-favicon-512.png"
                        ></img>
                        Google
                    </Link>
                    <Link 
                    href={"/"} 
                    className="overflow-hidden  flex flex-col items-center gap-3 text-sm"
                    >
                        <img 
                            className="h-9" 
                            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                        ></img> 
                        Facebook
                    </Link>
                    <Link 
                        href={"/"} 
                        className="overflow-hidden  flex flex-col items-center gap-3 text-sm"
                    >
                        <img 
                            className="h-9" 
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/625px-Apple_logo_black.svg.png"
                        ></img> 
                        Apple
                    </Link>
                </div>
                <form className="text-sm py-6 text-[#4d6992] w-full max-w-[280px] ">
                    <div className="flex flex-col gap-5 w-full ">
                        <div className="flex w-full ">
                            <input 
                                placeholder="Email" 
                                className="h-10 w-full border border-zinc-300 rounded pl-2"
                            />
                        </div>
                        <div className="flex w-full">
                            <input 
                                placeholder="Senha" 
                                className="h-10 w-full border border-zinc-300 rounded pl-2"
                            />
                        </div>
                        
                    </div>
                </form>
                Detalhes da senha
                <ol className="text-xs flex flex-col gap-1 my-3">
                <li>- ter no minímo 8 caracteres e no máximo 30; </li>
                <li>- ter letras maiúsculas, letras minúsculas e números;</li>
                <li>- não pode ter caracteres especiais como <span className="px-1 bg-blue-100 rounded">#$%@&*-+.,</span>.</li>
                </ol>
                <button className="h-10 w-full bg-blue-400  text-lg rounded text-white font-medium mb-6 max-w-[280px]">
                    Começar
                </button>
                <div className="flex items-center text-center gap-2 mb-6 text-[#4d6992]">
                    Já tem uma conta?
                    <button className=" text-black h-8 flex px-3 bg-zinc-100 rounded items-center text-xs font-medium">
                        Login
                    </button>
                </div>
                <p className="text-sm text-[#4d6992] leading-6">
                    Ao se inscrever, você reconhece que concorda com nossos 
                    <Link 
                        href="/terms" 
                        className="underline"
                    >
                        Termos de Serviço
                    </Link> e 
                    <Link 
                        href="/terms" 
                        className="underline"
                    >
                        Política de Privacidade
                    </Link> .
                </p>
            </div>
        </div>
    )
}

