import { ArrowLeftCircleIcon, ArrowLeftIcon, CalendarDays, ChevronLeft, ChevronRight, Clock, Rows2, TrendingUp, X } from "lucide-react";
import Link from "next/link";

const tasks = [{},{},{},{},{},{},{},{},{},{},{},{},{}]

const slot1Events = [
    {
        slotId: "",
        // serviceId: "",
        eventId: "56523",
        saleId: "216hfgth",
        // customerCPFCNPJ: "",
        status: "A fazer", // A fazer, Em andamento, Concluído, Entregue, Cancelado
        vehicle: {
            model: "",
            licensePlate: "", //padrão Mercosul
            brand: "",
        },
        details: "Lorem Ipson",
        serviceDuration: "00:15:00", // hh:mm:ss | 00:00:00
        scheduledDate: "",
        deliveryDate: "",
        price: "567.89", // dollar | 1,253,200.00
        discount: "", // percentage | 30%
    }
]

const slotsList = [[],[]]
        
   
    


export default function Schedule() {
    return (
        <div className="bg-red-0 h-full w-full bg-white h-full w-full max-w-96">
            <div className="flex justify-between items-center text-sm bg-red-0 h-12 border-b px-4">
                {/* <ArrowLeftIcon/> */}
                <p className="text-lg font-bold">Vaga</p>
                <X/>
            </div>
            <div className="flex justify-between items-center text-sm bg-red-0 h-12 border-b px-4">
                <div>SEX 13 DEZ</div>
                <div className="flex items-center justify-between gap-2">
                    <span>
                        <ChevronLeft/>
                    </span>
                    <span>
                        Vaga 1
                    </span>
                    <span>
                        <ChevronRight/>
                    </span>
                </div>
                <div className="flex items-center justify-between gap-5">
                    <span className="underline">
                        <CalendarDays size={18}/>
                    </span>
                    <span className="underline">
                        <Rows2 size={18}/>
                    </span>
                </div>
            </div>
            <div className="flex flex-col mb-1 h-full overflow-y-scroll gap-1">
                {
                    tasks.map(task => (
                        <Link href="" className="flex gap-6  py-3 h-min items-center bg-neutral-100 text-sm px-3 justify-center">
                            <div className="whitespace-nowrap flex flex-col gap-2 ">
                                <div className="flex gap-2   ">
                                    <Clock 
                                        size={14}
                                        className="mt-1"
                                    />
                                    <span className="flex flex-col gap-1 ">
                                        09:00 am - 09:30 am
                                    </span>
                                </div>
                                <div className="flex gap-2  items-center">
                                    <TrendingUp size={18}/>
                                    <span>A fazer</span>
                                </div>
                            </div>
                            <div className="flex flex-col  gap-1">
                                <div className="flex gap-2 items-center">
                                    Placa:
                                    <span className="bg-green-300 w-min h-6 px-2 text-xs flex items-center rounded">
                                        ABC1D23
                                    </span>
                                </div>
                                <div>Toyota - Corarola</div>
                                {/* <div>Rivaldo Mendes</div>
                                <div>(21) 96642-8712</div> */}
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}