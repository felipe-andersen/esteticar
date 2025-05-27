import { Depoiment } from "@/components/organisms/depoiments/depoiments.view"
import "./home.view.css"
import { FAQ } from "@/components/organisms/faq/faq.view"


export const Main = () => {
    return (
        <main className="w-full overflow-y-scroll flex flex-col fixed h-[calc(100%-64px)] top-16">
            <div className="w-full bg-[#0bb877]  px-8 flex items-center py-20">
                <div className="px-10  w-3/6   gap-5 flex flex-col ">
                    <p className="text-neutral-50 text-5xl  font-bold lh">
                        Gestão inteligente para <span className="border-b-black border-b-[4px] text-neutral-50 h-min">vender mais</span> e se preocupar menos, tem no Bling!
                    </p>
                    <p className="">
                        Gestão inteligente para vender mais e se preocupar menos, tem no Bling! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                    <button className="h-14 px-6 rounded-full bg-black text-neutral-50 text-base w-min whitespace-nowrap">
                        Começar agora
                    </button>

                    <div className="flex gap-5 items-center mt-20">
                        <p>Confiável por</p>
                        <div className="w-24 h-14 bg-red-100">
                            <img src={""}/>:
                        </div>
                    </div>
                </div>
                <div className="p-10 text-5xl w-3/6 font-bold  py-32">
                    Gestão inteligente para vender mais e se preocupar menos, tem no Bling!
                </div>
            </div>
            <Depoiment/>
            <FAQ/>
            <div className="px-20">
                <h2 className="text-5xl font-bold self-center text-center mb-16">
                    Qual é a prioridade para sua empresa?
                </h2>
                <div className="flex h-[600px] gap-6">
                    <div className="bg-black w-1/2 bg-[#0bb87628]"></div>
                    <div  className=" w-1/2 flex gap-6 flex-col ">
                        <div className="h-1/2 bg-red-300 bg-[#ebe9e5]"></div>
                        <div className="h-1/2 bg-[#f5c3ad]"></div>
                    </div>
                </div>
            </div>
        </main>
    )
}