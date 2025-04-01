'use client'

// import { Worker } from "@/app/staff/api"
import { useForm, SubmitHandler } from "react-hook-form"
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { FormEvent, useState } from "react";
import { Ban, Blocks, Check } from "lucide-react";
// import startsWith from 'lodash.startswith';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { capitalizeWords } from "@/shared/capitalizeWords";




const inputErrorMsg = {
    fullName: {
        minChar: "O mínimo é 1 caractere",
        maxChar:"O máximo é 100 caracteres",
    },
    defaultEmail: {
        min: "",
        max:"",
        invalidEmail:"Email inválido",
    },
}



const placeholder = {
    fullName: "Jonny Albuquerque",
    defaultEmail: "exemplo@seuemail.com"
}

/**
 * Nunca submeta o form para não correr os risco de enviar campos inválidos
 */

// export type Worker_ =  {
//     fullName: string   salvar como todas minusculas / Felipe Sousa
    // defaultEmail: string
    // rule: string salvar como todas minusculas
    // phone?: string "+55 21 99999-9999"
    // id?: string
    // status : string primeira me maiúscula
    // permission: string
    // contract: string
    // birthday: string YYYY-MM-DD

    // salary: string 150.50 decimal com pontos $ padrão
    // adress: string
    // // nativeCountry: string Brazil
    // // birthplace: string 
    // RG: string
    // CPF: string 12345678909
    // CTPS: string
    // TE: string
    // stateProvince: string
    // country: string
    // city: string
    // zipPostcode: string 12345678 

// }

const Worker = z.object({
    fullName: z.string()
    .min(1, `${inputErrorMsg.fullName.minChar ? inputErrorMsg.fullName.minChar :'min 1'}`)
    .max(100, `${inputErrorMsg.fullName.maxChar ? inputErrorMsg.fullName.maxChar : 'max 100'}`)
    .toLowerCase(),
    
    defaultEmail: z.string()
    .email("This email is invalid")
    .toLowerCase(),

    cpf: z.number({required_error: "dkfldkfldkfl", message: "jkfjgkf"}).gte(9).lte(9, "fkdjfdkjf").int().positive().min(9).max(9, "fjgkfjgkjgfk")

});

type WorkerP = z.infer<typeof Worker>

