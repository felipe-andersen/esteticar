'use client'
import { result } from "@/lib/date-fns/config";
import { ArrowRight, Bell, MessageSquareText, MessagesSquareIcon, RotateCcw } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "../notification-modal/notification-modal.view";
import { useRouter } from 'next/navigation';
import { usePathname, useSearchParams } from 'next/navigation'

interface Props {
    pageName?: string
}
// sum.js
export function sum(a:number, b: number) {
    return a + b
}

export function TopBar ({
    pageName
}: Props) {

    const [showModal, setShowModal] = useState<boolean>(false);
    const router = useRouter()
    const currentRoute = usePathname()
    return (
        <header  className='w-full z-40  flex flex-col fixed bg-white  z-50 '>
            <div className='w-full h-14 sm:h-16 flex items-center justify-between p-6 border-b border-zinc-150  bg-white'>
                <Link href={"/"} className="text-xl flex items-center gap-2 ">
                    <RotateCcw size={18}/> 
                    ôFlanela 
                </Link>
                {/* <span className="text-sm text-neutral-400">Offline há {result}</span> */}
                {   currentRoute === '/pricing' ? 
                    <>
                        {/* <button 
                            className="text-sm bg-green-600 text-neutral-100 font-semibold h-10 w-min px-3 rounded border-[2px] border-green-600 whitespace-nowrap flex items-center gap-2" 
                            onClick={() => setShowModal(true)}
                        >
                            Standart R$ 29,90/mês
                            <ArrowRight size={18}/>
                        </button> */}
                    </>
                    :
                    <div className="flex gap-2">
                        <button 
                            // href={'/pricing'} 
                            onClick={() => router.push('/pricing')}
                            className=" sm:flex items-center text-[13px] justify-center bg-violet-500 hover:opacity-100 text-white h-9 px-3 rounded font-semibold  opacity-70 mr-5"
                        >
                            Upgrade
                        </button>
                        <button 
                            className="w-10 h-10  hover:bg-zinc-50 rounded-full flex items-center justify-center relative"
                            onClick={() => setShowModal(showModal ? false : true)}
                        >
                            <div
                                className="absolute mt-[-18px] mr-[-10px] h-2 w-2 flex items-center justify-center rounded-full bg-red-500 text-xs text-white"
                            />
                            <Bell strokeWidth={1} />
                        </button>
                        <button className="w-10 h-10  hover:bg-zinc-50 rounded-full flex items-center justify-center">
                            <div className="absolute mt-[-22px] mr-[-18px] h-5 w-5 flex items-center justify-center rounded-full bg-red-500 text-xs text-white">
                                3
                            </div>
                            <MessageSquareText strokeWidth={1}/>
                        </button>
                    </div>
                }
            </div>
            {showModal && createPortal(
                <Modal setShowModal={setShowModal} />,
                document.body
            )}
        </header>
    )
}

