

export function Main() {
    return (
        <main className='  bg-[#f6f8fa] fixed w-min  mr-1 h-full ml-80 mt-16 overflow-scroll p-4'>

            <div className="flex flex-col h-full ">

            <div className="bg-white border-rounded-t flex-col w-full p-6">

                <h1 className="font-bold mb-6">Settings</h1>

                <div className="flex text-sm mb-6 ">

                    <button className="h-10 w-min whitespace-nowrap rounded-t bg-zinc-100 px-3 border-b-[2px] border-zinc-100 text-neutral-700">Dados da conta</button>

                    <button className="h-10 w-min whitespace-nowrap rounded-t bg-zinc-50 px-3 border-b-[2px] border-zinc-100 text-neutral-500">Transações</button>

                    <button className="h-10 w-min whitespace-nowrap rounded-t bg-zinc-50 px-3 border-b-[2px] border-zinc-100 text-neutral-500">Segurança</button>

                    <button className="h-10 w-min whitespace-nowrap rounded-t bg-zinc-50 px-3 border-b-[2px] border-zinc-100 text-neutral-500">Integrações</button>



                </div>

                <h2 className="font-bold mb-6">Dados da conta</h2>

                <div className="flex flex-col gap-6 text-xs">

                    

                    <label>Nome e sobrenome</label>

                    <input className="h-10 w-min border-[2px] border-neutral-200 rounded"/>

                     <div className=" w-full h-min  flex  flex flex-col gap-2">

                <span className="font-semibold">Name *</span>   

                <div className="h-10 w-[360px] border-[2px] border-zinc-200 flex  rounded-lg  items-center hover:border-zinc-300">

                    <input
                        className=" w-full h-full px-3 outline-none bg-transparent placeholder:text-neutral-400  "
                        // name="fullName" 
                        spellCheck="false"
                        // placeholder={`${placeholder.fullName ? placeholder.fullName : "Jon Doe"}`}
                        type="text" 
                        // {...register("fullName") }
                        // aria-invalid={errors.fullName ? "true" : "false"} 
                        // value={capitalizeWords(watch('fullName'))}
                        // onChange={(data) => data}
                        // onChange={(e) => e.isPropagationStopped() && }
                    />

                    <span className="h-10 hidden w-10 scale-90 flex items-center justify-center ">

                        <span className="loader"/>

                    </span>

                </div>
           
                {/* {errors.fullName?.message && <p className="min-h-5 text-xs text-red-400 flex gap-2 flex ">{errors.fullName?.message}</p>} */}

            </div>

                    <label>Idioma</label>

                    <label>Moeda</label>

                    <label>País</label>

                    <label>idioma</label>

                    <label>Fuso horários</label>

                    <label>Endereço de email</label>

                </div>

                




            </div>
            </div>

            
        </main>
    )
}