'use client'
import { CalendarDays, ChevronLeft, ChevronRight, Plus, Search, UserRound, Watch } from "lucide-react";
import { useForm, SubmitHandler, UseFormSetValue, Controller, useFieldArray } from "react-hook-form"
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { capitalizeWords } from "@/utils/capitalizeWords";
import React, { FormEvent, useEffect, useMemo, useState } from "react";
import { textWithoutSpecials } from "@/utils/textWithoutSpecials";
import { phoneFormatter } from "@/utils/phoneFormatter";
// import { createCustomerData, findName } from "./new-sale.model";
import { discountTypeSchema, newSaleSchema } from "./new-sale-schema";
import { addFriend, FriendList } from "@/layout/templates/PDV/PDV.model";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import PropTypes from 'prop-types'
import BasicCalendar from "../../calendar";
import Schedule from "../../schedule/schedule.view";
import { extractNumbers } from "@/utils/extractNumbers";
import { numberInRange0to100 } from "./new-sale.model";
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"


export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}


type Props = {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

// type service = {
//     title: string
//     // datetime: string
//     id: number
//     start: Date
//     end: Date
//     tasks: [
//         {
//             service:string,
//             imgs: []
//         }
//     ]
//     // saleID: string
//     info: string
//     status: string
// }

const srv = {
    item: undefined,                     
    details: undefined,              
    price_USD: undefined,                    
    discount:undefined,
    duration: undefined,              
    scheduledDate: undefined,                         
    scheduledTime:  undefined,              
    deliveryDate: undefined,              
    deliveryTime: undefined,              
    catergory: undefined,              
}

type NewSaleProtocol = z.infer<typeof newSaleSchema>

const hours = Array.from({ length: 23 }, (_, index) => index + 0);

const minutes = Array.from({ length: 59 }, (_, index) => index + 0);

export function NewSale({
    setShowModal
}:Props) {
    const [inputDiscount, setInputDiscount] = useState<string | undefined>();
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [name, setName] = useState()
    const [customerData, setCustomerData] = useState()
    const [serviceList, setServiceList] = useState()
    const [selectedValue, setSelectedValue] = useState("");
    const [doNotSchedule, setDoNotSchedule] = useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(event.target.value);
    };

    const num = extractNumbers(inputDiscount);

    useEffect(() => {

    }, [])

    const {
        register,
        watch,
        formState: { errors, isValid, isDirty, isLoading },
        control,
        
    } = useForm<NewSaleProtocol>({ 
        mode: 'all', 
        resolver: zodResolver(newSaleSchema),
        // defaultValues: {
        //     servicesList: [{ value: "" }] 
        // }

    })

    const { fields:serviceFilds, append:serviceAppend, remove:serviceRemove } = useFieldArray({control, name:'servicesList'})
    const { fields, append, remove } = useFieldArray({control, name:'payment'})

    const prevent = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    function newService() {
        append(srv)
    }

    return (
        <div 
            onChange={() => setShowModal(false)}
            className="fixed w-full h-[calc(100%-48px)] sm:h-[calc(100%-64px)] right-0 top-14 z-100 overflow-y-scroll bg-[rgba(1,1,1,0.5)] flex justify-end">
            <form
                onChange={(e) => e.stopPropagation()}
                onSubmit={prevent}
                className='w-full max-w-[490px] h-full px-6 py-6 bg-white  overflow-y-scroll overflow-x-hidden  border-r border-l border-zinc-200 gyhd '>
                {/* <div className="fixed w-full bg-white flex items-center justify-between 0,0gap-5 h-12 -mt-6 mb-10 border-b bg-red-0 -ml-6 px-6">
                    <div className="h-5 w-5 rounded-full  flex items-center justify-center text-sm border border-black overflow-hidden">
                        <UserRound 
                            strokeWidth={1} 
                            size={14} 
                        />
                    </div>
                    <div className="h-5 w-5 rounded-full flex items-center justify-center text-sm border border-black overflow-hidden">
                        <UserRound 
                            strokeWidth={1} 
                            size={14} 
                        />
                    </div>
                    <div className="h-5 w-5 rounded-full flex items-center justify-center text-sm border border-black overflow-hidden">
                        <UserRound 
                            strokeWidth={1} 
                            size={14} 
                        />
                    </div>
                    <div className="h-5 w-5 rounded-full flex items-center justify-center text-sm border border-black overflow-hidden">
                        <UserRound 
                            strokeWidth={1} 
                            size={14} 
                        />
                    </div>
                    <div className="h-5 w-5 rounded-full flex items-center justify-center text-sm border border-black overflow-hidden">
                        <UserRound 
                            strokeWidth={1} 
                            size={14} 
                        />
                    </div>
                    <div className="h-5 w-5 rounded-full flex items-center justify-center text-sm border border-black overflow-hidden">
                        <UserRound 
                            strokeWidth={1} 
                            size={14} 
                        />
                    </div>
                </div> */}
                <h2 className=' w-full text-xl font-bold mb-6 mt-12'>
                    Nova venda
                </h2>
                <div className="w-full ">
                    <div className="">
                    </div>
                    <span className="flex justify-between items-center bg-neutral-00 mt-0 mb-5">
                        <h3 className='text-md font-bold '>
                            Dados do Cliente
                        </h3>
                        <div className='flex  gap-1 text-gray-700'>
                            <button className='flex items-center gap-2 text-sm bg-zinc-0 h-10 px-3 w-min whitespace-nowrap  rounded'>
                                <Search size={18} />
                            </button>
                        </div>
                    </span>
                    {/* <div className='flex  gap-3 text-gray-700 mb-4'>
                        <button className='flex items-center gap-2 text-sm bg-zinc-100 h-10 px-3 w-min whitespace-nowrap  rounded'>
                            <Search size={18}/>
                            Pesquisar cliente
                        </button>
                    </div> */}
                    {/* name */}
                    <div className='gap-2 h-min mb-4 flex flex-col'>
                        <label className="text-sm text-gray-700">
                            Nome *
                        </label>
                        <div className="h-12 w-full border-[2px] border-zinc-200 flex rounded-lg  items-center hover:border-zinc-400">
                            <input
                                data-test="full-name"
                                className="text-sm w-full h-full px-3 outline-none bg-transparent placeholder:text-neutral-400 outline-none placeholder:text-sm"
                                // name="fullName" 
                                spellCheck="false"
                                placeholder={"Ricardo Albuquerque"}
                                type="text"
                                {...register("name", { pattern: /^[A-Za-z]+$/i })}
                                aria-invalid={errors.name ? "true" : "false"}
                                value={capitalizeWords(watch('name'))}
                            />
                            <span className="h-10 hidden w-10 scale-90 flex items-center justify-center ">
                                <span className="loader" />
                            </span>
                        </div>
                        {
                            errors.name?.message &&
                            <p className="min-h-5 text-xs text-red-400 flex gap-2 flex ">
                                {errors.name?.message}
                            </p>
                        }
                    </div>
                    {/* phone */}
                    <div className='gap-2 h-min mb-4'>
                        <span className='mb-2'>
                            <label className='text-xs mb-4 text-gray-700'>
                                Telefone *
                            </label>
                        </span>
                        <br />
                        <input
                            {...register('phone')}
                            placeholder="1 999-9999"
                            type="text"
                            className='outline-none w-full mt-2 text-sm h-12 border border-zinc-300 rounded pl-5 '
                            minLength={13}
                            maxLength={14}
                            spellCheck="false"
                        // value={phoneFormatter(watch("phone"))}
                        />
                        {
                            errors.phone?.message &&
                            <p className="min-h-5 text-xs text-red-400 flex gap-2 flex ">
                                {errors.phone?.message}
                            </p>
                        }
                    </div>
                    <div className='gap-2 h-min mb-4'>
                        <span className='mb-2'>
                            <label className='text-sm mb-4 text-gray-700'>
                                Email
                            </label>
                        </span>
                        <br />
                        <input
                            {...register('email')}
                            placeholder="exemple@youremail.com"
                            className='outline-none w-full mt-2 text-sm h-12 border border-zinc-300 rounded pl-5'
                            value={watch('email')}
                            type="text"
                            minLength={1}
                            spellCheck="false"
                            maxLength={50}
                        />
                        {
                            errors.email?.message &&
                            <p className="min-h-5 text-xs text-red-400 flex gap-2 flex ">
                                {errors.email?.message}
                            </p>
                        }
                    </div>
                    {/* name */}
                    <div className='gap-2 h-min mb-4 flex flex-col'>
                        <label className="text-sm text-gray-700">
                            CPF/CNPJ
                        </label>
                        <div className="h-12 w-full border-[2px] border-zinc-200 flex rounded-lg  items-center hover:border-zinc-400">
                            <input
                                className="text-sm w-full h-full px-3 outline-none bg-transparent placeholder:text-neutral-400 outline-none placeholder:text-sm"
                                // name="fullName" 
                                spellCheck="false"
                                placeholder={"Ricardo Albuquerque"}
                                type="text"
                                {...register("name", { pattern: /^[A-Za-z]+$/i })}
                                aria-invalid={errors.name ? "true" : "false"}
                                value={capitalizeWords(watch('name'))}
                            />
                            <span className="h-10 hidden w-10 scale-90 flex items-center justify-center ">
                                <span className="loader" />
                            </span>
                        </div>
                        {
                            errors.name?.message &&
                            <p className="min-h-5 text-xs text-red-400 flex gap-2 flex ">
                                {errors.name?.message}
                            </p>
                        }
                    </div>
                    <button className='text-xs'>
                        ADICIONAR ENDEREÇO
                    </button>
                </div>
                {/* <div className="w-full ">
                    <h3 className='text-md font-bold mt-10 mb-5'>Informações do veículo</h3>
                    <div className="flex flex-col w-full  mb-4">
                        <p className="block text-sm  text-gray-700">Para o veículo</p>
                        <div className="w-full mt-2 text-sm h-12 border border-zinc-300 px-2 rounded">
                            <select className="w-full h-full bg-white outline-none" id="cars">
                                <option className="h-8" value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option>
                                <option value="saab">Saab</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex gap-3 mb-4 ">
                        <div className="flex flex-col w-full">
                            <p className="block text-sm  text-gray-700">Marca</p>
                            <input aria-label="" type="text" placeholder="" className='outline-none w-full mt-2 text-sm h-12 border border-zinc-300 rounded px-5'></input>
                        </div>
                        <div className="flex flex-col w-full">
                            <p className="block text-sm  text-gray-700">Modelo</p>
                            <input aria-label="" type="text" placeholder="" className='outline-none w-full mt-2 text-sm h-12 border border-zinc-300 rounded px-5'></input>
                        </div>
                        <div className="flex flex-col w-full">
                            <p className="block text-sm  text-gray-700">Placa</p>
                            <input aria-label="" type="text" placeholder="" className='outline-none w-full mt-2 text-sm h-12 border border-zinc-300 rounded px-5'></input>
                        </div>
                    </div>
                </div> */}
                <div className="w-full ">
                    <span className="flex justify-between items-center bg-neutral-00 mt-10 mb-5">
                        <h3 className='text-md font-bold '>
                            Cadastrar serviço
                        </h3>
                        <div className='flex  gap-1 text-gray-700'>
                            <button title="Add" onClick={() => newService()} className='flex items-center gap-2 text-sm bg-zinc-0 h-10 px-3 w-min whitespace-nowrap rounded'>
                                <Plus size={22} />
                            </button>
                        </div>
                    </span>
                    {/* service */}
                    {fields.map((field, index) => {
                        return (
                            <>
                                <div className='gap-2 h-min mb-4' key={field.id}>
                                    <span className='mb-2'>
                                        <label className='text-sm mb-4 text-gray-700'>
                                            Serviço (item)
                                        </label>
                                    </span>
                                    <br />
                                    <div className="flex ">
                                        <input 
                                            placeholder="Digite ou selecione" 
                                            className='outline-none w-full mt-2 text-sm h-12 border border-zinc-300 rounded pl-5' 
                                        />
                                        <button className='flex items-center gap-2 text-sm bg-zinc-0 h-10 px-3 w-min whitespace-nowrap rounded'>
                                            <Search size={18} />
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-col w-full  mb-4">
                                    <p className="block text-sm text-gray-700">
                                        Para o veículo {selectedValue}
                                    </p>
                                    <div className="w-full mt-2 text-sm h-12 border border-zinc-300 px-2 rounded">
                                        <select
                                            value={selectedValue} 
                                            onChange={handleChange}
                                            className="w-full h-full bg-white outline-none" 
                                            id="cars"
                                        >
                                            <option className="h-8" value="select">selecionar</option>
                                            <option value="BRA4E54 - HB20 - Hyundai">BRA4E54 - HB20 - Hyundai</option>
                                            <option className="h-8" value="volvo">Volvo</option>
                                            <option value="opel">Opel</option>
                                            <option value="audi">Audi</option>
                                            <option value="saab">Saab</option>
                                            <option value="opel">Opel</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex gap-3 mb-4 ">
                                    <div className="flex flex-col w-full">
                                        <p className="block text-sm text-gray-700">
                                            Marca
                                        </p>
                                        <input
                                            // name='brand'
                                            maxLength={30}
                                            aria-label="" 
                                            type="text" 
                                            placeholder=""
                                            disabled={selectedValue === 'select' ? false : true}
                                            className=' disabled:bg-neutral-100 disabled:text-neutral-500 outline-none w-full mt-2 text-sm h-12 border border-zinc-300 rounded px-5'
                                        ></input>
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <p className="block text-sm  text-gray-700">
                                            Modelo
                                        </p>
                                        <input
                                            disabled={selectedValue === 'select' ? false : true}
                                            aria-label="" 
                                            type="text"  
                                            maxLength={30} 
                                            placeholder="" 
                                            className='disabled:bg-neutral-100 outline-none w-full mt-2 text-sm h-12 border border-zinc-300 rounded px-5'
                                        ></input>
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <p className="block text-sm  text-gray-700">
                                            Placa
                                        </p>
                                        <input
                                            disabled={selectedValue === 'select' ? false : true}
                                            aria-label=""
                                            maxLength={30}
                                            type="text" 
                                            placeholder="" 
                                            className='disabled:bg-neutral-100 disabled:text-neutral-300 outline-none w-full mt-2 text-sm h-12 border border-zinc-300 rounded px-5'
                                        ></input>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <span className="text-sm text-zinc-700">
                                        Detalhes
                                    </span>
                                    <textarea 
                                        className='mt-2 flex gap-3 w-full h-24 border border-zinc-300 rounded'
                                        maxLength={300} 
                                    />
                                </div>
                                <div className='gap-2 h-min mb-4'>
                                    <span className='mb-2'>
                                        <label className='text-sm mb-4 text-gray-700'>
                                            Duração do serviço
                                        </label>
                                    </span>
                                    <br />
                                    <div className="flex ">
                                        <input 
                                            placeholder="00:00" 
                                            className='outline-none w-full mt-2 text-sm h-12 border border-zinc-300 rounded pl-5' 
                                        />
                                    </div>
                                </div>
                                <div className=" w-full">
                                    {/* <h3 className="text-xs font-bold  mt-6 mb-5">Agenda</h3> */}
                                    <Schedule />
                                    <div className="flex gap-3 items-center">
                                        <p className="block text-sm  text-gray-700">
                                            Não agendar 
                                        </p>
                                        <Switch
                                            checked={doNotSchedule}
                                            onCheckedChange={() => setDoNotSchedule(doNotSchedule == false ? true : false)}
                                        />
                                        {/* <button className="h-9 w-16 rounded-full flex border px-1 items-center scale-50">
                                            <div className="h-7 w-7 rounded-full bg-neutral-300" />
                                        </button> */}
                                    </div>
                                    {/* start date */}
                                    { !doNotSchedule && <div>
                                        <div className="flex gap-3">
                                            <div className="flex flex-col w-full">
                                                <p className="block text-sm  text-gray-700">
                                                    Data e hora de entrada
                                                </p>
                                                <div className="flex flex gap-3">
                                                    <input
                                                        className="outline-none w-full mt-2 text-sm h-12 border border-zinc-300 rounded px-5"
                                                        // name="fullName" 
                                                        spellCheck="false"
                                                        type="date"
                                                        {...register(`servicesList.${index}.scheduledDate`)}
                                                        aria-invalid={errors.date ? "true" : "false"}
                                                    />
                                                    <input
                                                        className="outline-none w-full mt-2 text-sm h-12 border border-zinc-300 rounded px-5"
                                                        // name="scheduledTime" 
                                                        placeholder="00:00"
                                                        maxLength={5}
                                                        spellCheck="false"
                                                        type="text"
                                                        {...register(`servicesList.${index}.scheduledDate`)}
                                                        aria-invalid={errors.date ? "true" : "false"}
                                                    />
                                                </div>
                                                {
                                                    // errors.scheduledDate?.message &&
                                                    // <p className="min-h-5 text-xs text-red-400 flex gap-2 flex ">
                                                    //     {errors.scheduledDate?.message}
                                                    // </p>
                                                }
                                                {
                                                    // errors.scheduledTime?.message &&
                                                    // <p className="min-h-5 text-xs text-red-400 flex gap-2 flex ">
                                                    //     {errors.scheduledTime?.message}
                                                    // </p>
                                                }
                                            </div>
                                        </div>
                                        <div className="flex gap-3">
                                            <div className="flex flex-col w-full">
                                                <div className="flex items-center gap-2">
                                                    <p className="block text-sm  text-gray-700">
                                                        Data e hora de entrega
                                                    </p>
                                                    <button className="h-9 w-16 rounded-full flex border px-1 items-center scale-50">
                                                        <div className="h-7 w-7 rounded-full bg-neutral-300" />
                                                    </button>
                                                </div>

                                                <div className="flex flex gap-3">
                                                    <input 
                                                        aria-label="Data" 
                                                        type="date"
                                                        {...register(`servicesList.${index}.scheduledDate`)}
                                                        placeholder="Data" 
                                                        className='outline-none w-full mt-2 text-sm h-12 border border-zinc-300 rounded px-5'
                                                    />
                                                    <input
                                                    {...register(`servicesList.${index}.scheduledDate`)}
                                                        aria-label="Hora"
                                                        maxLength={5}
                                                        // minLength={8}
                                                        type="text"
                                                        placeholder="00:00" 
                                                        className='outline-none w-full mt-2 text-sm h-12 border border-zinc-300 rounded px-5'
                                                    />
                                                </div>
                                                {/* {
                                                    errors.deliveryDate?.message &&
                                                    <p className="min-h-5 text-xs text-red-400 flex gap-2 flex ">
                                                        {errors.deliveryDate?.message}
                                                    </p>
                                                } */}
                                                {/* {
                                                    errors.deliveryTime?.message &&
                                                    <p className="min-h-5 text-xs text-red-400 flex gap-2 flex ">
                                                        {errors.deliveryTime?.message}
                                                    </p>
                                                } */}

                                                <p className="block text-sm  text-gray-700">
                                                Vaga
                                                </p>
                                                <div className="w-full mt-2 text-sm h-12 border border-zinc-300 px-2 rounded flex items-center">
                                                    <select
                                                        // value={selectedValue} 
                                                        // onChange={handleChange}
                                                        className="w-full h-full bg-white outline-none mr-2" 
                                                        id="cars"
                                                    >
                                                        <option className="" value="vaga 1">Vaga 1</option>
                                                        <option value="Vaga 2">Vaga 2</option>
                                                    </select>
                                                    <div>
                                                        <CalendarDays size={17}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>}
                                </div>
                                <div className="flex flex-col w-full mb-4">
                                    <p className="block text-sm text-gray-700">
                                        Preço
                                    </p>
                                    <input
                                        {...register("totalPriceBRL")}
                                        aria-label="Valor"
                                        placeholder="0,00"
                                        type="text" // decimal number
                                        className='outline-none w-full mt-2 text-sm h-12 border border-zinc-300 rounded px-5'
                                        value={watch('totalPriceBRL')}
                                    />
                                
                                </div>
                                {/* <button className='flex items-center gap-2 text-sm bg-zinc-100 h-10 px-3 w-min whitespace-nowrap rounded mt-10'>
                                    Aplicar desconto
                                </button> */}
                                {/* <h4 className='text-xs font-bold  mt-6 mb-5'>Desconto</h4> */}
                                <div className="flex gap-2 mb-4">
                                <Tabs defaultValue="percentage" className="max-w-[400px] w-full text-sm">
                                    <TabsList>
                                        <TabsTrigger value="percentage" >
                                            Porcentagem
                                        </TabsTrigger>
                                        <TabsTrigger value="code">
                                            Código
                                        </TabsTrigger>
                                    </TabsList>
                                    <TabsContent value="percentage">
                                    <div className="w-full outline-none text-sm h-12 border border-zinc-300 rounded  relative flex items-center ">
                                            <input 
                                                {...register("discount")}
                                                value={watch('discount')}
                                                type="text"
                                                maxLength={3}
                                                placeholder="%" 
                                                className='pl-3 w-full h-full '
                                            />
                                        </div>
                                        {watch('discount')}
                                    </TabsContent>
                                    <TabsContent value="code">
                                        <div className="w-full outline-none text-sm h-12 border border-zinc-300 rounded  relative flex items-center ">
                                            <input 
                                                {...register("discount")}
                                                value={watch('discount')}
                                                type="text"
                                                maxLength={4}
                                                placeholder="" 
                                                className='pl-3 w-full h-full '
                                    
                                                onChange={e => {
                                                }}
                                            />
                                        </div>
                                        {watch('discount')}
                                    </TabsContent>
                                </Tabs>
                                    {/* <button className="h-8 w-min px-3 text-xs rounded-full bg-zinc-500 hover:bg-zinc-400 focus:bg-zinc-700 text-white font-medium">
                                        Porcentagem
                                    </button>
                                    <button className="h-8 w-min px-3 text-xs rounded-full bg-zinc-500 hover:bg-zinc-400 focus:bg-zinc-700 text-white font-medium">
                                        Código
                                    </button>
                                    <button className="h-8 w-min px-3 text-xs rounded-full bg-zinc-500 hover:bg-zinc-400 focus:bg-zinc-700 text-white font-medium">
                                        Moeda
                                    </button> */}
                                </div>
                                {/* <Controller
                                    name="discount"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <input
                                            type="text"
                                            {...field}
                                            placeholder="%"
                                            maxLength={3}
                                            className='w-full outline-none text-sm h-12 border border-zinc-300 rounded pl-5'
                                            value={`${watch('discount') === undefined ? "" : watch('discount')}`}
                                            onChange={(e) => {
                                                const value = e.target.value.trim(); 
                                                const number = extractNumbersAndReturnNumber(value);
                                                const text =  number.toString()
                                                // field.onChange(text); 
                                                setInputDiscount(text)
                                                }
                                            }
                                        />
                                    )}
                                /> */}
                                {/* <div className="w-full outline-none text-sm h-12 border border-zinc-300 rounded  relative flex items-center ">
                                    <input 
                                        // {...register("discount")}
                                        type="text"
                                        maxLength={4}
                                        placeholder="%" 
                                        className='pl-3 w-full h-full '
                                        defaultValue={''}
                                        onChange={e => {
                                        }}
                                    />
                                </div> */}
                            </>
                        )
                    })}
                    {/* valor em moeda: 5.00 <p>{watch('discount')}</p>
                    {watch('discount') + "%"} 
                    {inputDiscount}
                    {
                        errors.discount?.message &&
                        <p className="min-h-5 text-xs text-red-400 flex gap-2 flex ">
                            {errors.discount?.message}
                        </p>
                    }
                </div>
                <div className=" w-full ">
                    <span className="flex justify-between items-center bg-neutral-00 mt-10 mb-5">
                        <h3 className='text-md font-bold '>
                            Cadastrar Produto
                        </h3>
                        <div className='flex  gap-1 text-gray-700'>
                            <button className='flex items-center gap-2 text-sm bg-zinc-0 h-10 px-3 w-min whitespace-nowrap rounded'>
                                <Plus size={22} />
                            </button>
                            <button className='flex items-center gap-2 text-sm bg-zinc-0 h-10 px-3 w-min whitespace-nowrap rounded'>
                                <Search size={18} />
                            </button>
                        </div>
                    </span>
                </div>

                <div className="w-full ">
                    <h3 className='text-md font-bold  mt-10 mb-5'>
                        Informações gerais
                    </h3>
                    <textarea className='outline-none flex gap-3 w-full h-24 border border-zinc-300 rounded'/>
                </div>
                <div className="w-full ">
                    <h3 className='text-md font-bold mt-10 mb-5'>Pagamento</h3>
                    <h4 className='text-xs font-bold mt-10 mb-5 '>Subtotal</h4>
                    <p className="flex flex-col gap-2 text-zinc-700 mb-6">
                        <span className="font-bold text-lg">R$ 2,596, 00</span>
                        <span className="text-sm text-zinc-700">(7 serviços e 5 produtos)</span>
                    </p>
                    <button className='flex items-center gap-2 text-sm bg-zinc-100 h-10 px-3 w-min whitespace-nowrap  rounded'>Aplicar desconto</button>
                    <h4 className='text-xs font-bold  mt-10 mb-5'>Desconto</h4>
                    <div className="flex gap-2 mb-4">
                        <button className="h-8 w-min px-3 text-xs rounded-full bg-zinc-500 hover:bg-zinc-400 focus:bg-zinc-700 text-white font-medium">Porcentagem</button>
                        <button className="h-8 w-min px-3 text-xs rounded-full bg-zinc-500 hover:bg-zinc-400 focus:bg-zinc-700 text-white font-medium">Código</button>
                        <button className="h-8 w-min px-3 text-xs rounded-full bg-zinc-500 hover:bg-zinc-400 focus:bg-zinc-700 text-white font-medium">Moeda</button>
                    </div>
                    <input placeholder="Ex. DESCONTO10" maxLength={24} className='outline-none w-full  text-xs h-12 border border-zinc-300 rounded pl-5 mb-6'></input>
                    <input placeholder="% 1" type="text" maxLength={4} className='outline-none w-full  text-xs h-12 border border-zinc-300 rounded pl-5 mb-6'></input>
                    <input placeholder="R$ 000,000,00" maxLength={10} className='outline-none w-full  text-xs h-12 border border-zinc-300 rounded pl-5 mb-6'></input>
                    <p className="flex flex-col  gap-2 text-zinc-700 mb-6">
                        <span className="font-bold text-sm">R$ 2,596, 00</span>
                    </p>
                    {/* Vai ser input tipo checkbox */}
                    <h4 className='font-bold  mt-10 mb-5 '>
                        Pagamento
                    </h4>
                   
                    <Tabs defaultValue="Adiantado" className="max-w-[400px] w-full text-sm">
                        <TabsList>
                            <TabsTrigger value="Adiantado" >
                                Adiantado
                            </TabsTrigger>
                            <TabsTrigger value="pos">
                                Pós serviço
                            </TabsTrigger>
                            <TabsTrigger value="custom">
                                Personalizado
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="Adiantado">
                            Total: R$ 265,00
                        </TabsContent>
                        <TabsContent value="pos">
                            Total: R$ 265,00
                        </TabsContent>
                        <TabsContent value="custom">
                            Total: R$ 265,00
                        </TabsContent>
                    </Tabs>
                    {/* <div className='gap-2 h-min mt-10 mb-5'>
                        <span className='mb-2'>
                            <label className='text-sm mb-4 text-gray-700'>Colaborador/Funcionário</label>
                        </span>
                        <br/>
                        <div className="w-full mt-2 text-sm h-12 border border-zinc-300 px-2 rounded">
                            <select className="w-full h-full bg-white outline-none" id="cars">
                                <option className="h-8" value="volvo">Pedro</option>
                                <option value="saab">José</option>
                                <option value="opel">Márcio</option>
                                <option value="audi">Ricardo</option>
                                <option value="saab">Antônio</option>
                                <option value="opel">Bernardo</option>
                                <option value="audi">Henrique</option>
                            </select>
                        </div>
                    </div> */}
                    <div className="flex flex-col gap-3 p-3 my-6 text-gray-700 text-sm">
                        <div className="flex gap-3">
                            <div className="">
                                <input 
                                    type="checkbox" 
                                    className="" 
                                />
                            </div>
                            Enviar Ordem de Serviço
                        </div>
                        <div className="flex gap-3">
                            <div className="">
                                <input type="checkbox" />
                            </div>
                            Enviar Comprovante de Pagamento
                        </div>
                        <div className="flex gap-3">
                            <div className="">
                                <input type="checkbox" />
                            </div>
                            Enviar Nota Fiscal
                        </div>
                    </div>
                    <div className="flex gap-3 justify-end my-4 ">
                        <div className="w-full flex justify-between text-xs">
                            <button className="border border-zinc-300 rounded font-semibold whitespace-nowrap h-10 w-min px-3 flex gap-2 items-center">
                                <ChevronLeft size={18} />
                                Anterior
                            </button>
                            <button className="border border-zinc-300 rounded font-semibold whitespace-nowrap h-10 w-min px-3 flex gap-2 items-center">
                                Próximo
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex gap-3 flex-col sm:flex-row w-full sm:justify-end bg-red-0 mt-10">
                    <button
                        className="bg-green-600 hover:bg-green-500 text-xs text-white rounded font-semibold whitespace-nowrap h-10 w-full sm:w-min px-3"
                        onClick={() => { }}
                    >
                        Gerar Venda
                    </button>
                    <button 
                        onChange={() => setShowModal(false)}
                        className="border border-neutral-300 w-full sm:w-min text-xs text-black-400 rounded font-semibold whitespace-nowrap h-10 w-full px-3">
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    )
}

// fidelidade
// permições para dar descontos
// venda a faturar



