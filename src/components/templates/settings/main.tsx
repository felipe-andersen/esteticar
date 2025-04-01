'use client'
import { useState } from "react"


export function Main() {
    return (
        <main className='bg-[#dfe2e6] fixed w-full  mr-1 h-full p-3  mt-16 overflow-scroll '>
            <div className="bg-white flex flex-col h-full max-w-[450px] ">
            <div className="bg-white border-rounded-t flex-col w-full p-6">
                <div className="flex text-sm mb-6 ">
                    <button className="h-10 w-min whitespace-nowrap rounded-t bg-zinc-100 px-3 border-b-[2px] border-zinc-100 text-neutral-700">
                        Dados da conta
                    </button>
                    <button className="h-10 w-min whitespace-nowrap rounded-t bg-zinc-50 px-3 border-b-[2px] border-zinc-100 text-neutral-500">
                        Geral
                    </button>
                    <button className="h-10 w-min whitespace-nowrap rounded-t bg-zinc-50 px-3 border-b-[2px] border-zinc-100 text-neutral-500">
                        Segurança
                    </button>
                    <button className="h-10 w-min whitespace-nowrap rounded-t bg-zinc-50 px-3 border-b-[2px] border-zinc-100 text-neutral-500">
                        Integrações
                    </button>
                </div>
                <h2 className="font-bold mb-6">
                    Dados da conta
                </h2>
                <div className="flex flex-col gap-6 text-sm">
                    <div className=" w-full h-min  flex  flex flex-col gap-2">
                        <label className=" text-sm">
                            Nome da empresa *
                        </label>   
                        <div className="h-10  border-[2px] border-zinc-200 flex  rounded-lg  items-center hover:border-zinc-300">
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
                    <div className=" w-full h-min  flex  flex flex-col gap-2">
                        <label className=" text-sm">
                            CNPJ *
                        </label>   
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
                    <div className=" w-full h-min  flex  flex flex-col gap-2">
                        <label className=" text-sm">
                            Endereço *
                        </label>   
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
                    <div className=" w-full h-min  flex  flex flex-col gap-2">
                        <label className=" text-sm">
                            Contato *
                        </label>   
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
                    <div className=" w-full h-min  flex  flex flex-col gap-2">
                        <label className=" text-sm">
                            Horário de funcionamento *
                        </label>   
                        <div className="h-10 w-[360px] border-[2px] border-zinc-200 flex p-1 rounded-lg  items-center hover:border-zinc-300 gap-2 overflow-hidden">
                            <div className="w-[40%] h-full">
                                <div className="flex items-center whitespace-nowrap justify-center text-xs rounded  border  h-full w-min bg-neutral-200 px-2 font-semibold">
                                    Domingo
                                </div>
                            </div>
                            <div className="flex justify-center  h-full  items-center w-min w-[60%]">
                            <div className="flex items-center justify-center  h-full w-14 overflow-hidden ">
                                <input
                                    className="  h-full outline-none bg-transparent placeholder:text-neutral-400  w-full  "
                                    // name="fullName" 
                                    spellCheck="false"
                                    placeholder={`00:00`}
                                    type="text" 
                                    // {...register("fullName") }
                                    // aria-invalid={errors.fullName ? "true" : "false"} 
                                    // value={capitalizeWords(watch('fullName'))}
                                    // onChange={(data) => data}
                                    // onChange={(e) => e.isPropagationStopped() && }
                                />
                            </div>
                            -
                            <div className="flex items-center justify-center  h-full w-14 overflow-hidden  ml-4">
                                <input
                                    className="  h-full outline-none bg-transparent placeholder:text-neutral-400  w-full  flex "
                                    // name="fullName" 
                                    spellCheck="false"
                                    placeholder={`00:00`}
                                    type="text" 
                                    // {...register("fullName") }
                                    // aria-invalid={errors.fullName ? "true" : "false"} 
                                    // value={capitalizeWords(watch('fullName'))}
                                    // onChange={(data) => data}
                                    // onChange={(e) => e.isPropagationStopped() && }
                                />
                            </div>
                            </div>
                            <span className="h-10 hidden w-10 scale-90 flex items-center justify-center ">
                                <span className="loader"/>
                            </span>
                        </div>
                        <div className="h-10 w-[360px] border-[2px] border-zinc-200 flex p-1 rounded-lg  items-center hover:border-zinc-300 gap-2 overflow-hidden">
                            <div className="w-[40%] h-full">
                                <div className="flex items-center whitespace-nowrap justify-center text-xs rounded  border  h-full w-min bg-neutral-200 px-2 font-semibold">
                                    Segunda-feira
                                </div>
                            </div>
                            <div className="flex justify-center  h-full  items-center w-min w-[60%]">
                            <div className="flex items-center justify-center  h-full w-14 overflow-hidden ">
                                <input
                                    className="  h-full outline-none bg-transparent placeholder:text-neutral-400  w-full  "
                                    // name="fullName" 
                                    spellCheck="false"
                                    placeholder={`00:00`}
                                    type="text" 
                                    // {...register("fullName") }
                                    // aria-invalid={errors.fullName ? "true" : "false"} 
                                    // value={capitalizeWords(watch('fullName'))}
                                    // onChange={(data) => data}
                                    // onChange={(e) => e.isPropagationStopped() && }
                                />
                            </div>
                            -
                            <div className="flex items-center justify-center  h-full w-14 overflow-hidden  ml-4">
                                <input
                                    className="  h-full outline-none bg-transparent placeholder:text-neutral-400  w-full  flex "
                                    // name="fullName" 
                                    spellCheck="false"
                                    placeholder={`00:00`}
                                    type="text" 
                                    // {...register("fullName") }
                                    // aria-invalid={errors.fullName ? "true" : "false"} 
                                    // value={capitalizeWords(watch('fullName'))}
                                    // onChange={(data) => data}
                                    // onChange={(e) => e.isPropagationStopped() && }
                                />
                            </div>
                            </div>
                            <span className="h-10 hidden w-10 scale-90 flex items-center justify-center ">
                                <span className="loader"/>
                            </span>
                        </div>
                        <div className="h-10 w-[360px] border-[2px] border-zinc-200 flex p-1 rounded-lg  items-center hover:border-zinc-300 gap-2 overflow-hidden">
                            <div className="w-[40%] h-full">
                                <div className="flex items-center whitespace-nowrap justify-center text-xs rounded  border  h-full w-min bg-neutral-200 px-2 font-semibold">
                                    Terça-feita
                                </div>
                            </div>
                            <div className="flex justify-center  h-full  items-center w-min w-[60%]">
                            <div className="flex items-center justify-center  h-full w-14 overflow-hidden ">
                                <input
                                    className="  h-full outline-none bg-transparent placeholder:text-neutral-400  w-full  "
                                    // name="fullName" 
                                    spellCheck="false"
                                    placeholder={`00:00`}
                                    type="text" 
                                    // {...register("fullName") }
                                    // aria-invalid={errors.fullName ? "true" : "false"} 
                                    // value={capitalizeWords(watch('fullName'))}
                                    // onChange={(data) => data}
                                    // onChange={(e) => e.isPropagationStopped() && }
                                />
                            </div>
                            -
                            <div className="flex items-center justify-center  h-full w-14 overflow-hidden  ml-4">
                                <input
                                    className="  h-full outline-none bg-transparent placeholder:text-neutral-400  w-full  flex "
                                    // name="fullName" 
                                    spellCheck="false"
                                    placeholder={`00:00`}
                                    type="text" 
                                    // {...register("fullName") }
                                    // aria-invalid={errors.fullName ? "true" : "false"} 
                                    // value={capitalizeWords(watch('fullName'))}
                                    // onChange={(data) => data}
                                    // onChange={(e) => e.isPropagationStopped() && }
                                />
                            </div>
                            </div>
                            <span className="h-10 hidden w-10 scale-90 flex items-center justify-center ">
                                <span className="loader"/>
                            </span>
                        </div>
                        {/* {errors.fullName?.message && <p className="min-h-5 text-xs text-red-400 flex gap-2 flex ">{errors.fullName?.message}</p>} */}
                    </div>

                    <div className=" w-full h-min  flex  flex flex-col gap-2">
                        <label className=" text-sm">
                            Admin *
                        </label>   
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
                   
                </div>
            </div>

            <General/>
            <Security/>
            </div>
        </main>
    )
}

