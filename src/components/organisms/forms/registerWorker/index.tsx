'use client'

import { Worker } from "@/app/staff/api"
import { useForm, SubmitHandler } from "react-hook-form"


export type Worker_ =  {
    fullName: string
    // defaultEmail: string
    // rule: string
    // phone?: string
    // id?: string
    // status : string
    // permission: string
    // contract: string
    // birthday: string
    // salary: string
    // adress: string
    // // nativeCountry: string
    // // birthplace: string
    // docs_ptBR: string
    // RG: string
    // CPF: string
    // CTPS: string
    // TE: string
    // stateProvince: string
    // country: string
    // city: string
    // zipPostcode: string

}


export default function RegisterWorker() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Worker>()

    const onSubmit: SubmitHandler<Worker> = (data) => console.log(data)

    console.log(watch("fullName")) // watch input value by passing the name of it

    return (
   
        <form  onSubmit={handleSubmit(onSubmit)} className="w-1/2 h-full flex flex-col p-10 bg-white gap-5 text-sm">
        
            <div className=" w-full flex  flex flex-col gap-2">

                <span>Name</span>

                <div className="h-10 border border-zinc-300 flex flex-col rounded  justify-center">

                    <input
                        className=" w-full h-full px-3"
                        // name="fullName" 
                        placeholder="Nome Completo"
                        type="text" 
                        {...register("fullName") }
                        maxLength={20}
                        pattern="/^[A-Za-z]+$/i"
                    />

              
                </div>

            </div>

            <div className="w-full flex  flex flex-col gap-3">

                <span>Email</span>

                <div className="h-10 border border-zinc-300 flex flex-col rounded  justify-center">

                    <input
                        className=" w-full h-full px-3"
                        name="fullName" 
                        placeholder="Nome Completo"
                        type="text" 
                    />

                </div>

            </div>

            <div className=" w-full flex  flex flex-col gap-3">

                <span>Telefone</span>

                <div className="h-10 border border-zinc-300 flex flex-col justify-center rounded">

                    <input
                        className=" w-full h-full px-3"
                        name="fullName" 
                        placeholder="Nome Completo"
                        type="text" 
                    />

                </div>

            </div>

             <div className=" w-full flex  flex flex-col gap-3">

                <span>Cargo</span>

                <div className="h-10 border border-zinc-300 flex flex-col justify-center rounded">

                    <input
                        className=" w-full h-full px-3"
                        name="fullName" 
                        placeholder="Nome Completo"
                        type="text" 
                    />

                </div>

            </div>

            <div className=" w-full flex  flex flex-col gap-3">

                <span>Contrato</span>

                <div className="h-10 border border-zinc-300 flex flex-col justify-center rounded">

                    <input
                        className=" w-full h-full px-3"
                        name="fullName" 
                        placeholder="Nome Completo"
                        type="text" 
                    />

                </div>

            </div>

            <div className=" w-full flex  flex flex-col gap-3">

                <span>Data de Nascimento</span>

                <div className="h-10 border border-zinc-300 flex flex-col justify-center rounded">

                    <input
                        className=" w-full h-full px-3"
                        name="fullName" 
                        placeholder="Nome Completo"
                        type="text" 
                    />

                </div>

            </div>

             <div className=" w-full flex  flex flex-col gap-3">

                <span>Salário</span>

                <div className="h-10 border border-zinc-300 flex flex-col justify-center rounded">

                    <input
                        className=" w-full h-full px-3"
                        name="fullName" 
                        placeholder="Nome Completo"
                        type="text" 
                    />

                </div>

            </div>

             <div className=" w-full flex  flex flex-col gap-3">

                <span>Contrato</span>

                <div className="h-10 border border-zinc-300 flex flex-col justify-center rounded">

                    <input
                        className=" w-full h-full px-3"
                        name="fullName" 
                        placeholder="Nome Completo"
                        type="text" 
                    />

                </div>

            </div>

            <div className=" w-full flex  flex flex-col gap-3">

                <span>CPF</span>

                <div className="h-10 border border-zinc-300 flex flex-col justify-center rounded">

                    <input
                        className=" w-full h-full px-3"
                        name="fullName" 
                        placeholder="Nome Completo"
                        type="text" 
                    />

                </div>

            </div>

            <div className=" w-full flex  flex flex-col gap-3">

                <span>RG</span>

                <div className="h-10 border border-zinc-300 flex flex-col justify-center rounded">

                    <input
                        className=" w-full h-full px-3"
                        name="fullName" 
                        placeholder="Nome Completo"
                        type="text" 
                    />

                </div>

            </div>

             <div className=" w-full flex  flex flex-col gap-3">

                <span>Titulo de Eleitor</span>

                <div className="h-10 border border-zinc-300 flex flex-col justify-center rounded">

                    <input
                        className=" w-full h-full px-3"
                        name="fullName" 
                        placeholder="Nome Completo"
                        type="text" 
                    />

                </div>

            </div>

            <div className=" w-full flex  flex flex-col gap-3">

                <span>Título de Eleitor</span>

                <div className="h-10 border border-zinc-300 flex flex-col justify-center rounded">

                    <input
                        className=" w-full h-full px-3"
                        name="fullName" 
                        placeholder="Nome Completo"
                        type="text" 
                    />

                </div>

            </div>

            <div className=" w-full flex  flex flex-col gap-3">

                <span>CTPS</span>

                <div className="h-10 border border-zinc-300 flex flex-col justify-center rounded">

                    <input
                        className=" w-full h-full px-3 px-3"
                        name="fullName" 
                        placeholder="Nome Completo"
                        type="text" 
                    />

                </div>

            </div>

        </form>
    )
}

