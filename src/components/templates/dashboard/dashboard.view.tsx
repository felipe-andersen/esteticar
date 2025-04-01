
'use client'
import { useState, useRef } from 'react';
import { Header } from '@/components/organisms/header';
import { Main } from './main.view';
import { BottomNavigation } from '@/components/organisms/bottom-navigation/bottom-navigation.view';
import SideBar from '@/components/organisms/side-bar';
import logger from '@/lib/pino/pino';
import { ArrowLeftToLine, ArrowRightFromLine } from 'lucide-react';
import innerWidth from '@/hooks/useIsMobile';


const vagas = ['1', "2", "3", "4", "5", "6", "7"]

const moduleFileName = `templates/dashboard/dashboard.view.tsx`

const loggerMsg = `> ${moduleFileName}`

export default function Dashboard() {
    const [show, setShow] = useState(false);
    const [isSidebarExtended, setSidebarExtended] = useState(false);
    // 
    const target = useRef(null);
    logger.info(loggerMsg)


const Width = innerWidth()
    return (
        <div className='relative flex h-screen w-screen box-border  bg-zinc-300 overflow-hidden '>
            <Header pageName='ERP'/>
            <div className={`w-full h-[calc(100%-117px)] md:h-[calc(100%-56px)] flex top-16 fixed overflow-hidden z-[3565656565]`}>
                {
                    Width <= 768 ? 
                    <></>
                    :
                    <div className={`flex flex-col h-full bg-red-0 relative border-r`}>
                        <div className='overflow-hidden w-full h-full bg-blue-300'>
                            <SideBar isVisibleTitle={isSidebarExtended} />
                            {/* <SideBar {isFixed={isSidebarExtended ? true : false}} /> */}
                        </div>
                        <div className='flex items-center justify-center border w-7 h-7 rounded-full absolute mt-4 ml-[calc(100%-10px)] z-20 bg-white'>
                            {
                                !isSidebarExtended ?  
                                <button className="w-full h-full flex items-center justify-center" onClick={() => setSidebarExtended(true)}>
                                    <ArrowRightFromLine size={14}/>
                                </button>
                                :
                                <button className="w-full h-full flex items-center justify-center" onClick={() => setSidebarExtended(false)}>
                                    <ArrowLeftToLine size={14}/>
                                </button>
                            }
                        </div>
                    </div>
                }
                <Main/>
                <aside></aside>
            </div>
            { Width <= 768 ? <BottomNavigation/> : <></> }
        </div>
    );
}
  