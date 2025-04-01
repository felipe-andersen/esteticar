'use client'
import Link from "next/link";


export default function Signup() {
    return (
        <div className="bg-[#3fa158] dffd  w-screen  h-screen fixed py-16  flex flex-col items-center">
            <div className="w-[450px] bg-white py-16 px-10 flex flex-col items-center rounded h-full overflow-y-scroll">
                <h1 className="text-center text-2xl font-medium mb-1">
                    Crie uma conta na Esticar
                </h1>
                <p className="text-center max-w-80 mb-6">
                    Você está prestes a criar uma nova conta
                </p>
                {/* <div className="flex gap-8">
                    <Link href={"/"} className="overflow-hidden  flex flex-col items-center gap-3 text-sm">
                        <img className="h-9" src="https://steelbluemedia.com/wp-content/uploads/2019/06/new-google-favicon-512.png"></img>
                        Google
                    </Link>
                    <Link href={"/"} className="overflow-hidden  flex flex-col items-center gap-3 text-sm">
                        <img className="h-9" src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"></img> 
                        Facebook
                    </Link>
                    <Link href={"/"} className="overflow-hidden  flex flex-col items-center gap-3 text-sm">
                        <img className="h-9" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/625px-Apple_logo_black.svg.png"></img> 
                        Apple
                    </Link>
                </div> */}
                <form className="text-sm py-6 text-[#4d6992]">
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-3">
                            <input placeholder="Nome" className="h-10 w-full border border-zinc-300 rounded pl-2"/>
                            <input placeholder="Último nome" className="h-10 w-full border border-zinc-300 rounded pl-2"/>
                        </div>
                        <input placeholder="Email" className="h-10 w-full border border-zinc-300 rounded pl-2"/>
                        <input placeholder="+55 (00) 0000000" className="h-10 w-full border border-zinc-300 rounded pl-2"/>
                        <input placeholder="Senha" className="h-10 w-full border border-zinc-300 rounded pl-2"/>
                        <input placeholder="repita a senha" className="h-10 w-full border border-zinc-300 rounded pl-2"/>
                    </div>
                </form>
                <button className="h-10 w-full bg-blue-400  text-lg rounded text-white font-medium mb-6 ">
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
                    <Link href="/terms" className="underline">
                        Termos de Serviço
                    </Link> e 
                    <Link href="/terms" className="underline">
                        Política de Privacidade
                    </Link> .
                </p>
            </div>
        </div>
    )
}

