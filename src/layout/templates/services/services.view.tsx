import VerticalMenu from "@/layout/organisms/VerticalMenu";
import { TopBar } from "@/layout/organisms/header";
import { Main } from "./main.view";


export function ServicesList() {
    return (
        <div className=" w-[100vw] h-[100vh] overflow-hidden">
            <TopBar pageName="CRM"/>
            <VerticalMenu/>
            <Main/>
        </div>
    )
}