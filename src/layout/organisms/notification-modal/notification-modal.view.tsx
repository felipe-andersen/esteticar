import ReactDOM from "react-dom";

type ModalProtocol = {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Modal(
    {setShowModal}: ModalProtocol
) {

    return (
        <div
            onClick={() => setShowModal(false)}
            className="fixed w-screen h-screen flex justify-end Z-[300]  bg-[rgba(1,1,1,1)] "
        >       
            <div 
                onClick={(e) => e.stopPropagation()}
                className="rounded-lg bg-white w-80 py-6 flex flex-col shadow"
            >
                <div className="px-6  flex justify-between items-center  h-10 mb-2">
                    <h2 className="text-lg font-bold">
                        Notificação
                    </h2>
                </div>
                <div className="h-8 flex items-center px-6 gap-6 text-xs border-b border-neutral-200 w-[90%] self-center mb-5 font-medium text-neutral-500">
                    <button>
                        Serviços
                    </button> 
                    <button>
                        Pagamentos
                    </button> 
                </div>
                <span className="font-semibold text-sm px-6">
                    Hoje
                </span>
                <div className="flex px-6  h-16  hover:bg-neutral-100 text-xs">
                    <div className="flex  w-full  justify-center ">
                        <div className="w-[70%] flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-blue-200"></div>
                            <div className=" flex flex-col justify-center">
                                <span className="font-semibold">
                                    Faturas a vencer
                                </span>
                                <span className="text-neutral-400">
                                    Total de R$ 5.000
                                </span>
                            </div>
                        </div>
                        <div className="flex  w-[30%] flex-col  justify-center text-neutral-400 text-xs">
                            6 PM
                        </div>
                    </div>
                </div>
                <div className="flex px-6  h-16  hover:bg-neutral-100 text-xs">
                    <div className="flex  w-full  justify-center ">
                        <div className="w-[70%] flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-blue-200"></div>
                            <div className=" flex flex-col justify-center">
                                <span className="font-semibold">
                                    Faturas a vencer
                                </span>
                                <span className="text-neutral-400">
                                    Total de R$ 5.000
                                </span>
                            </div>
                        </div>
                        <div className="flex  w-[30%] flex-col  justify-center text-neutral-400 text-xs">
                            6 PM
                        </div>
                    </div>
                </div>
                <div className="flex px-6  h-16  hover:bg-neutral-100 text-xs">
                    <div className="flex  w-full  justify-center ">
                        <div className="w-[70%] flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-blue-200"></div>
                            <div className=" flex flex-col justify-center">
                                <span className="font-semibold">
                                    Faturas a vencer
                                </span>
                                <span className="text-neutral-400"> 
                                    Total de R$ 5.00
                                </span>
                            </div>
                        </div>
                        <div className="flex  w-[30%] flex-col  justify-center text-neutral-400 text-xs">
                            6 PM
                        </div>
                    </div>
                </div>
                <div className="flex px-6  h-16  hover:bg-neutral-100 text-xs">
                    <div className="flex  w-full  justify-center ">
                        <div className="w-[70%] flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-blue-200"></div>
                            <div className=" flex flex-col justify-center">
                                <span className="font-semibold">
                                    Faturas a vencer
                                </span>
                                <span className="text-neutral-400">
                                    Total de R$ 5.000
                                </span>
                            </div>
                        </div>
                        <div className="flex  w-[30%] flex-col  justify-center text-neutral-400 text-xs">
                            6 PM
                        </div>
                    </div>
                </div>
                <div className="flex px-6  h-16  hover:bg-neutral-100 text-xs">
                    <div className="flex  w-full  justify-center ">
                        <div className="w-[70%] flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-blue-200"></div>
                            <div className=" flex flex-col justify-center">
                                <span className="font-semibold">
                                    Faturas a vencer
                                </span>
                                <span className="text-neutral-400">
                                    Total de R$ 5.000
                                </span>
                            </div>
                        </div>
                        <div className="flex  w-[30%] flex-col  justify-center text-neutral-400 text-xs">
                            6 PM
                        </div>
                    </div>
                </div>
                <span className="font-semibold text-sm px-6">
                    Ontem
                </span>
                <div className="flex px-6  h-16  hover:bg-neutral-100 text-xs">
                    <div className="flex  w-full  justify-center ">
                        <div className="w-[70%] flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-blue-200"></div>
                            <div className=" flex flex-col justify-center">
                                <span className="font-semibold">
                                    Faturas a vencer
                                </span>
                                <span className="text-neutral-400">
                                    Total de R$ 5.000
                                </span>
                            </div>
                        </div>
                        <div className="flex  w-[30%] flex-col  justify-center text-neutral-400 text-xs">
                            6 PM
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}