import { Play } from "lucide-react"



export const Depoiment = () => {
    return (
        <div className=" w-full h-full flex bg-neutral-800  py-10 px-10 gap-6">
            {/* <div className="absolute w-full   h-[600px] h-full scale-[150%] rotate-45 bg-neutral-900"></div> */}
            <div className=" relative w-42 rounded-lg  aspect-video bg-red-100 flex justify-center items-center overflow-hidden ">
                
                <video
                    width="640"
                    height="360"
                    controls
                    poster="homem.jpeg"
                    >
                    <source src="caminho/do-video.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                </video>
                <button className="absolute rounded-full h-20 w-20 bg-teal-400 flex items-center justify-center">
                    <Play stroke="white" fill="white" size={36}/>
                </button>
            </div>
            <div className=" relative w-42  rounded-lg  aspect-video bg-red-100 flex justify-center items-center overflow-hidden ">
                
                <video
                    width="640"
                    height="360"
                    controls
                    poster="homem.jpeg"
                    >
                    <source src="caminho/do-video.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                </video>
                <button className="absolute rounded-full h-20 w-20 bg-teal-400 flex items-center justify-center">
                    <Play stroke="white" fill="white" size={36}/>
                </button>
            </div>
            <div className=" relative w-42  rounded-lg  aspect-video bg-red-100 flex justify-center items-center overflow-hidden ">
                <video
                    width="640"
                    height="360"
                    controls
                    poster="homem.jpeg"
                    >
                    <source src="caminho/do-video.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                </video>
                <button className="absolute rounded-full h-20 w-20 bg-teal-400 flex items-center justify-center">
                    <Play stroke="white" fill="white" size={36}/>
                </button>
            </div>


            
        </div>
    )
}