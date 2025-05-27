'use client'
import { result } from "@/lib/date-fns/config";
import { ArrowRight, Bell, MenuIcon, MenuSquare, MessageSquareText, MessagesSquareIcon, RotateCcw, Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Modal } from "../modal/modal.view";
import { useRouter } from 'next/navigation';
import { usePathname, useSearchParams } from 'next/navigation'
import SideBar from "../side-bar/side-bar.view";
import logger from "@/lib/pino";

interface Props {
    pageName?: string
}
// sum.js
export function sum(a:number, b: number) {
    return a + b
}

export function Header ({
    pageName
}: Props) {
    //
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [inputSearchSize, setContainerSize] = useState(80);
    
    useEffect(() => {
        setContainerSize(80)
    },[])
    
    const router = useRouter()
    const currentRoute = usePathname()

    const renderSideBar = () => {
        createPortal(<SideBar isVisibleTitle={true}/>, document.body)
        logger.info("render side bar")
    }

    return (
        <header  className='w-full h-12 sm:h-12  flex flex-col fixed bg-white  z-[1030] border-b '>
            <div className='w-full h-full  flex items-center justify-between px-4 '>
                <span className="flex gap-2">
                    <button 
                        onClick={() =>  createPortal(<SideBar isVisibleTitle={true}/>, document.body)} 
                        className="text-xl flex items-center gap-2 "
                    >
                        <MenuIcon size={20} strokeWidth={1}/>
                    </button>
                    <Link 
                        href={"/"} 
                        className="text-xl flex items-center gap-2 ml-2"
                    >
                        {pageName}
                    </Link>
                </span>
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
                    <div className="flex gap-1 items-center">
                       
                        <button 
                            // href={'/pricing'} 
                            onClick={() => router.push('/pricing')}
                            className=" sm:flex items-center text-[13px] justify-center bg-violet-500 hover:opacity-100 text-white h-9 px-3 rounded font-semibold  opacity-70 mr-5 hidden"
                        >
                            Upgrade
                        </button>
                        <button 
                            onClick={() => {}}
                            className="w-10 h-10  hover:bg-zinc-50 rounded-full flex items-center justify-center relative"
                        >
                            <Search strokeWidth={1} size={22}/>
                        </button>
                       <Modal
                            isOpen={isModalOpen}
                            onClose={setIsModalOpen}
                       >
                            <div className="w-full h-full bg-white">
                                
                            </div>
                       </Modal>
                        <button 
                            className="w-10 h-10  hover:bg-zinc-50 rounded-full flex items-center justify-center relative"
                            onClick={() => setShowModal(showModal ? false : true)}
                        >   
                            {
                                showModal && createPortal(
                                    <div
                                        className="fixed h-full w-full top-0 bottom-0 right-0 left-0 flex items-center justify-center  bg-red-500 text-xs text-white z-[1007]"
                                    ></div>, document.body
                                )
                            }
                            <Bell strokeWidth={1} size={22}/>
                        </button>
                        <button className="w-10 h-10  hover:bg-zinc-50 rounded-full flex items-center justify-center">
                            <div className="absolute mt-[-22px] mr-[-18px] h-5 w-5 flex items-center justify-center rounded-full bg-red-500 text-xs text-white">
                                3
                            </div>
                            <MessageSquareText strokeWidth={1} size={22}/>
                        </button>
                    </div>
                }
            </div>
            {/* {showModal && createPortal(
                <Modal setShowModal={setShowModal} />,
                document.body
            )} */}
        </header>
    )
}

