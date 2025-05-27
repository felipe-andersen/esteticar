
'use client'
import { useState, useRef } from 'react';
import { Header } from '@/components/organisms/header';
import { Main } from './main.view';
import { BottomNavigation } from '@/components/organisms/bottom-navigation/bottom-navigation.view';
import SideBar from '@/components/organisms/side-bar/side-bar.view';
import logger from '@/lib/pino';
import { ArrowLeftToLine, ArrowRightFromLine } from 'lucide-react';
import innerWidth from '@/hooks/useIsMobile';


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
        <div
            data-testid={'126g65d'}
            className='relative flex h-screen w-screen box-border  bg-zinc-300 overflow-hidden'
        >
            <Header pageName='Home' />
            <div className={`w-full h-[calc(100%-88px)] md:h-[calc(100%-56px)] flex top-12 fixed overflow-hidden z-[1006]`}>
                {/* <span data-testId={'fdfadf'} role="region"  id='fdfadf'>Click Me</span> */}
                {
                    Width <= 768 ?
                        <></>
                        :
                        <div className={`flex flex-col h-full bg-red-0 relative border-r transition-all`}>
                            <div className='overflow-hidden w-full h-full bg-blue-300 transition-all'>
                                <SideBar isVisibleTitle={isSidebarExtended} />
                                {/* <SideBar {isFixed={isSidebarExtended ? true : false}} /> */}
                            </div>
                            <div className='flex items-center justify-center border w-7 h-7 rounded-full absolute mt-4 ml-[calc(100%-10px)] z-20 bg-white'>
                                {
                                    !isSidebarExtended ?
                                        <button className="w-full h-full flex items-center justify-center" onClick={() => setSidebarExtended(true)}>
                                            <ArrowRightFromLine size={14} />
                                        </button>
                                        :
                                        <button className="w-full h-full flex items-center justify-center" onClick={() => setSidebarExtended(false)}>
                                            <ArrowLeftToLine size={14} />
                                        </button>
                                }
                            </div>
                        </div>
                }
                <Main />
                <aside></aside>
            </div>
            {Width <= 768 ? <BottomNavigation /> : <></>}
        </div>
    );
}
