import { Bell, MessageSquareText, MessagesSquareIcon, RotateCcw } from "lucide-react";
import { result } from "..";
import Link from "next/link";

interface f {
    pageName: string
}

export function TopBar ({pageName}:f) {
    return (

        <div about='barra superior' className='w-full z-40 h-16 flex flex-col fixed bg-white shadow z-50 '>

            <div className='w-full h-16 flex items-center justify-between p-6 border-b border-zinc-150  bg-white'>

                <Link href={"/"} className="text-xl flex items-center gap-2 "><RotateCcw size={18}/> Esteticar | <span className=" text-zinc-300">{pageName}</span></Link>

                <span className="text-sm text-neutral-400">Offline há {result}</span>

                <div className='flex gap-2 flex'>

                    <Link href={'/subscribe'} className="flex items-center text-[13px] justify-center bg-violet-500 hover:opacity-100 text-white h-9 px-3 rounded font-semibold  opacity-70 mr-5">Upgrade</Link>

                    <div className="w-10 h-10  hover:bg-zinc-50 rounded-full flex items-center justify-center relative">

                        <div className="absolute mt-[-18px] mr-[-10px] h-2 w-2 flex items-center justify-center rounded-full bg-red-500 text-xs text-white"></div>

                        <Bell strokeWidth={1} />

                    </div>

                    <div className="w-10 h-10  hover:bg-zinc-50 rounded-full flex items-center justify-center">

                        <div className="absolute mt-[-22px] mr-[-18px] h-5 w-5 flex items-center justify-center rounded-full bg-red-500 text-xs text-white">3</div>

                        <MessageSquareText strokeWidth={1}/>
                        
                    </div>

                </div>

            </div>
        
        </div>

    )

}

