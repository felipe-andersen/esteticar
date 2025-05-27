"use client"
import {CalendarCheckIcon, ChevronRightIcon, CirclePlusIcon, FolderKanban, Home, HomeIcon, User2Icon } from "lucide-react";
import { AiFillHome } from "react-icons/ai";
import { CgHome } from "react-icons/cg";
import { Modal } from "../modal/modal.view";
import { useState } from "react";
import "./bottom-navigation.css"
import { useRouter } from 'next/navigation';
import { usePathname } from "next/navigation";


export function BottomNavigation() {
     
    const [isModalOpen, setIsModalOpen] = useState(false);

    const router = useRouter();
    const currentRoute = usePathname()
    // const goTo = () => {
    // //   router.push('/minha-pagina'); // Altere para a rota desejada
    // };
  

    return (
        <>
        <div className=" flex w-full dsmax-w-[380px] text-center border-t fixed bottom-0 bg-white h-12 sm:h-14 text-[10px] items-end  z-[1006] ">
            <button 
                className="flex flex-col gap-[1px] items-center justify-center w-[20%] text-neutral-500 bg-red-0 overflow-hidden "
                onClick={() =>  router.push('/dashboard')}
            >
                {/* <CgHome size={24} strokeWidth={1} fill="#737373" stroke="white" /> */}
                <AiFillHome size={22} fill={`${currentRoute === '/dashboard' ? "#15803d" : "#737373"} `}/>
                <p className={`${currentRoute === '/dashboard' ? "text-[#15803d]" : "text-[#737373]"}`}>Home</p>
            </button>
            <button 
                className="flex flex-col gap-[1px] items-center justify-center w-[20%] text-neutral-500 bg-red-0"
                onClick={() => router.push('/dashboard/shortcuts')}
            >
                <FolderKanban size={24} strokeWidth={1} fill="#737373"  stroke="white"/>
                <p className=" ">Gestão</p>
            </button>
            <button 
                className="flex flex-col gap-[1px] items-center justify-center w-[20%] text-neutral-500 bg-red-0"
                onClick={() => setIsModalOpen(true)}
            >
                <CirclePlusIcon size={28} strokeWidth={1} fill="#737373"  stroke="white"/>
                <p className=" ">Vender</p>
            </button>
            <div className="flex flex-col gap-[1px] items-center justify-center w-[20%] text-neutral-500 bg-red-0">
                <CalendarCheckIcon size={24} strokeWidth={1} fill="#737373"  stroke="white"/>
                <p className=" ">Calendário</p>
            </div>
            <button 
                className="flex flex-col gap-[1px] items-center justify-center w-[20%] text-neutral-500 bg-red-0"
                onClick={() => router.push('/dashboard/account')}
            >
                <User2Icon size={24} strokeWidth={1} fill="#737373"  stroke="white"/>
                <p className=" ">Conta</p>
            </button>

            <Modal 
                onClose={() => setIsModalOpen(false)} 
                isOpen={isModalOpen}
            >
                <div className="w-full h-full flex items-end scale-up-ver-bottom">
                    <div className="rounded-2xl bg-white min-h-36 w-full flex flex-col p-6 text-sm gap-3">
                        <div className="flex gap-3">
                            <button 
                                className="flex  rounded-xl w-full h-12 items-center justify-center bg-teal-500  border-transparent hover:border-teal-500  text-white font-semibold"
                            >
                                Nova venda
                            </button>
                            <button 
                                className="flex  rounded-xl w-full h-12 items-center justify-center bg-neutral-200 bg-teal-100  border-transparent font-semibold text-teal-700 "
                            >
                                Novo orçamento
                            </button>
                        </div>
                        <button 
                            className="flex border rounded-xl w-full h-12 items-center justify-center border-neutral-600  gap-6"
                            onClick={() => router.push('/dashboard/PDV')}
                        >
                            Ver painel 
                            <ChevronRightIcon size={18}/>
                        </button>


                    </div>
                </div>
            </Modal>
        </div>
        </>
    )
}