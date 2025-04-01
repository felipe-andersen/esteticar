'use client'
import { Header } from "@/components/organisms/header";
import { Main } from "./main.view";


export function ServicesList() {
    return (
        
        <div 
            className=" w-[100vw] h-[100vh] overflow-hidden"
            data-testid="services-template"
        >
            <Header pageName="CRM"/>
            {/* <VerticalMenu/> */}
            <Main/>
        </div>
    )
}

