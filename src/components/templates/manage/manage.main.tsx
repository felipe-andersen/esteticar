'use client'
import { ChevronRight, HelpCircleIcon, LifeBuoy, PenTool } from "lucide-react";
import { useRouter } from 'next/navigation';
import { usePathname } from "next/navigation";
import react from "react";
import { useEffect } from "react";
import { trace } from "@opentelemetry/api";


const Main = react.memo(function Main () {
    const router = useRouter()
    const currentRouter = usePathname()

    useEffect(() => {
        const tracer = trace.getTracer("main mount");
        const span = tracer.startSpan("Montando MeuComponente");
        
        setTimeout(() => {
            span.end(); // Finalizar o span após o efeito ser processado
        }, 0);
    
        return () => {
            const unmountTracer = trace.getTracer("main unmount");
            const unmountSpan = unmountTracer.startSpan("Desmontando MeuComponente");
            unmountSpan.end();
        };
      }, []);
    
    return (
        <div className="flex flex-col sm:mt-16 p-4 h-[calc(100%-48px] sm:h-[calc(100%-56px] h-full w-full">
            <div className="mb-5 flex flex-col gap-2">
                <h1 className="font-bold text-lg mb-0">Gerencie sua empresa</h1>
                <button 
                    className="flex items-center justify-between rounded-xl p-4 bg-neutral-100 text-md  font-bold"
                    onClick={() => router.push("/dashboard/coutyard")}
                >
                    Pátio
                    <ChevronRight 
                        size={18}
                    />
                </button>
                <button 
                    className="flex items-center justify-between rounded-xl p-4 bg-neutral-100 text-md  font-bold"
                    onClick={() => router.push("/dashboard/PDV")}
                >
                    Vendas
                    <ChevronRight size={18}/>
                </button>
                <button 
                    className="flex items-center justify-between rounded-xl p-4 bg-neutral-100 text-md  font-bold"
                    onClick={() => router.push("/dashboard/finance")}
                >
                    Finaceiro
                    <ChevronRight size={18}/>
                </button>
                <button 
                    className="flex items-center justify-between rounded-xl p-4 bg-neutral-100 text-md  font-bold"
                    onClick={() => router.push("/dashboard/marketing")}
                >
                    Marketing
                    <ChevronRight size={18} stroke="#006421"/>
                </button>
            </div>
            <div className="flex gap-2 flex-wrap text-sm w-full bg-red-0">
            <h1 className="font-bold text-lg mb-0">Ferramentas</h1>
                <span className="flex w-full gap-2  font-semibold text-xs ">
                    <button 
                        className="p-4 min-w-[100px] w-full  rounded flex flex-col gap-2 bg-neutral-0 aspect-square m-0 max-w-[120px] max-h-[120px] border flex flex-col items-stretch content-between border-neutral-600"
                        onClick={() => router.push("/dashboard/services")}
                    >
                        <div className="h-3/6 flex items-start bg-red-0">
                            <PenTool size={22} strokeWidth={1}  stroke="#006421"/>
                        </div>
                        <span className="flex items-end bg-red-100 h-full">
                            Meus Serviços
                        </span>
                    </button>
                    <button 
                        className="p-3 min-w-[100px] w-full  rounded flex flex-col gap-2 bg-neutral-0 aspect-square m-0 max-w-[120px] max-h-[120px] border flex flex-col items-stretch content-between"
                        onClick={() => router.push("/dashboard/products")}
                    >
                        <div className="h-3/6 flex items-end bg-red-0">
                            <PenTool size={22} strokeWidth={1} stroke="#006421"/>
                        </div>
                        <span className="flex items-end bg-red-100">
                            Meus Produtos
                        </span>
                      
                    </button>
                    <div 
                        className="p-3 min-w-[100px] w-full  rounded flex flex-col gap-2 bg-neutral-0 aspect-square m-0 max-w-[120px] max-h-[120px] border flex flex-col items-stretch content-between"
                        onClick={() => router.push("/dashboard/customers")}
                    >
                        <div className="h-3/6 flex items-end bg-red-0">
                            <PenTool size={22} strokeWidth={1} stroke="#006421"/>
                        </div>
                        Clientes
                    </div>
                    
                </span>
                <span className="flex w-full  gap-2">
                    <button 
                        className="p-4 w-full bg-neutral-100 rounded flex flex-col gap-2 bg-neutral-100 aspect-square m-0"
                        onClick={() => router.push("/dashboard/assistent")}
                    >
                        <div className="h-3/6 flex items-end bg-red-0">
                            <PenTool size={22} strokeWidth={1} stroke="#006421"/>
                        </div>
                        Assistent
                    </button>
                    <button 
                        className="p-4 w-full bg-neutral-100 rounded flex flex-col gap-2 bg-neutral-100 aspect-square m-0"
                        onClick={() => router.push("/dashboard/grow-up")}
                    >
                        <div className="h-3/6 flex items-end bg-red-0">
                            <PenTool size={22} strokeWidth={1} stroke="#006421"/>
                        </div>
                        Crédito p/ crescer
                    </button>
                    <button 
                        className="p-4 w-full bg-neutral-100 rounded flex flex-col gap-2 bg-neutral-100 aspect-square m-0"
                        onClick={() => router.push("/dashboard/partnership")}
                    >
                        <div className="h-3/6 flex items-end bg-red-0">
                            <PenTool size={22} strokeWidth={1} stroke="#006421"/>
                        </div>
                        <span className="h-3/6 bg-green-0" >
                            Parcerias
                        </span>
                    </button>
                </span>
                
            </div>
            <div className="w-min  p-3 border flex gap-2 items-center bg-neutral-100">
                <div className="w-6 h-6 overflow-hidden">
                    <img src="https://www.svgrepo.com/show/295662/lifebuoy.svg"></img>
                </div>
                Suporte
            </div>
        </div>
    )
})

export default Main