import { Crown } from "lucide-react";
import Link from "next/link";

export default function Components() {
    return (

        <div className="flex flex-col ">

            <main className=' w-[100vw] h-[100vh] bg-[#f6f8fa] p-20 scroll flex flex-col overflow-scroll gap-3'>

                <button  type="submit" className='h-10 w-min px-3 whitespace-nowrap  text-white text-sm font-semibold rounded bg-teal-600 hover:bg-teal-500 flex gap-2 items-center justify-center  '>

                    Cadastrar 

                </button> 

                <button className='h-10 w-min px-3 whitespace-nowrap  text-white text-sm font-semibold rounded bg-teal-600 hover:bg-teal-500 flex gap-2 items-center justify-center border-2 border-teal-600 hover:border-teal-600'>

                default button 

                </button>

                <button className='text-black h-10 w-min px-3 whitespace-nowrap text-sm font-semibold rounded border border-neutral-700 hover:text-neutral-500 hover:border-neutral-400 text-neutral-700 flex gap-2 items-center justify-center'>

                secondary button

                </button>

                <button className='text-black h-10 w-min px-3 whitespace-nowrap text-sm font-semibold bg-zinc-200 rounded   hover:bg-zinc-100 text-neutral-800 hover:text-neutral-700 flex gap-2  items-center justify-center'>

                tertiary button

                </button>

                <div className="text-xs bg-violet-700 hover:bg-violet-600 rounded flex w-min px-2 py-1 text-white justify-center items-center font-semibold gap-2"> <Crown size={14}/></div>

                <div className="text-xs bg-violet-700 hover:bg-violet-600 rounded flex w-min px-2 py-1 text-white justify-center items-center font- gap-2">tag</div>

                <div className="text-xs bg-violet-700 hover:bg-violet-600 rounded flex whitespace-nowrap w-min px-2 py-1 text-white justify-center items-center font- gap-2 rounded-full ">tag </div>

                <Link href="/" className="text-xs text-neutral-600 hover:text-neutral-500 underline">Mais informações</Link>

                


            </main>

        </div>
    );
}