export default function RegisterWorker() {

    const {
       
        reset,
        resetField,
        getValues,
        control,
        clearErrors,
        setValue,
        setFocus,
        setError,
        getFieldState,
        register,
        handleSubmit,
        watch,
        formState: { errors, isValid, isDirty, isLoading },
    } = useForm<WorkerP>({ mode: 'all', resolver: zodResolver(Worker) })

    const onSubmit: SubmitHandler<WorkerP> = (data) => console.log(data)

    const [ phone, setPhone ] = useState<string>()

    const prevent = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

   

    return (

        <div className="h-full">
   
        <form  onSubmit={ prevent } className="w-1/2 h-full flex flex-col p-10 bg-white gap-5 text-sm">
            {/* name */}
            <div className=" w-full h-min  flex  flex flex-col gap-2">
                <span>Name *</span>   
                <div className="h-12 w-full border-[2px] border-zinc-200 flex  rounded-lg  items-center hover:border-zinc-400">
                    <input
                        className=" w-full h-full px-3 outline-none bg-transparent placeholder:text-neutral-400  "
                        // name="fullName" 
                        spellCheck="false"
                        placeholder={`${placeholder.fullName ? placeholder.fullName : "Jon Doe"}`}
                        type="text" 
                        {...register("fullName") }
                        aria-invalid={errors.fullName ? "true" : "false"} 
                        value={capitalizeWords(watch('fullName'))}
                        // onChange={(data) => data}
                        // onChange={(e) => e.isPropagationStopped() && }
                    />
                    <span className="h-10 hidden w-10 scale-90 flex items-center justify-center ">
                        <span className="loader"/>
                    </span>
                </div>
                {
                    errors.fullName?.message && 
                    <p className="min-h-5 text-xs text-red-400 flex gap-2 flex ">
                        {errors.fullName?.message}
                    </p>
                }
            </div>

            <div className=" w-full h-min  flex  flex flex-col gap-2">

                <span>Email</span>

                <div className="h-12 w-full border-[2px] px-1 border-zinc-200 flex  rounded-lg  items-center ">

                    <input
                        className="  w-full h-full px-2 outline-none bg-transparent placeholder:text-neutral-400 lowercase"
                        // name="fullName" 
                        placeholder={`${placeholder.defaultEmail ? placeholder.defaultEmail : 'exemple@youremail.com'}`}
                        type="text" 
                        spellCheck="false"
                        {...register("defaultEmail") }
                        aria-invalid={errors.defaultEmail ? "true" : "false"} 
                        // pattern="/^[A-Za-z]+$/i"
                        value={watch("defaultEmail")}
                    />

                    <span className="w-8 h-8 flex items-center justify-center ">

                        { errors.defaultEmail?.message &&  watch("defaultEmail") ? <span className="h-8 h-8 flex items-center justify-center text-red-400 "><Ban  size={14}/></span> : watch("defaultEmail") && <span className="w-8 h-8 flex items-center justify-center "><Check color='green' size={16}/></span> }

                    </span>

                </div>
           
                { errors.defaultEmail?.message && getValues("defaultEmail") && <p className="min-h-5 text-xs text-red-400 flex gap-2 flex ">{inputErrorMsg.defaultEmail.invalidEmail ? inputErrorMsg.defaultEmail.invalidEmail : errors.defaultEmail?.message}</p> }

            </div>

            <div className=" w-full flex  flex flex-col gap-3">

                <span>Celular</span>

                <div className="px-1 h-12 w-full border-[2px] border-zinc-200 flex  rounded-lg  items-center  ">

                    <PhoneInput
                        // isValid={(inputNumber, country, countries) => {
                        //     return countries.some((country) => {
                        //     return startsWith(inputNumber, country.dialCode) || startsWith(country.dialCode, inputNumber);
                        //     });
                        // }}
                    
                       containerStyle={{width:"100%", height:"100%", border:"none", backgroundColor:"transparent"}}
                       inputStyle = {
                        {width: "100%",
                             height:"100%",
                           borderRadius: "none",
                            border: "none",
                            backgroundColor:"transparent"
                        }
                       }
                       buttonStyle = {{height:"100%", border:"none", backgroundColor:"transparent"}}
                        country={'us'}
                        inputProps={{
                            name: 'phone',
                            required: true,
                          
                          }}
                        enableAreaCodes = {true}
                         defaultErrorMessage="kfdlfkdf"
                         
                         value={phone}
                         onChange={() => setPhone(phone)}
                    />

                </div>

            </div>

             <div className=" w-full flex  flex flex-col gap-3">

                <span>Cargo *</span>

                <div className="h-12 px-2 w-full border-[2px] border-zinc-200 flex  rounded-lg  items-center ">

                    <select className=" w-full h-full  outline-none bg-transparent placeholder:text-neutral-400 ">
                       
                        <option value="Freelance">Administrador</option>
                        <option value="Freelance">Gerente</option>
                        <option  value="CLT">Colaborador</option>
                    </select>

                    {/* <input
                        className=" w-full h-full px-3 outline-none bg-transparent placeholder:text-neutral-400 lowercase"
                        name="fullName" 
                        placeholder=""
                        type="text" 
                    /> */}

                </div>

            </div>

            <div className=" w-full flex  flex flex-col gap-3">

                <span>Contrato</span>

                <div className="px-2 h-12 w-full border-[2px] border-zinc-200 flex  rounded-lg  items-center ">

                    <select className=" w-full h-full  outline-none bg-transparent placeholder:text-neutral-400 ">
                        <div className="h-8 w-full">
                            <option value="Freelance">Freelance</option>
                        </div>
                        <option value="Freelance">Freelance</option>
                        <option  value="CLT">CLT</option>
                    </select>

                    {/* <input
                        className=" w-full h-full px-3 outline-none bg-transparent placeholder:text-neutral-400 lowercase"
                        name="fullName" 
                        // placeholder="Nome Completo"
                        type="text" 
                    /> */}

                </div>

            </div>

            <div className=" w-full flex  flex flex-col gap-3">

                <span>Data de Nascimento</span>

                <div className="h-12 w-full border-[2px] border-zinc-200 flex  rounded-lg  items-center ">

                    <input
                        className=" w-full h-full px-3 outline-none bg-transparent placeholder:text-neutral-400 lowercase placeholder:text-xs"
                        name="fullName" 
                        placeholder="DD/MM/AAAA"
                        type="date" 
                        value={'12/08/1992'}
                    />

                </div>

            </div>

             {/*<div className=" w-full flex  flex flex-col gap-3">

                <span>Contrato</span>

                <div className="h-12 w-full border-[2px] border-zinc-200 flex  rounded-lg  items-center ">

                    <input
                        className=" w-full h-full px-3 outline-none bg-transparent placeholder:text-neutral-400 lowercase"
                        name="fullName" 
                        // placeholder=""
                        type="text" 
                    />

                </div>

            </div> */}

            <div className=" w-full flex  flex flex-col gap-3">

                <span>CPF</span>

                <div className="h-12 w-full border-[2px] border-zinc-200 flex  rounded-lg  items-center ">

                    <input
                     {...register("cpf")}
                        className=" w-full h-full px-3 outline-none bg-transparent placeholder:text-neutral-400 lowercase no-spinner"
                        // name="fullName" 
                        placeholder="012.345.678-91"
                        type="text" 
                        maxLength={11}
                        pattern="/^\d+$/"
                    
                    />

                </div>

                {errors.cpf?.message && getValues("cpf") && <p className="min-h-5 text-xs text-red-400 flex gap-2 flex ">{errors.cpf?.message}</p>}

            </div>

            <div className=" w-full flex  flex flex-col gap-3">

                <span>Conta</span>

                <div className="h-12 w-full border-[2px] border-zinc-200 flex  rounded-lg  items-center ">

                    <input
                        className=" w-full h-full px-3 outline-none bg-transparent placeholder:text-neutral-400 lowercase"
                        name="fullName" 
                        placeholder="Nome Completo"
                        type="text" 
                    />

                </div>

            </div>

            <div className=" w-full flex  flex flex-col gap-3">

                <span>Pix</span>

                {/* Brazilian instant payment service: Key and key type */}

                <div className="h-12 w-full border-[2px] border-zinc-200 flex  rounded-lg  items-center ">

                    <input
                        className=" w-full h-full px-3 outline-none bg-transparent placeholder:text-neutral-400 lowercase"
                        name="fullName" 
                        placeholder="Nome Completo"
                        type="text" 
                    />

                </div>

            </div>

           {
                isValid && isDirty ?

                <button  type="submit" className='h-10 w-full px-3 whitespace-nowrap  text-white text-sm font-semibold rounded bg-teal-600 hover:bg-teal-500 flex gap-2 items-center justify-center  '>
                    Cadastrar 
                </button> 

                : 
                
                <button
               
                disabled 
                type="submit" 
                className='h-10 w-full px-3 whitespace-nowrap  text-white text-sm font-semibold rounded bg-teal-600  flex gap-2 items-center justify-center border-2 border-teal-600  disabled:opacity-30'>
                    Cadastrar
                </button>
           }
        
        </form>
        
        </div>
    )
}

