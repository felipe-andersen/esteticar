import VerticalMenu from "@/components/organisms/VerticalMenu";
import { TopBar } from "@/components/organisms/topBar";
import { Main } from "./main";


export function ServicesList() {
    return (
        <div className=" w-[100vw] h-[100vh] overflow-hidden">

            <TopBar pageName="CRM"/>
 
            <VerticalMenu/>

            <Main/>

        </div>
    )
}