export function General() {
    return (
        <>
            <div className="bg-white border-rounded-t flex-col w-full p-6">
                <div className="flex text-sm mb-6 ">
                    <button className="h-10 w-min whitespace-nowrap rounded-t bg-zinc-100 px-3 border-b-[2px] border-zinc-100 text-neutral-700">
                        Dados da conta
                    </button>
                    <button className="h-10 w-min whitespace-nowrap rounded-t bg-zinc-50 px-3 border-b-[2px] border-zinc-100 text-neutral-500">
                        Geral
                    </button>
                    <button className="h-10 w-min whitespace-nowrap rounded-t bg-zinc-50 px-3 border-b-[2px] border-zinc-100 text-neutral-500">
                        Segurança
                    </button>
                    <button className="h-10 w-min whitespace-nowrap rounded-t bg-zinc-50 px-3 border-b-[2px] border-zinc-100 text-neutral-500">
                        Integrações
                    </button>
                </div>
                <h2 className="font-bold mb-6">
                    Geral
                </h2>
                <div className="flex flex-col gap-6 text-sm">
                    <div className=" w-full h-min  flex  flex flex-col gap-2">
                        <label className=" text-sm">
                            País *
                        </label>   
                        <div className="h-10 w-[360px] border-[2px] border-zinc-200 flex  rounded-lg  items-center hover:border-zinc-300 px-3">
                            <select
                                className=" w-full h-full  outline-none bg-transparent placeholder:text-neutral-400  "
                                // name="fullName" 
                                spellCheck="false"
                                // placeholder={`${placeholder.fullName ? placeholder.fullName : "Jon Doe"}`}
                                
                                // {...register("fullName") }
                                // aria-invalid={errors.fullName ? "true" : "false"} 
                                // value={capitalizeWords(watch('fullName'))}
                                // onChange={(data) => data}
                                // onChange={(e) => e.isPropagationStopped() && }
                            >
                                <option value="brazil">Brazil</option>
                                <option value="brazil">Argentina</option>
                                <option value="brazil">United States</option>
                            </select>
                            <span className="h-10 hidden w-10 scale-90 flex items-center justify-center ">
                                <span className="loader"/>
                            </span>
                        </div>
                        {/* {errors.fullName?.message && <p className="min-h-5 text-xs text-red-400 flex gap-2 flex ">{errors.fullName?.message}</p>} */}
                    </div>
                    <div className=" w-full h-min  flex  flex flex-col gap-2">
                        <label className=" text-sm">
                            Idioma *
                        </label>   
                        <div className="h-10 w-[360px] border-[2px] border-zinc-200 flex  rounded-lg  items-center hover:border-zinc-300">
                        <select
                                className=" w-full h-full px-3 outline-none bg-transparent placeholder:text-neutral-400  "
                                // name="fullName" 
                                spellCheck="false"
                                // placeholder={`${placeholder.fullName ? placeholder.fullName : "Jon Doe"}`}
                                defaultValue={'portuguese'}
                                // {...register("fullName") }
                                // aria-invalid={errors.fullName ? "true" : "false"} 
                                // value={capitalizeWords(watch('fullName'))}
                                // onChange={(data) => data}
                                // onChange={(e) => e.isPropagationStopped() && }
                            >   <option value="portuguese">Portuguese (Brazil)</option>
                                <option value="portuguese">English (United States)</option>
                                <option value="portuguese">Spanish (Spain)</option>
                            </select>
                            <span className="h-10 hidden w-10 scale-90 flex items-center justify-center ">
                                <span className="loader"/>
                            </span>
                        </div>
                        {/* {errors.fullName?.message && <p className="min-h-5 text-xs text-red-400 flex gap-2 flex ">{errors.fullName?.message}</p>} */}
                    </div>
                    <div className=" w-full h-min  flex  flex flex-col gap-2">
                        {/* ISO 4217 Currency code */}
                        <label className=" text-sm">
                            Moeda *
                        </label>   
                        <div className="h-10 w-[360px] border-[2px] border-zinc-200 flex  rounded-lg  items-center hover:border-zinc-300">
                        <select
                                className=" w-full h-full px-3 outline-none bg-transparent placeholder:text-neutral-400  "
                                // name="fullName" 
                                spellCheck="false"
                                // placeholder={`${placeholder.fullName ? placeholder.fullName : "Jon Doe"}`}
                                
                                // {...register("fullName") }
                                // aria-invalid={errors.fullName ? "true" : "false"} 
                                // value={capitalizeWords(watch('fullName'))}
                                // onChange={(data) => data}
                                // onChange={(e) => e.isPropagationStopped() && }
                            >
                                <option value="BRL">BRL</option>
                                <option value="USD">USD</option>
                                <option value="USD">ARS</option>
                            </select>
                            <span className="h-10 hidden w-10 scale-90 flex items-center justify-center ">
                                <span className="loader"/>
                            </span>
                        </div>
                        {/* {errors.fullName?.message && <p className="min-h-5 text-xs text-red-400 flex gap-2 flex ">{errors.fullName?.message}</p>} */}
                    </div>
                    {/* <div className=" w-full h-min  flex  flex flex-col gap-2">
                        <label className=" text-sm">
                            Fuso horário *
                        </label>   
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
                    </div> */}
                    <div className="flex items-center gap-3 w-full justify-end">
                        <button
                            className="bg-green-600 hover:bg-green-500 text-xs text-white rounded font-semibold whitespace-nowrap h-10 w-full sm:w-min px-3"
                            onClick={() => { }}
                        >
                            Salvar
                        </button>
                        <button
                            onClick={(e) => e.preventDefault()}
                            className="border border-neutral-500 hbg-green-600  text-xs text-neutral-900 rounded font-semibold whitespace-nowrap h-10 w-full sm:w-min px-3"
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}


export function Security() {
    return (
        <>
            <div className="bg-white border-rounded-t flex-col w-full p-6">
                
                <div className="flex text-sm mb-6 ">
                    <button className="h-10 w-min whitespace-nowrap rounded-t bg-zinc-100 px-3 border-b-[2px] border-zinc-100 text-neutral-700">
                        Dados da conta
                    </button>
                    <button className="h-10 w-min whitespace-nowrap rounded-t bg-zinc-50 px-3 border-b-[2px] border-zinc-100 text-neutral-500">
                        Geral
                    </button>
                    <button className="h-10 w-min whitespace-nowrap rounded-t bg-zinc-50 px-3 border-b-[2px] border-zinc-100 text-neutral-500">
                        Segurança
                    </button>
                    <button className="h-10 w-min whitespace-nowrap rounded-t bg-zinc-50 px-3 border-b-[2px] border-zinc-100 text-neutral-500">
                        Integrações
                    </button>
                </div>
                <h2 className="font-bold mb-6">
                    Segurança
                </h2>
                <div className="flex flex-col gap-6 text-sm">
                    <div className=" w-full h-min  flex  flex flex-col gap-2">
                        <label className=" text-sm">
                            Admin *
                        </label>   
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
                    <div className=" w-full h-min  flex  flex flex-col gap-2">
                        <label className="text-sm flex justify-between">
                            Email *
                            <span className="underline text-blue-500 text-xs">
                                Alterar
                            </span>
                        </label>   
                        <div className="h-10  border-[2px] border-zinc-200 flex  rounded-lg  items-center hover:border-zinc-300">
                            <input
                                className=" w-full h-full px-3 outline-none bg-transparent placeholder:text-neutral-400 disabled:bg-neutral-100 disabled:text-neutral-600 "
                                // name="fullName" 
                                spellCheck="false"
                                // placeholder={`${placeholder.fullName ? placeholder.fullName : "Jon Doe"}`}
                                type="text" 
                                defaultValue={'felipe.coutinho.psl@gmail.com'}
                                disabled={true}
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
                    <div className=" w-full h-min  flex  flex flex-col gap-2">
                        <label className=" text-sm">
                            Email alternativo *
                        </label>   
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
                    <div className=" w-full h-min  flex  flex flex-col gap-2">
                        <label className="text-sm flex justify-between">
                            Senha *
                            <span className="underline text-blue-500">
                                Cadastrar
                            </span>
                        </label>   
                        <div className="h-10  border-[2px] border-zinc-200 flex  rounded-lg  items-center hover:border-zinc-300">
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
                    <div className=" w-full h-min  flex  flex flex-col gap-2">
                        <label className=" text-sm">
                            Celular *
                        </label>   
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
                </div>
            </div>
        </>
    )
}