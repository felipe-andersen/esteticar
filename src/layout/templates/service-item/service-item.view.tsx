import VerticalMenu from "@/layout/organisms/VerticalMenu";
import { TopBar } from "@/layout/organisms/header";
import { Main } from "./main.view";


export default function ServiceItem() {
    return (
        <div className=" w-[100vw] h-[100vh] overflow-hidden">
            <TopBar pageName="CRM"/>
            <VerticalMenu/>
            <Main/>
        </div>
    )
}