import { Header } from "@/layout/organisms/header";
import { Main } from "./main";
import SideBar from "@/layout/organisms/side-bar";


export function Staff() {
    return (
        <div className="w-full h-[100vh] overflow-y-hidden">
            <Header pageName="CRM"/>
            <SideBar/>
            <Main />
        </div>
    )
}